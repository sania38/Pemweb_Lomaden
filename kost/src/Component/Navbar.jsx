import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/gambar/logo (2).png";
import profile from "../assets/gambar/profile.png";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#50bec4" }}
      variant="light"
      fixed="top"
      height="84px"
    >
      <Container>
        <Navbar.Brand as={Link} to="/beranda">
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
              justifyContent: "center",
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
              to="/beranda"
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
  );
};

export default MyNavbar;
