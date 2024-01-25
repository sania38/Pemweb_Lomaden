import React, {useEffect} from "react";
import "../dist/css/style.css";
import Profile2 from "../assets/gambar/profile2.svg";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feauters/authSlice";

const EditProfile = () => {
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

  return (
    <div>
      <div className="edit-profile mb-5 min-vh-100">
        <div className="row ">
          <div className="col ubah-profile ">
            <h3>Ubah profile</h3>
          </div>
          <div className="col-4  mt-5  d-grid justify-content-center">
            <img src={Profile2} alt="" />
            <button>edit foto</button>
          </div>
        </div>
        <div className="form1">
          <div className="row-4 ">
            <div className="col-4 my-1">
              <div className="mb-3 ">
                <p>Nama lengkap</p>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-10">
              <div className="mb-3">
                <p>Email</p>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-10">
              <div className="mb-3">
                <p>Alamat</p>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-10">
              <div className="mb-3">
                <p>Contact number</p>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-10">
              <div className="mb-3">
                <p>Password</p>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row kh-button">
            <div className="col">
              <button className="w-1">Simpan</button> <button>Batal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
