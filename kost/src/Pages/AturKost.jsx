import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {} from "react-bootstrap";
import { Link } from "react-router-dom";
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

  const [kost, setKost] = useState([]);

  useEffect(() => {
    getKost();
  }, []);

  const getKost = async () => {
    const response = await axios.get("http://localhost:3001/kost");
    console.log("Response Data:", response.data);
    setKost(response.data);
  };

  const deleteKost = async (kostId) => {
    try {
      console.log("ID yang dihapus:", kostId);
      await axios.delete(`http://localhost:3001/kost/${kostId}`);
      console.log("Berhasil menghapus data dengan ID:", kostId);
      getKost();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="aturkos min-vh-100">
      <Container>
        <Col>
          {kost.map((atur) => {
            return (
              <div className="belakang" key={atur.uuid}>
                <Row>
                  <img src={atur.url} alt="" />
                </Row>
                <Row>
                  <div className="title">
                    <h5>{atur.nama}</h5>
                    <p>{atur.detail}</p>
                    <p>{atur.FasilitasU}</p>
                  </div>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft:"40%"
                    }}
                  >
                    <Link to={`editkos/${atur.uuid}`}>
                      <button id="btnUpdate style={{ flex: 1 }}">Update</button>
                    </Link>

                    <Link to={`/aturkos`}>
                      <button
                        id="btnDelete"
                        onClick={() => deleteKost(atur.uuid)}
                      >
                        DELETE
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
