import React, { useEffect, useState } from "react";
import { ActionLink } from "../Input";
import axios from "axios";

const baseURL = "http://localhost:4000/category/get";
const Tovar = () => {
  const [users, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${baseURL}`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  
 console.log(users);
  return (
    <div className="wrapper">
      <h1>tovar qo'shish</h1>
      <div className="tovar_brand">
        <label>Brand nomi</label>
        <input className="tovar_input" type="text" placeholder="Nomi" />
      </div>
      <ActionLink />
      <form
        className="three-selects"
        action="http://localhost:4000/category/get"
        method="get"
      >
        <div className="selects">
          <div className="select">
            <label htmlFor="">Mahsulot nomi</label>
            <input
              className="input"
              type="text"
              name="product_name"
              placeholder="Product"
            />
          </div>
          <div className="select">
            <label htmlFor="">Kategoriya</label>
            <select className="input" name="select">
              <option value="Televizor">{users.data[0].category_uzb}</option>
              <option value="Telefon">{users.data[1].category_uzb}</option>
              <option value="Muzlatgich">{users.data[2].category_uzb}</option>
              <option value="Isitgich">{users.data[3].category_uzb}</option>
              <option value="Mashina">{users.data[4].category_uzb}</option>
            </select>
            <div className="select">
              <label htmlFor="">Mahsulot rangi</label>
              <input
                className="input"
                type="text"
                name="product_color"
                placeholder="Rangi"
              />
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
            <input
              className="input"
              type="text"
              name="product_name"
              placeholder="Product"
            />
          </div>
          <div className="select">
            <label htmlFor="">Категория</label>
            <select className="input" name="select">
              <option value="Televizor">{users.data[0].category_rus}</option>
              <option value="Telefon">{users.data[1].category_rus}</option>
              <option value="Muzlatgich">{users.data[2].category_rus}</option>
              <option value="Isitgich">{users.data[3].category_rus}</option>
              <option value="Mashina">{users.data[4].category_rus}</option>
            </select>
            <div className="select">
              <label htmlFor="">Tовар цвет</label>
              <input
                className="input"
                type="text"
                name="product_color"
                placeholder="Rangi"
              />
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
            <input
              className="input"
              type="text"
              name="product_name"
              placeholder="Product"
            />
          </div>
          <div className="select">
            <label htmlFor="">Category</label>
            <select className="input" name="select">
              <option value="Televizor">{users.data[0].category_eng}</option>
              <option value="Telefon">{users.data[1].category_eng}</option>
              <option value="Muzlatgich">{users.data[2].category_eng}</option>
              <option value="Isitgich">{users.data[3].category_eng}</option>
              <option value="Mashina">{users.data[4].category_eng}</option>
            </select>
            <div className="select">
              <label htmlFor="">Product color</label>
              <input
                className="input"
                type="text"
                name="product_color"
                placeholder="Rangi"
              />
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
        <input className="input submit" type="submit" />
      </form>
    </div>
    
  );
};

export default Tovar;
