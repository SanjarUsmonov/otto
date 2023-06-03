import React from "react";
import { ActionLink } from "../Input";

const Tovar = () => {
  return (
    <div className="wrapper">
      <h1>tovar qo'shish</h1>
      <div className="tovar_brand">
        <label>Brand nomi</label>
        <input className="tovar_input" type="text" placeholder="Nomi" />
      
      </div>
< ActionLink />
      <form className="three-selects">
        <div className="selects">
          <div className="select">
            <label htmlFor="">Mahsulot nomi</label>
            <input className="input" type="text" placeholder="Product" />
          </div>
          <div className="select">
            <label htmlFor="">Kategoriya</label>
            <select  className="input" name="select">
              <option value="Televizor">Televizor</option>
              <option value="Telefon">Telefon</option>
              <option value="Muzlatgich">Muzlatgich</option>
              <option value="Isitgich">Isitgich</option>
              <option value="Mashina">Mashina</option>
            </select>
            <div className="select">
              <label htmlFor="">Mahsulot rangi</label>
              <input  className="input" type="text" placeholder="Rangi" />
            </div>
          </div>
          <div className="select">
            <label htmlFor="">Izoh qo'ldirish</label>
            <textarea
              name="text"
              className="textarea"
              placeholder="Izoh qo'ldirish"
            ></textarea>
          </div>
        </div>
        <div className="selects">
          <div className="select">
            <label htmlFor="">Название товара </label>
            <input  className="input" type="text" placeholder="Product" />
          </div>
          <div className="select">
            <label htmlFor="">Категория</label>
            <select  className="input" name="select">
              <option value="Televizor">Televizor</option>
              <option value="Telefon">Telefon</option>
              <option value="Muzlatgich">Muzlatgich</option>
              <option value="Isitgich">Isitgich</option>
              <option value="Mashina">Mashina</option>
            </select>
            <div className="select">
              <label htmlFor="">Tовар цвет</label>
              <input  className="input" type="text" placeholder="Rangi" />
            </div>
          </div>{" "}
          <div className="select">
            <label htmlFor="">Оставить комментарий</label>
            <textarea
              name="text"
              className="textarea"
              placeholder="Оставить комментарий"
            ></textarea>
          </div>
        </div>
        <div className="selects">
          <div className="select">
            <label htmlFor="">Product name</label>
            <input  className="input" type="text" placeholder="Product" />
          </div>
          <div className="select">
            <label htmlFor="">Category</label>
            <select className="input" name="select">
              <option value="Televizor">Televizor</option>
              <option value="Telefon">Telefon</option>
              <option value="Muzlatgich">Muzlatgich</option>
              <option value="Isitgich">Isitgich</option>
              <option value="Mashina">Mashina</option>
            </select>
            <div className="select">
              <label htmlFor="">Product color</label>
              <input className="input" type="text" placeholder="Rangi" />
            </div>
          </div>{" "}
          <div className="select">
            <label htmlFor="">Leave a comment</label>
            <textarea
              name="text"
              className="textarea"
              placeholder="Leave a comment"
            ></textarea>
          </div>
        </div>
        <input className="input" type="submit" />
        
      </form>

    </div>
  );
};

export default Tovar;
