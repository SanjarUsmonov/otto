import React from "react";
import { useEffect, useState } from "react";
import "../index";
 const Kategoriya = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="wrapper">
      <h1>kategoriya</h1>
      <form className="area"  action="http://localhost:4000/category"
        method="post"> 
      <input className="input" type="file" onChange={onSelectFile} />
      {selectedFile && <img className="img image" src={preview} alt=""/>}
        <input className="submit" type="submit" />
    </form>
      <form
        className="three-selects"
        action="http://localhost:4000/category"
        method="post"
      >
        <div className="selects">
          <div className="select">
            <label htmlFor="">Kategoriya</label>
            <input
              className="input"
              type="text"
              name="category1"
              placeholder="Kategoriya"
            />
          </div>
        </div>
        <div className="selects">
          <div className="select">
            <label htmlFor="">Категория </label>
            <input
              className="input"
              type="text"
              name="category2"
              placeholder="Категория"
            />
          </div>
        </div>
        <div className="selects">
          <div className="select">
            <label htmlFor="">Category</label>
            <input
              className="input"
              type="text"
              name="category3"
              placeholder="Category"
            />
          </div>
        </div>
        <input className="input submit" type="submit" />
      </form>
    </div>
  );
};

export default Kategoriya;
