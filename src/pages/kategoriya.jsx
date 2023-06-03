import React from "react";
import "../index";
import { ActionLink } from "../Input";

const Kategoriya = () => {
  return (
    <div className="wrapper">
      <h1>kategoriya</h1>
      <ActionLink />
      <form className="three-selects">
        <div className="selects">
          <div className="select">
            <label htmlFor="">Kategoriya</label>
            <input className="input" type="text" placeholder="Kategoriya" />
          </div>
        </div>
        <div className="selects">
          <div className="select">
            <label htmlFor="">Категория </label>
            <input className="input" type="text" placeholder="Категория" />
          </div>
        </div>
        <div className="selects">
          <div className="select">
            <label htmlFor="">Category</label>
            <input className="input" type="text" placeholder="Category" />
          </div>
        </div>
        <input className="input submit" type="submit" />
      </form>
    </div>
  );
};

export default Kategoriya;
