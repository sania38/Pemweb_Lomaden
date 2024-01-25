import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Gmail from "../assets/gambar/Gmail.png";
import Facebook from "../assets/gambar/Facebook.png";
import Google from "../assets/gambar/google.png";
import gambar2 from "../assets/gambar/daftar.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.dataa.msg);
      }
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #388A8D, #50C2C9, #7FDEE3, #B2FDFF, #D9FEFF)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "9%",
      }}
    >
      <Container>
        <img className="bg-2" src={gambar2} alt="" />
        <div className="kotak-2">
          <h1 className="mb-4">Daftar</h1>

          <form onSubmit={handleSubmit}>
            <p className="has-text-centered">{msg}</p>
            <div className="group mb-4 mt-1">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Masukkan nama Anda</label>
            </div>

            <div className="group mt-4">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Masukkan Email</label>
            </div>

            <div className="group mt-4">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Masukkan Kata sandi</label>
            </div>

            <div className="group mt-4">
              <input
                type="password"
                className="input"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Konfirmasi kata sandi </label>
            </div>

            <div className="group mt-4">
              <input
                type="text"
                className="input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="admin/user"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Konfirmasi kata sandi </label>
            </div>

            <button type="submit" className="btn tombol w-100 fw-semibold mt-4">
              Daftar
            </button>
            <Link to="/login">
              <p className="mt-1">Punya akun? Masuk</p>
            </Link>
          </form>

          <div className="d-flex atau ">
            <hr className="hr w-100 fw-semibold" />
            <p className="fw-semibold mx-2">atau</p>
            <hr className="hr w-100 fw-semibold" />
          </div>

          <div className="d-flex imeg justify-content-center gap-4">
            <a href="#">
              <img src={Gmail} alt="" />
            </a>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Google} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
