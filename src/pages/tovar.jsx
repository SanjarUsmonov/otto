import React from "react";

const Tovar = () => {
  return <div className="wrapper">
    <h1>tovar qo'shish</h1>
    <div className="tovar_brand">
        <label >Brand nomi</label>
        <input className="tovar_input" type="text" placeholder="Nomi"/>
        <input className="tovar_input_file" type="file" />
    </div>
  </div>;
};

export default Tovar;
