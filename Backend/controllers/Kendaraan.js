import kendaraan from "../models/KendaraanModels.js";
import User from "../models/UserModels.js";
import path from "path";
import fs from "fs";
import { Op } from "sequelize";

export const getKendaraan = async (req, res) => {
  try {
    let response;
    response = await kendaraan.findAll({
      attributes: [
        "id",
        "uuid",
        "merek",
        "deskripsi",
        "transmisi",
        "speku",
        "telepon",
        "hargau",
        "sp1",
        "sp2",
        "sp3",
        "sp4",
        "sp5",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ps1",
        "ps2",
        "ps3",
        "lokasi",
        "maps",
        "ss1",
        "ss2",
        "ss3",
        "ss4",
        "url",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getKendaraanById = async (req, res) => {
  try {
    const kendaraanData = await kendaraan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!kendaraanData)
      return res.status(404).json({ msg: "data tidak ditemukan" });

    let response;
      response = await kendaraan.findOne({
        attributes: [
          "id",
          "uuid",
          "merek",
          "deskripsi",
          "transmisi",
          "speku",
          "telepon",
          "hargau",
          "sp1",
          "sp2",
          "sp3",
          "sp4",
          "sp5",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ps1",
          "ps2",
          "ps3",
          "lokasi",
          "maps",
          "ss1",
          "ss2",
          "ss3",
          "ss4",
          "url",
        ],
        where: {
          id: kendaraanData.id,
        },
        include: [
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
        ],
      });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createKendaraan = async (req, res) => {
  const {
    merek,
    deskripsi,
    transmisi,
    speku,
    telepon,
    hargau,
    sp1,
    sp2,
    sp3,
    sp4,
    sp5,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ps1,
    ps2,
    ps3,
    lokasi,
    maps,
    ss1,
    ss2,
    ss3,
    ss4,
  } = req.body;

  if (!req.files || !req.files.file) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedTypes = [".png", ".jpg", ".jpeg"];

  if (!allowedTypes.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
  });

  try {
    if (req.role === "admin") {
      await kendaraan.create({
        merek: merek,
        deskripsi: deskripsi,
        transmisi: transmisi,
        speku: speku,
        telepon: telepon,
        hargau: hargau,
        sp1: sp1,
        sp2: sp2,
        sp3: sp3,
        sp4: sp4,
        sp5: sp5,
        h1: h1,
        h2: h2,
        h3: h3,
        h4: h4,
        h5: h5,
        h6: h6,
        ps1: ps1,
        ps2: ps2,
        ps3: ps3,
        lokasi: lokasi,
        maps: maps,
        ss1: ss1,
        ss2: ss2,
        ss3: ss3,
        ss4: ss4,
        image: fileName,
        url: url,
        userId: req.userId,
      });
    } else {
      return res.status(403).json({ msg: "Akses Terlarang" });
    }

    res.status(201).json({ msg: "Kendaraan Berhasil Ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateKendaraan = async (req, res) => {
  try {
    const kendaraanData = await kendaraan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!kendaraanData)
      return res.status(404).json({ msg: "data tidak ditemukan" });

    let fileName = "";
    if (req.files === null) {
      fileName = kendaraan.image;
    } else {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedTypes = [".png", ".jpg", ".jpeg"];

      if (!allowedTypes.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });

      const filepath = `./public/images/${kendaraanData.image}`;
      fs.unlinkSync(filepath);

      file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }

    const {
      merek,
      deskripsi,
      transmisi,
      speku,
      telepon,
      hargau,
      sp1,
      sp2,
      sp3,
      sp4,
      sp5,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ps1,
      ps2,
      ps3,
      lokasi,
      maps,
      ss1,
      ss2,
      ss3,
      ss4,
    } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    if (req.role === "admin") {
      await kendaraan.update(
        {
          merek: merek,
          deskripsi: deskripsi,
          transmisi: transmisi,
          speku: speku,
          telepon: telepon,
          hargau: hargau,
          sp1: sp1,
          sp2: sp2,
          sp3: sp3,
          sp4: sp4,
          sp5: sp5,
          h1: h1,
          h2: h2,
          h3: h3,
          h4: h4,
          h5: h5,
          h6: h6,
          ps1: ps1,
          ps2: ps2,
          ps3: ps3,
          lokasi: lokasi,
          maps: maps,
          ss1: ss1,
          ss2: ss2,
          ss3: ss3,
          ss4: ss4,
          image: fileName,
          url: url,
          userId: req.userId,
        },
        {
          where: {
            id: kendaraanData.id,
          },
        }
      );
    } else {
      if (req.userId !== kendaraan.userId)
        return res.status(403).json({ msg: "Akses Terlarang" });
      await kendaraan.update(
        {
          merek: merek,
          deskripsi: deskripsi,
          transmisi: transmisi,
          speku: speku,
          telepon: telepon,
          hargau: hargau,
          sp1: sp1,
          sp2: sp2,
          sp3: sp3,
          sp4: sp4,
          sp5: sp5,
          h1: h1,
          h2: h2,
          h3: h3,
          h4: h4,
          h5: h5,
          h6: h6,
          ps1: ps1,
          ps2: ps2,
          ps3: ps3,
          lokasi: lokasi,
          maps: maps,
          ss1: ss1,
          ss2: ss2,
          ss3: ss3,
          ss4: ss4,
          image: fileName,
          url: url,
          userId: req.userId,
        },
        {
          where: {
            [Op.and]: [{ id: kendaraanData.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "kendaraan berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteKendaraan = async (req, res) => {
  try {
    const kendaraanData = await kendaraan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!kendaraanData)
      return res.status(404).json({ msg: "data tidak ditemukan" });

    if (req.role === "admin") {
      const filepath = `./public/images/${kendaraanData.image}`;
      fs.unlinkSync(filepath);
      await kendaraan.destroy({
        where: {
          id: kendaraanData.id,
        },
      });
    } else {
        return res.status(403).json({ msg: "Akses Terlarang" });
    }
    res.status(200).json({ msg: "kendaraan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
