import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/gambar/logo (2).png";
import ps from "../assets/gambar/get-it-on-playstore 1.png";

const MyFooter = () => {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "#50bec4", marginTop: "40px" }}
    >
      <Container>
        <Row>
          <Col style={{ marginRight: "30px" }}>
            <img
              src={logo}
              alt=""
              style={{ width: "70%", marginTop: "20px" }}
            />
            <p className="satu" style={{ width: "" }}>
              Dapatkan Info kos dan sewa kendaraan di Lomaden App. Mau Sewa Kost
              dan Kendaraan Murah?
            </p>
            <img
              src={ps}
              alt=""
              style={{ width: "50%", marginBottom: "30px" }}
            />
          </Col>
          <Col style={{ marginLeft: "130px", marginTop: "20px" }}>
            <h6
              className="dua"
              style={{
                fontSize: "20px",
                marginTop: "20px",
                textDecoration: "none",
              }}
            >
              LOMADEN.
            </h6>
            <p>Tentang Kami</p>
            <p>Sewa Kos</p>
            <p>Sewa Kendaraan</p>
            <p>Aplikasi Mobile</p>
          </Col>
          <Col style={{ marginLeft: "100px", marginTop: "20px" }}>
            <h6 className="dua" style={{ fontSize: "20px", marginTop: "20px" }}>
              Kebijakan
            </h6>
            <p>Kebijakan Privasi</p>
            <p> Syarat dan Ketentuan Umum</p>
          </Col>
          <Col style={{ marginLeft: "100px", marginTop: "20px" }}>
            <h6 className="dua" style={{ fontSize: "20px", marginTop: "20px" }}>
              Hubunugi Kami
            </h6>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p>Lomaden@gmail.com</p>
              </Link>
            </div>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p>+62 882-2799-0636</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
