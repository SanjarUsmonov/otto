import React from "react";

const Tovar = () => {
  return <div className="tovar">
    <h1>Tovar qo'shish</h1>
    <div className="tovar_brand">
        <label >brand name</label>
        <input className="tovar_input" type="text" placeholder="Name"/>
    </div>
  </div>;
};

export default Tovar;
