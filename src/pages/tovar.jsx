import React from "react";
import MyComponent from  "../Input"

const Tovar = () => {
  return <div className="wrapper">
    <h1>tovar qo'shish</h1>
    <div className="tovar_brand">
        <label >Brand nomi</label>
        <input className="tovar_input" type="text" placeholder="Nomi"/>
    </div>
  <MyComponent/>

  </div>;
};

export default Tovar;
