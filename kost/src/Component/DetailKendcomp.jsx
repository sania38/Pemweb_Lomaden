import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DetailKendcomp = ({ kendaraan }) => {
    const [Kendaraan, setKendaraan] = useState([]);

    useEffect(() => {
      getKendaraan();
    }, []);

    const getKendaraan = async () => {
      const response = await axios.get("http://localhost:3001/kost");
      setKendaraan(response.data);
    };
  return (
    <div className="utama">
      <div className="head">
        <img src={kendaraan.url} />
        <img src={kendaraan.url} />
      </div>
      <h1>
        {kendaraan.deskripsi}
      </h1>
      <div className="ket">
        <p className="tipe">{kendaraan.transmisi}</p>
        <p className="sisa">{kendaraan.sisa}</p>
        <i className="fa-solid fa-location-dot">
          <p>{kendaraan.lokasi}</p>
        </i>
        <i className="fa-solid fa-phone">
          <p>{kendaraan.telepon}</p>
        </i>
      </div>

      <h2 className="harga">{kendaraan.hargau}</h2>

      <div className="pilih">
        <a
          href={`https://wa.me/${kendaraan.telepon}`}
          style={{ Color: "#B2FDFF" }}
        >
          <button className="nego">Negosiasi</button>
        </a>
        <Link to="/carikos">
          <button>Batal</button>
        </Link>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Spesifikasi Kendaraan</h4>
      <div className="spek">
        <i className="fa-solid fa-user-group">
          <p>{kendaraan.sp1}</p>
        </i>

        <i className="fa-solid fa-gas-pump">
          <p>{kendaraan.sp2}</p>
        </i>

        <i className="fa-solid fa-gears">
          <p>{kendaraan.sp3}</p>
        </i>

        <i className="fa-solid fa-gears">
          <p>{kendaraan.sp4}</p>
        </i>

        <i className="fa-solid fa-gauge">
          <p>{kendaraan.sp5}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Ketentuan Harga</h4>
      <div className="fkamar">
        <i className="fa-solid fa-car">
          <p>{kendaraan.h1}</p>
        </i>

        <i className="fa-solid fa-car">
          <p>{kendaraan.h2}</p>
        </i>

        <i className="fa-solid fa-car">
          <p>{kendaraan.h3}</p>
        </i>

        <i className="fa-solid fa-car">
          <p>{kendaraan.h4}</p>
        </i>

        <i className="fa-solid fa-car">
          <p>{kendaraan.h5}</p>
        </i>

        <i className="fa-solid fa-car">
          <p>{kendaraan.h6}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Peraturan Sewa</h4>
      <div className="fkm">
        <i className="fa-solid fa-gas-pump">
          <p>{kendaraan.ps1}</p>
        </i>

        <i className="fa-solid fa-car-burst">
          <p>{kendaraan.ps2}</p>
        </i>

        <i className="fa-solid fa-id-card">
          <p>{kendaraan.ps3}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Syarat Sewa</h4>
      <div className="fumum">
        <i className="fa-solid fa-id-card">
          <p>{kendaraan.ss1}</p>
        </i>

        <i className="fa-solid fa-id-card">
          <p>{kendaraan.ss2}</p>
        </i>

        <i className="fa-solid fa-sack-dollar">
          <p>{kendaraan.ss3}</p>
        </i>

        <i className="fa-solid fa-id-card">
          <p>{kendaraan.ss4}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <div className="lokasidetail">
        <h4>Lokasi</h4>
        <h6>{kendaraan.lokasi}</h6>
        <a href={kendaraan.maps} target="_blank" rel="noopener noreferrer">
          Lihat Peta
        </a>
      </div>
    </div>
  );
};

export default DetailKendcomp;
