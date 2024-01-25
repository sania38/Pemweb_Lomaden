import React, { useState, useEffect } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";


const CariKendaraan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const [Kendaraan, setKendaraan] = useState([]);

  useEffect(() => {
    getKendaraan();
  }, []);

  const getKendaraan = async () => {
    const response = await axios.get("http://localhost:3001/kendaraan");
    console.log("Response Data:", response.data);
    setKendaraan(response.data);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKendaraan = Kendaraan.filter(
    (kendaraan) =>
      kendaraan.merek.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kendaraan.lokasi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Kos min-vh-100" style={{ marginTop: "4%" }}>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
              Segera Temukan Kendaraan Impian
            </h1>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
              Anda di Lombok
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <form className="mb-3">
              <div className="search-bar animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fa-solid fa-magnifying-glass "></i>
                <FormControl
                  type="text"
                  placeholder="Cari Kendaraan"
                  onChange={handleSearch}
                />
              </div>
            </form>
          </Col>
        </Row>

        <Row>
          {filteredKendaraan.map((kendaraan) => (
            <Col
              key={kendaraan.id}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={kendaraan.delay}
            >
              <Link
                to={`/detailkendaraan/${kendaraan.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <img
                  src={kendaraan.url}
                  alt=""
                  className="w-100 mb-5 rounded-top"
                />
                {console.log("Image URL:", kendaraan.url)}
              </Link>
              <div className="title">
                <h5>{kendaraan.merek}</h5>
              </div>
              <div className="jenis">
                <h6>{kendaraan.transmisi}</h6>
                <p>{kendaraan.sisa}</p>
              </div>
              <div className="detail">
                <p>{kendaraan.deskripsi}</p>
              </div>
              <div className="lokasi">
                <h6>{kendaraan.lokasi}</h6>
              </div>
              <div className="fasilitas">
                <p>{kendaraan.speku}</p>
              </div>
              <div className="harga">
                <h6>{kendaraan.hargau}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CariKendaraan;
