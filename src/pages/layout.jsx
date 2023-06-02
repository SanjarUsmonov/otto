import { NavLink, Outlet } from "react-router-dom";
import Logo from "../images/logo.svg";
import Navbar from "../components/navbar";
import React from "react";
import "../index";
const Layout = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="navbar">
          <div className="navbar_menu">
            <img src={Logo} width={80} height={80} alt="otto" />
            <hr width={200} className="line"/>
            <NavLink
              className={({ isActive }) =>
                isActive ? " navbar_linkactive" : "navbar_link"
              }
              to="tovar"
            >
              tovar
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " navbar_linkactive" : "navbar_link"
              }
              to="banner"
            >
              banner
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " navbar_linkactive" : "navbar_link"
              }
              to="qoshimcha"
            >
              qo'shimcha
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " navbar_linkactive" : "navbar_link"
              }
              to="kategoriya"
            >
              kategoriya
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " navbar_linkactive" : "navbar_link"
              }
              to="manzil"
            >
              manzil
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " navbar_linkactive" : "navbar_link"
              }
              to="buyurtma"
            >
              buyurtma
            </NavLink>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
