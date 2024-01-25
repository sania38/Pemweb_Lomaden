import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailKosComp from "../Component/DetailKoscomp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";
import axios from "axios";


const DetailKos = () => {
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


  const { id } = useParams();
  const selectedKos = kost.find((kos) => kos.id === parseInt(id, 10));

  if (!selectedKos) {
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
          <DetailKosComp kos={selectedKos} />
        </Row>
      </Container>
    </div>
  );
};

export default DetailKos;
