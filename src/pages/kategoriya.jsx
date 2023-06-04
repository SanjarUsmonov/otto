import React from "react";
import { useEffect, useState } from "react";
import "../index";
import axios from "axios";
const Kategoriya = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (var x = 0; x < file; x++) {
      data.append("file", file[x]);
    }
    axios.post("http://localhost:4000/category/image", data).then((res) => {
      console.log(res.statusText);
    });
  };
  
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

      <div>
        <form className="area form">
          <input
            className="input"
            type="file"
            id="file"
            multiple
            onChange={handleFileChange}
            />
            {/* {selectedFile && <img className="img" src={preview} alt=""/>} */}

          <input className="submit" onClick={handleSubmit} type="submit" />
        </form>

      </div>
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
