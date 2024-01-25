import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CariKendaraan from "./Pages/CariKendaraan";
import CariKost from "./Pages/CariKost";
import AturKost from "./Pages/AturKost";
import AturKendaraan from "./Pages/AturKendaraan";
import DetailKendaraan from "./Pages/DetailKendaraan";
import DetailKos from "./Pages/DetailKos";
import TambahKost from "./Pages/TambahKost";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import TambahKendaraan from "./Pages/TambahKendaraan";
import LandingPage from "./Pages/LandingPage";
import Beranda from "./Pages/Beranda";
import EditKost from "./Pages/editKost";
import EditKendaraan from "./Pages/editkendaraan";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  const navigate = useNavigate();
  const location = useLocation();

  const shouldShowNavbar = () => {
    const hiddenOnRoutes = ["/login", "/Register"];
    return !hiddenOnRoutes.includes(location.pathname);
  };

  const shouldShowFooter = () => {
    const hiddenOnRoutes = ["/login", "/Register", "/profile", "/editprofile"];
    return !hiddenOnRoutes.includes(location.pathname);
  };

  return (
    <div>
      {shouldShowNavbar() && <Navbar />}

      <Routes>
        <Route path="/carikos" element={<CariKost />} />
        <Route path="/carikendaraan" element={<CariKendaraan />} />
        <Route path="/aturkos" element={<AturKost />} />
        <Route path="/aturkendaraan" element={<AturKendaraan />} />
        <Route path="/detailkos/:id" element={<DetailKos />} />
        <Route path="/detailkendaraan/:id" element={<DetailKendaraan />} />
        <Route path="/tambahkos" element={<TambahKost />} />
        <Route path="/tambahkendaraan" element={<TambahKendaraan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/aturkos/editkos/:id" element={<EditKost />} />
        <Route path="/aturkendaraan/editkendaraan/:id" element={<EditKendaraan />} />
      </Routes>

      {shouldShowFooter() && <Footer />}
    </div>
  );
}

export default App;
