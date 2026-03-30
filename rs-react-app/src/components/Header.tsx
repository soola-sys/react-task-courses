import logo from '../assets/Logo_img.svg';
import type {LoginType} from "../types/types.ts";
import {useEffect} from "react";

const Header = ({ setLogin}: LoginType) => {

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if(data) {
      const { usernae } = JSON.parse(data);
      if(accessToken) {
        setLogin(true);
      }
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Courses Logo" />
          </a>
        </div>
        <div className="header-inner">
          <p className="header-text">Harry Potter</p>
          <button className="header-btn btn-primary" onClick={() => {
            setLogin(false)
          }}>Logout</button>
        </div>
      </header>
    </>
  );
};

export default Header;
