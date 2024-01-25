import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";

const TambahKost = () => {
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
  const [nama, setNama] = useState("");
  const [detail, setDetail] = useState("");
  const [Ketersediaan, setKetersediaan] = useState("");
  const [Kategori, setKategori] = useState("");
  const [Lokasi, setLokasi] = useState("");
  const [FasilitasU, setFasilitasU] = useState("");
  const [telepon, settelepon] = useState("");
  const [harga, setHarga] = useState("");
  const [sk1, setSk1] = useState("");
  const [sk2, setSk2] = useState("");
  const [sk3, setSk3] = useState("");
  const [fk1, setFk1] = useState("");
  const [fk2, setFk2] = useState("");
  const [fk3, setFk3] = useState("");
  const [fk4, setFk4] = useState("");
  const [fk5, setFk5] = useState("");
  const [fk6, setFk6] = useState("");
  const [fk7, setFk7] = useState("");
  const [fkm1, setFkm1] = useState("");
  const [fkm2, setFkm2] = useState("");
  const [fkm3, setFkm3] = useState("");
  const [fkm4, setFkm4] = useState("");
  const [fkm5, setFkm5] = useState("");
  const [fu1, setFu1] = useState("");
  const [fu2, setFu2] = useState("");
  const [fu3, setFu3] = useState("");
  const [fu4, setFu4] = useState("");
  const [fu5, setFu5] = useState("");
  const [pk1, setPk1] = useState("");
  const [pk2, setPk2] = useState("");
  const [pk3, setPk3] = useState("");
  const [pk4, setPk4] = useState("");
  const [maps, setmaps] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama", nama);
    formData.append("detail", detail);
    formData.append("Ketersediaan", Ketersediaan);
    formData.append("Kategori", Kategori);
    formData.append("Lokasi", Lokasi);
    formData.append("FasilitasU", FasilitasU);
    formData.append("telepon", telepon);
    formData.append("harga", harga);
    formData.append("sk1", sk1);
    formData.append("sk2", sk2);
    formData.append("sk3", sk3);
    formData.append("fk1", fk1);
    formData.append("fk2", fk2);
    formData.append("fk3", fk3);
    formData.append("fk4", fk4);
    formData.append("fk5", fk5);
    formData.append("fk6", fk6);
    formData.append("fk7", fk7);
    formData.append("fkm1", fkm1);
    formData.append("fkm2", fkm2);
    formData.append("fkm3", fkm3);
    formData.append("fkm4", fkm4);
    formData.append("fkm5", fkm5);
    formData.append("fu1", fu1);
    formData.append("fu2", fu2);
    formData.append("fu3", fu3);
    formData.append("fu4", fu4);
    formData.append("fu5", fu5);
    formData.append("pk1", pk1);
    formData.append("pk2", pk2);
    formData.append("pk3", pk3);
    formData.append("pk4", pk4);
    formData.append("maps", maps);

    try {
      await axios.post("http://localhost:3001/kost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/carikos");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="tambahkos min-vh-100" style={{ marginTop: "5%" }}>
      <Container>
        <h4>Tambah Kos</h4>
        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Informasi Kost</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Nama Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan nama Kost anda sesuai contoh yang ada
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNamaKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Kost 86"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Judul Iklan Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan detail nama Kost anda sesuai contoh yang ada
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDetailKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Kost Barokah, Jl.Maju bersama, RT.06 RW.04, Kertajaya"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Ketersediaan Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan sisa kamar kos yang anda miliki
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formKetersediaanKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : *sisa 1 kamar"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={Ketersediaan}
                    onChange={(e) => setKetersediaan(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Kategori Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formKategoriKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Laki-Laki"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={Kategori}
                    onChange={(e) => setKategori(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Lokasi Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Kota dimana kost anda berada
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formLokasiKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lombok Timur"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={Lokasi}
                    onChange={(e) => setLokasi(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas utama</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan fasilitas unggulan kost anda
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFasilitasUtama">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : K.M Dalam, WIFI, AC, Meja Belajar, Kloset Duduk"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={FasilitasU}
                    onChange={(e) => setFasilitasU(e.target.value)}
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
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNomorTelepon">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 088227990636"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={telepon}
                    onChange={(e) => settelepon(e.target.value)}
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
                Masukan Harga yang ditawarkan untuk bulanan
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Rp.1.000.000"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Fasilitas Kost</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Spesifikasi Kamar</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Spesifikasi kamar seperti pada contoh
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 2 Orang"
                    value={sk1}
                    onChange={(e) => setSk1(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 5x5 Meter"
                    value={sk2}
                    onChange={(e) => setSk2(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: Kamar Mandi dalam"
                    value={sk3}
                    onChange={(e) => setSk3(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 2 Kasur"
                    value={fk1}
                    onChange={(e) => setFk1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Meja Belajar"
                    value={fk2}
                    onChange={(e) => setFk2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : AC"
                    value={fk3}
                    onChange={(e) => setFk3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lemari"
                    value={fk4}
                    onChange={(e) => setFk4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Smart TV"
                    value={fk5}
                    onChange={(e) => setFk5(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lemari Pendingin"
                    value={fk6}
                    onChange={(e) => setFk6(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bantal"
                    value={fk7}
                    onChange={(e) => setFk7(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas Kamar Mandi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Kloset Duduk"
                    value={fkm1}
                    onChange={(e) => setFkm1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Shower"
                    value={fkm2}
                    onChange={(e) => setFkm2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Penghangat Air"
                    value={fkm3}
                    onChange={(e) => setFkm3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bak Mandi"
                    value={fkm4}
                    onChange={(e) => setFkm4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Wastafel"
                    value={fkm5}
                    onChange={(e) => setFkm5(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas Umum</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : WIFI"
                    value={fu1}
                    onChange={(e) => setFu1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Dapur Umum"
                    value={fu2}
                    onChange={(e) => setFu2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Mesin Cuci"
                    value={fu3}
                    onChange={(e) => setFu3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Ruang Tamu"
                    value={fu4}
                    onChange={(e) => setFu4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : CCTV 24 Jam"
                    value={fu5}
                    onChange={(e) => setFu5(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Peraturan Kos</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Peraturan yang dimiliki oleh kost anda. Maksimal 20
                kata.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Dilarang Membawa Hewan Peliharaan"
                    value={pk1}
                    onChange={(e) => setPk1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Selalu Kunci Gerbang"
                    value={pk2}
                    onChange={(e) => setPk2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Saling menghargai antar penghuni kost"
                    value={pk3}
                    onChange={(e) => setPk3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Saling menghargai antar penghuni kost"
                    value={pk4}
                    onChange={(e) => setPk4(e.target.value)}
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
                    onChange={(e) => setmaps(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Validasi</h4>

          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Unggah Foto Bangunan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Unggah gambar bangunan kost
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

export default TambahKost;
