import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";
import axios from "axios";

const TambahKendaraan = () => {
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

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [h1, setH1] = useState("");
  const [h2, setH2] = useState("");
  const [h3, setH3] = useState("");
  const [h4, setH4] = useState("");
  const [h5, setH5] = useState("");
  const [h6, setH6] = useState("");
  const [hargau, setHargau] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [maps, setMaps] = useState("");
  const [ps1, setPs1] = useState("");
  const [ps2, setPs2] = useState("");
  const [ps3, setPs3] = useState("");
  const [sp1, setSp1] = useState("");
  const [sp2, setSp2] = useState("");
  const [sp3, setSp3] = useState("");
  const [sp4, setSp4] = useState("");
  const [sp5, setSp5] = useState("");
  const [speku, setSpeku] = useState("");
  const [ss1, setSs1] = useState("");
  const [ss2, setSs2] = useState("");
  const [ss3, setSs3] = useState("");
  const [ss4, setSs4] = useState("");
  const [telepon, setsTelepon] = useState("");
  const [transmisi, setTransmisi] = useState("");
  const [merek, setMerek] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   const formData = new FormData();
   formData.append("file", file);
   formData.append("deskripsi", deskripsi);
   formData.append("h1", h1);
   formData.append("h2", h2);
   formData.append("h3", h3);
   formData.append("h4", h4);
   formData.append("h5", h5);
   formData.append("h6", h6);
   formData.append("hargau", hargau);
   formData.append("lokasi", lokasi);
   formData.append("maps", maps);
   formData.append("ps1", ps1);
   formData.append("ps2", ps2);
   formData.append("ps3", ps3);
   formData.append("sp1", sp1);
   formData.append("sp2", sp2);
   formData.append("sp3", sp3);
   formData.append("sp4", sp4);
   formData.append("sp5", sp5);
   formData.append("speku", speku);
   formData.append("ss1", ss1);
   formData.append("ss2", ss2);
   formData.append("ss3", ss3);
   formData.append("ss4", ss4);
   formData.append("telepon", telepon);
   formData.append("transmisi", transmisi);
   formData.append("merek", merek);

   try {
     await axios.post("http://localhost:3001/kendaraan", formData, {
       headers: {
         "Content-Type": "multipart/form-data",
       },
     });
     navigate("/carikendaraan");
   } catch (error) {
     console.log(error);
   }
 };

  return (
    <div className="tambahkendaraan min-vh-100" style={{ marginTop: "5%" }}>
      <Container>
        <h4>Tambah Kendaraan</h4>
        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Informasi Kendaraan</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Merek Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan merek kendaraan yang meliputi brand dan tipe kendaraan.
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Honda WRV"
                    value={merek}
                    onChange={(e) => setMerek(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Judul Iklan Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Informasi Kendaraan min.40 karakter, yang didalamnya memuat nama kost
                dan wilayahnya
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Toyota Avanza, Jl.Maju bersama, RT.06 RW.04, Kertajaya....."
                    value={deskripsi}
                    onChange={(e) => setdeskripsi(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Jenis Transmisi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan transmisi kendaraan yang akan anda sewakan.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Transmisi Otomatis"
                    value={transmisi}
                    onChange={(e) => setTransmisi(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>spesifikasi utama</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan spesifikasi utama yang dimiliki kendaraan yang akan anda
                sewakan.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 1.300 cc, KM. 45.000, 7 Kursi"
                    value={speku}
                    onChange={(e) => setSpeku(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>No.Telepon</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan nomor telepon yang bisa dihubungi untuk proses negosiasi
                selanjutnya. Lebih baik nomor yang terhubung dengan WhatsApp
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Contoh : 088227990636"
                  value={telepon}
                  onChange={(e) => setsTelepon(e.target.value)}
                  style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                />
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Harga utama</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan harga terendah untuk penawaran kendaraan yang anda
                sewakan.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Rp.1.000.000/24 Jam"
                    value={hargau}
                    onChange={(e) => setHargau(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Spesifikasi dan Harga</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Spesifikasi Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Spesifikasi Kendaraan seperti pada contoh
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 5 Tempat duduk"
                    value={sp1}
                    onChange={(e) => setSp1(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 18 km/l"
                    value={sp2}
                    onChange={(e) => setSp2(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 1.500 cc"
                    value={sp3}
                    onChange={(e) => setSp3(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: Otomatis"
                    value={sp4}
                    onChange={(e) => setSp4(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 14.000 KM Berjalan"
                    value={sp5}
                    onChange={(e) => setSp5(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Harga</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan harga secara lengkap sesuai yang tertera pada contoh
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 12 Jam tanpa sopir Rp.400.000"
                    value={h1}
                    onChange={(e) => setH1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 12 Jam dengan sopir Rp.550.000"
                    value={h2}
                    onChange={(e) => setH2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 24 Jam tanpa sopir Rp.700.000"
                    value={h3}
                    onChange={(e) => setH3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 24 Jam tanpa sopir Rp.900.000"
                    value={h4}
                    onChange={(e) => setH4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bulanan 9.000.000"
                    value={h5}
                    onChange={(e) => setH5(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Tahunan 108.000.000"
                    value={h6}
                    onChange={(e) => setH6(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Peraturan dan lokasi</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Peraturan Sewa</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Peraturan yang harus dipatuhi penyewa. Maksimal 20 kata.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : BBM ditanggung penyewa"
                    value={ps1}
                    onChange={(e) => setPs1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh :Segala kerusakan ditanggung penyewa"
                    value={ps2}
                    onChange={(e) => setPs2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Memiliki SIM"
                    value={ps3}
                    onChange={(e) => setPs3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="in" style={{ justifyContent: "center" }}>
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Lokasi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan kota lokasi kendaraan anda disewakan
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lombok Utara"
                    value={lokasi}
                    onChange={(e) => setLokasi(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="in" style={{ justifyContent: "center" }}>
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Lokasi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Link google maps lokasi kost anda
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : https://maps.app.goo.gl/bgRKpTDB5HcwZths7 "
                    value={maps}
                    onChange={(e) => setMaps(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Validasi dan Syarat</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Syarat Sewa</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Harga yang ditawarkan untuk bulanan
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : KTP"
                    value={ss1}
                    onChange={(e) => setSs1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : SIM"
                    value={ss2}
                    onChange={(e) => setSs2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : KK"
                    value={ss3}
                    onChange={(e) => setSs3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bayar Ditempat"
                    value={ss4}
                    onChange={(e) => setSs4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Unggah Foto Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Unggah gambar kendaraan
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Control type="file" onChange={loadImage} />

                {preview ? (
                  <figure style={{ width: "300px", height: "300px" }}>
                    <img
                      src={preview}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </figure>
                ) : (
                  ""
                )}
              </Form>
            </Col>
          </Row>
        </Row>

        <div className="button">
          <button style={{ backgroundColor: "#B2FDFF" }} onClick={handleSubmit}>
            Simpan
          </button>
          <Link to="/carikos">
            <button>Batal</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TambahKendaraan;
