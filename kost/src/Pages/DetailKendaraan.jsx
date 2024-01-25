import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailKendcomp from "../Component/DetailKendcomp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";
import axios from "axios";

const DetailKendaraan = () => {
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

  const { id } = useParams();
  const selectedKendaraaan = Kendaraan.find(
    (kendaraan) => kendaraan.id === parseInt(id, 10)
  );

  if (!selectedKendaraaan) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div className="detaikos min-vh-100" style={{ marginTop: "6%" }}>
      <Container>
        <Row>
          <Col>
            <form
              className="mb-3"
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <div
                className="search-bar animate__animated animate__fadeInUp animate__delay-1s"
                style={{ flex: "1" }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <FormControl type="text" placeholder="Cari kost" />
              </div>
            </form>
          </Col>
        </Row>

        <Row>
          <DetailKendcomp kendaraan={selectedKendaraaan} />
        </Row>
      </Container>
    </div>
  );
};

export default DetailKendaraan;
