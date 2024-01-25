import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";

const AturKost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role !== "admin") {
      navigate("/beranda");
    }
  }, [isError, user, navigate]);

  const [Kendaraan, setKendaraan] = useState([]);

  useEffect(() => {
    getKendaraan();
  }, []);

  const getKendaraan = async () => {
    const response = await axios.get(`http://localhost:3001/kendaraan`);
    console.log("Response Data:", response.data);
    setKendaraan(response.data);
  };

  const deletekendaraan = async (kendaraanId) => {
    try {
      await axios.delete(`http://localhost:3001/kendaraan/${kendaraanId}`);
      getKendaraan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="aturkendaraan min-vh-100">
      <Container>
        <Col>
          {Kendaraan.map((atur) => {
            return (
              <div className="belakang" key={atur.uuid}>
                <Row>
                  <img src={atur.url} alt="" />
                </Row>
                <Row>
                  <div className="title">
                    <h5>{atur.merek}</h5>
                    <p>{atur.deskripsi}</p>
                    <p>{atur.speku}</p>
                  </div>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      marginLeft: "40%"
                    }}
                  >
                    <Link to={`editkendaraan/${atur.uuid}`}>
                      <button id="btnUpdate">Update</button>
                    </Link>

                    <Link to={`/aturkendaraan`}>
                      <button
                        id="btnDelete"
                        onClick={() => deletekendaraan(atur.uuid)}
                      >
                        Hapus
                      </button>
                    </Link>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Container>
    </div>
  );
};

export default AturKost;
