import React, { useState, useEffect } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";


const CariKost = () => {
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

  const [kost, setKost] = useState([]);

  useEffect(() => {
    getKost();
  }, []);

  const getKost = async () => {
    const response = await axios.get("http://localhost:3001/kost");
    console.log("Response Data:", response.data);
    setKost(response.data);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKos = kost.filter(
    (kos) =>
      (kos.nama && kos.nama.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (kos.lokasi &&
        kos.lokasi.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="Kos min-vh-100" style={{ marginTop: "4%" }}>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
              Segera Temukan Kost Impian
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
                <i className="fa-solid fa-magnifying-glass"></i>
                <FormControl
                  type="text"
                  placeholder="Cari kost"
                  onChange={handleSearch}
                />
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          {filteredKos.map((kos) => (
            <Col
              key={kos.id}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={kos.delay}
            >
              <Link
                to={`/detailkos/${kos.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                {console.log("Image URL:", kos.url)}
                <img src={kos.url} alt="" className="w-100 mb-5 rounded-top" />
                <div className="title">
                  <h5>{kos.nama}</h5>
                </div>
                <div className="jenis">
                  <h6>{kos.Kategori}</h6>
                  <p>{kos.Ketersediaan}</p>
                </div>
                <div className="detail" style={{ fontWeight: "400" }}>
                  <p>{kos.detail}</p>
                </div>
                <div className="lokasi">
                  <h6>{kos.Lokasi}</h6>
                </div>
                <div className="fasilitas">
                  <p>{kos.FasilitasU}</p>
                </div>
                <div className="harga">
                  <h6>{kos.harga}</h6>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CariKost;
