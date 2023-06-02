// import { useEffect, React, useState } from "react";
import "../index.scss";
// import axios from "axios";
// const baseURL = "http://localhost:4000/manzil";
const Manzil = () => {
  // const [users, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await axios.get(`${baseURL}`);
  //     setProducts(response.data);
  //   };
  //   fetchProducts();
  // }, []);
  // console.log(users);
  return (
    <div className="wrapper">
      <h1>manzil</h1>
      <div>
        <h2>kontakt</h2>
        <form
          action="http://localhost:4000/manzil"
          method="post"
          className="contact"
        >
          <div className="label-input">
            <label htmlFor="">Telefon</label>
            <input name="tel" type="tel" placeholder="+998 99 999-99-99 " />
          </div>
          <div className="label-input">
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="qwerty123@gmail.com"
            />
          </div>
          <div className="label-input">
            <label htmlFor="">Manzil</label>
            <input name="location" type="text" placeholder="Toshkent" />
          </div>
          <div className="label-input">
            <label htmlFor="">Web-site URL</label>
            <input name="link" type="url" placeholder="https://link" />
          </div>
          <input className="submit" type="submit" value="Qo'shish" />
        </form>
      </div>
      <div>
        <div className="media">
          <h2>Ijtimoiy tarmoqlar</h2>
          <form
            action="http://localhost:4000/media"
            method="post"
            className="contact"
          >
            <div className="label-input">
              <label htmlFor="">Telegram</label>
              <input name="telegram" type="url" placeholder="Telegram" />
            </div>
            <div className="label-input">
              <label htmlFor="">Instagram</label>
              <input name="instagram" type="url" placeholder="Instagram" />
            </div>
            <div className="label-input">
              <label htmlFor="">Facebook</label>
              <input name="facebook" type="url" placeholder="Facebook" />
            </div>
            <div className="label-input">
              <label htmlFor="">Twitter</label>
              <input name="twitter" type="url" placeholder="Twitter" />
            </div>
            <input className="submit" type="submit" value="Qo'shish" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Manzil;
