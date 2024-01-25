import kost from "../models/KostModel.js";
import User from "../models/UserModels.js";
import path from "path";
import fs from "fs";
import { Op } from "sequelize";

export const getKost = async (req, res) => {
  try {
    let response;
    response = await kost.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "uuid", "name", "email"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKostById = async (req, res) => {
  try {
    const kostData = await kost.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!kostData) return res.status(404).json({ msg: "data tidak ditemukan" });

    let response;
    response = await kost.findOne({
      where: {
        id: kostData.id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "uuid", "name", "email"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createKost = async (req, res) => {
  const {
    nama,
    detail,
    Ketersediaan,
    Kategori,
    Lokasi,
    FasilitasU,
    telepon,
    harga,
    sk1,
    sk2,
    sk3,
    fk1,
    fk2,
    fk3,
    fk4,
    fk5,
    fk6,
    fk7,
    fkm1,
    fkm2,
    fkm3,
    fkm4,
    fkm5,
    fu1,
    fu2,
    fu3,
    fu4,
    fu5,
    pk1,
    pk2,
    pk3,
    pk4,
    maps,
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
      await kost.create({
        nama: nama,
        detail: detail,
        Ketersediaan: Ketersediaan,
        Kategori: Kategori,
        Lokasi: Lokasi,
        FasilitasU: FasilitasU,
        telepon: telepon,
        harga: harga,
        sk1: sk1,
        sk2: sk2,
        sk3: sk3,
        fk1: fk1,
        fk2: fk2,
        fk3: fk3,
        fk4: fk4,
        fk5: fk5,
        fk6: fk6,
        fk7: fk7,
        fkm1: fkm1,
        fkm2: fkm2,
        fkm3: fkm3,
        fkm4: fkm4,
        fkm5: fkm5,
        fu1: fu1,
        fu2: fu2,
        fu3: fu3,
        fu4: fu4,
        fu5: fu5,
        pk1: pk1,
        pk2: pk2,
        pk3: pk3,
        pk4: pk4,
        maps: maps,
        image: fileName,
        url: url,
        userId: req.userId,
      });
    } else {
      return res.status(403).json({ msg: "Akses Terlarang" });
    }
    res.status(201).json({ msg: "Kos Berhasil Ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateKost = async (req, res) => {
  try {
    const kostData = await kost.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!kostData) return res.status(404).json({ msg: "data tidak ditemukan" });

    let fileName = "";
    if (req.files === null) {
      fileName = kost.image;
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

      const filepath = `./public/images/${kostData.image}`;
      fs.unlinkSync(filepath);

      file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }

    const {
      nama,
      detail,
      Ketersediaan,
      Kategori,
      Lokasi,
      FasilitasU,
      telepon,
      harga,
      sk1,
      sk2,
      sk3,
      fk1,
      fk2,
      fk3,
      fk4,
      fk5,
      fk6,
      fk7,
      fkm1,
      fkm2,
      fkm3,
      fkm4,
      fkm5,
      fu1,
      fu2,
      fu3,
      fu4,
      fu5,
      pk1,
      pk2,
      pk3,
      pk4,
      maps,
    } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    if (req.role === "admin") {
      await kost.update(
        {
          nama: nama,
          detail: detail,
          Ketersediaan: Ketersediaan,
          Kategori: Kategori,
          Lokasi: Lokasi,
          FasilitasU: FasilitasU,
          telepon: telepon,
          harga: harga,
          sk1: sk1,
          sk2: sk2,
          sk3: sk3,
          fk1: fk1,
          fk2: fk2,
          fk3: fk3,
          fk4: fk4,
          fk5: fk5,
          fk6: fk6,
          fk7: fk7,
          fkm1: fkm1,
          fkm2: fkm2,
          fkm3: fkm3,
          fkm4: fkm4,
          fkm5: fkm5,
          fu1: fu1,
          fu2: fu2,
          fu3: fu3,
          fu4: fu4,
          fu5: fu5,
          pk1: pk1,
          pk2: pk2,
          pk3: pk3,
          pk4: pk4,
          maps: maps,
          image: fileName,
          url: url,
        },
        {
          where: {
            id: kostData.id,
          },
        }
      );
    } else {
      if (req.userId !== kost.userId)
        return res.status(403).json({ msg: "Akses Terlarang" });
      await kost.update(
        {
          nama: nama,
          detail: detail,
          Ketersediaan: Ketersediaan,
          Kategori: Kategori,
          Lokasi: Lokasi,
          FasilitasU: FasilitasU,
          telepon: telepon,
          harga: harga,
          sk1: sk1,
          sk2: sk2,
          sk3: sk3,
          fk1: fk1,
          fk2: fk2,
          fk3: fk3,
          fk4: fk4,
          fk5: fk5,
          fk6: fk6,
          fk7: fk7,
          fkm1: fkm1,
          fkm2: fkm2,
          fkm3: fkm3,
          fkm4: fkm4,
          fkm5: fkm5,
          fu1: fu1,
          fu2: fu2,
          fu3: fu3,
          fu4: fu4,
          fu5: fu5,
          pk1: pk1,
          pk2: pk2,
          pk3: pk3,
          pk4: pk4,
          maps: maps,
          image: fileName,
          url: url,
        },
        {
          where: {
            [Op.and]: [{ id: kostData.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Kost berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteKost = async (req, res) => {
  try {
    const kostData = await kost.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!kostData) return res.status(404).json({ msg: "data tidak ditemukan" });

    if (req.role === "admin") {
      const filepath = `./public/images/${kostData.image}`;
      fs.unlinkSync(filepath);
      await kost.destroy({
        where: {
          id: kostData.id,
        },
      });
    } else {
      return res.status(403).json({ msg: "Akses Terlarang" });
    }
    res.status(200).json({ msg: "Kost berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
