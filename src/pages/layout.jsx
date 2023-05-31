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
        <navbar className="navbar">
          <div className="navbar_menu">
            <img src={Logo} width={100} height={100} alt="otto" />
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
          </div>
        </navbar>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
