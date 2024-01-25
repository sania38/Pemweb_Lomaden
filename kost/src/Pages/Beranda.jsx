import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroImage from "../assets/gambar/hero.png";
import profile from "../assets/gambar/profile.png";

import logo from "../assets/gambar/logo (2).png";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import { homeKos } from "../Data/data";
import { homeKendaraan } from "../Data/data";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";

const Beranda = () => {
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
  }, [isError, navigate]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKos = homeKos.filter(
    (kos) =>
      kos.title && kos.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredKendaraan = homeKendaraan.filter((kendaraan) =>
    kendaraan.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          background:
            "linear-gradient(to right, #388A8D, #50C2C9, #7FDEE3, #B2FDFF, #D9FEFF)",
        }}
        variant="light"
        fixed="top"
        height="84px"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top"
              alt="Your Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="mx-auto"
              style={{
                fontSize: "18px",
                fontWeight: "inherit",
                marginRight: "20px",
              }}
            >
              <NavDropdown title="Kost" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/carikos">
                  Cari Kost
                </NavDropdown.Item>
                {user && user.role === "admin" && (
                  <div>
                    <NavDropdown.Item as={Link} to="/tambahkos">
                      Tambahkan Kost
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/aturkos">
                      Atur Kost
                    </NavDropdown.Item>
                  </div>
                )}
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/tentang"
                style={{ marginRight: "50px", marginLeft: "50px" }}
              >
                Tentang
              </Nav.Link>
              <NavDropdown title="Kendaraan" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/cariKendaraan">
                  Cari Kendaraan
                </NavDropdown.Item>
                {user && user.role === "admin" && (
                  <div>
                    <NavDropdown.Item as={Link} to="/tambahkendaraan">
                      Tambahkan Kendaraan
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/aturkendaraan">
                      Atur Kendaraan
                    </NavDropdown.Item>
                  </div>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/profile">
                <Button
                  style={{ background: "none", border: "none", padding: "0" }}
                >
                  <img
                    src={profile}
                    height="45"
                    className="d-inline-block align-top"
                    alt="Your Image"
                  />
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header
        className="w-100 min-vh-100 d-flex align-items-center"
        style={{
          background:
            "linear-gradient(to right, #388A8D, #50C2C9, #7FDEE3, #B2FDFF, #D9FEFF)",
        }}
      >
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan <br /> <span>Akomodasi Sementara</span> <br /> Bersama
                Kami!
              </h1>

              <p className="mb-4">
                Dengan LOMADEN temukan akomodasi sementara untuk anda selama di
                Lombok. LOMADEN menyediakan informasi mengenai sewa tempat
                tinggal sementara dan sewa kendaraan untuk daerah LOMBOK
              </p>
              <div className="tombolhome">
                <Link to="/carikos">
                  <button className="btn rounded-1 me-2 mb-xs-0 mb-2">
                    Cari Kost
                  </button>
                </Link>
                <Link to="/carikendaraan">
                  <button className="btn rounded-1 ms-4 mb-xs-0 mb-2">
                    Kendaraan
                  </button>
                </Link>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="HeroImage" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="Kos min-vh-100" style={{ marginTop: "4%" }}>
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">
                Segera Temukan Kost Impian
              </h1>
              <h1 className="fw-bold text-center">Anda di Lombok</h1>
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
            {filteredKos.map((kos) => {
              return (
                <Col key={kos.id}>
                  <Link
                    to={`/detailkos/${kos.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <img
                      src={kos.image}
                      alt=""
                      className="w-100 mb-5 rounded-top"
                    />
                    <div className="title">
                      <h5>{kos.title}</h5>
                    </div>
                    <div className="jenis">
                      <h6>{kos.jenis}</h6>
                      <p>{kos.sisa}</p>
                    </div>
                    <div className="detail" style={{ fontWeight: "400" }}>
                      <p>{kos.detail}</p>
                    </div>
                    <div className="lokasi">
                      <h6>{kos.lokasi}</h6>
                    </div>
                    <div className="fasilitas">
                      <p>{kos.fasilitas}</p>
                    </div>
                    <div className="harga">
                      <h6>{kos.harga}</h6>
                    </div>
                    <div className="star mb-2">
                      <i className={kos.star1}></i>
                      <i className={kos.star2}></i>
                      <i className={kos.star3}></i>
                      <i className={kos.star4}></i>
                      <i className={kos.star5}></i>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
          <Col className="d-flex justify-content-center rounded-5">
            <Link to="/carikos">
              <Button variant="primary rounded-5" onClick={() => {}}>
                Lainnya
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Button>
            </Link>
          </Col>
        </Container>
      </div>

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
            {filteredKendaraan.map((kendaraan) => {
              return (
                <Col key={kendaraan.id}>
                  <Link
                    to={`/detailkos/${kendaraan.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <img
                      src={kendaraan.image}
                      alt=""
                      className="w-100 mb-5 rounded-top"
                    />
                    <div className="title">
                      <h5>{kendaraan.title}</h5>
                    </div>
                    <div className="jenis">
                      <h6>{kendaraan.jenis}</h6>
                      <p>{kendaraan.sisa}</p>
                    </div>
                    <div className="detail">
                      <p>{kendaraan.detail}</p>
                    </div>
                    <div className="lokasi">
                      <h6>{kendaraan.lokasi}</h6>
                    </div>
                    <div className="fasilitas">
                      <p>{kendaraan.fasilitas}</p>
                    </div>
                    <div className="harga">
                      <h6>{kendaraan.harga}</h6>
                    </div>
                    <div className="star mb-2">
                      <i className={kendaraan.star1}></i>
                      <i className={kendaraan.star2}></i>
                      <i className={kendaraan.star3}></i>
                      <i className={kendaraan.star4}></i>
                      <i className={kendaraan.star5}></i>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
          <Col className="d-flex justify-content-center">
            <Link to="/carikendaraan">
              <Button variant="primary rounded-5" onClick={() => {}}>
                Lainnya
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Button>
            </Link>
          </Col>
        </Container>
      </div>

      <div className="about" style={{ marginTop: "7%" }}>
        <Container>
          <Row className="about-box">
            <h1
              className="fw-bold text-center mb-5"
              style={{ color: "#188A8D" }}
            >
              Tentang Kami
            </h1>
            <Col>
              <p style={{ textAlign: "justify" }}>
                Selamat datang di Lomaden, tempat terbaik untuk memenuhi
                kebutuhan sewa kosan dan kendaraan Anda di daerah Lombok.
                Temukan keseimbangan sempurna antara kenyamanan tempat tinggal
                dan mobilitas yang tak terbatas dengan layanan kami yang
                komprehensif. Lomaden menyediakan berbagai pilihan kosan yang
                mencakup segala kebutuhan Anda. Mulai dari kosan dengan
                fasilitas dasar hingga pilihan mewah dengan sentuhan modern,
                setiap properti didesain untuk memberikan pengalaman menginap
                yang menyenangkan. Kamar mandi dalam, AC, dan konektivitas Wi-Fi
                yang handal menjadi standar untuk memastikan kenyamanan Anda.
                Jelajahi keindahan Lombok dengan kendaraan dari Lomaden. Dari
                sepeda motor yang lincah hingga mobil keluarga yang nyaman, kami
                menyediakan berbagai pilihan kendaraan untuk memenuhi kebutuhan
                perjalanan Anda. Keselamatan dan kenyamanan menjadi fokus utama
                dalam setiap penyediaan kendaraan kami.
              </p>
            </Col>
            <Col>
              <img src={logo} alt="" className="w-100" />
            </Col>
          </Row>

          <Row>
            <p
              style={{
                textAlign: "justify",
                marginBottom: "50px",
              }}
            >
              Nikmati kemudahan dalam mencari, memilih, dan memesan kosan atau
              kendaraan melalui platform user-friendly kami. Sistem pembayaran
              yang aman dan konfirmasi pemesanan yang cepat akan memastikan Anda
              mendapatkan layanan yang diinginkan tanpa kerumitan. Dengarlah
              pengalaman para pengguna sebelumnya melalui ulasan dan testimoni
              yang tersedia. Kami bangga memberikan pelayanan terbaik dan
              berusaha untuk membuat setiap kunjungan Anda menjadi pengalaman
              yang luar biasa. Tim dukungan kami siap membantu Anda. Hubungi
              kami melalui alamat email atau nomor telepon yang tercantum untuk
              pertanyaan atau bantuan tambahan. Selamat menikmati keindahan
              Lombok dengan Lomaden, di mana kenyamanan dan mobilitas bertemu
              dalam harmoni.
            </p>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Beranda;
