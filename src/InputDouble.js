import { useEffect, useState } from "react";
import "./index";
export const ActionLink = () => {
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
    <div className="wrapper-banner flex">
      <div className="area-banner">
        <h1 className="flex">+</h1>
        <input className="input-banner" type="file" onChange={onSelectFile} />
        {selectedFile && <img className="img-banner" src={preview} />}
      </div>
      <div className="area-banner">
        <h1 className="flex">+</h1>
        <input className="input-banner" type="file" onChange={onSelectFile} />
        {selectedFile && <img className="img-banner" src={preview} />}
      </div>
    </div>
  );
};
