let dragArea = document.querySelector(".area");
let dragText = document.querySelector(".header");
let button = document.querySelector(".button");
let input = document.querySelector("input");

let file;

button.onClick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  dragArea.classList.add("active");
  displayFile();
});

dragArea.addEventListener("dragover", (el) => {
  el.preventDefault();
  dragText.textContent = "Release to Upload";
  dragArea.classList.add("active");
});

dragArea.addEventListener("dragleave", () => {
  dragText.textContent = "Drag & Drop";
  dragArea.classList.remove("active");
});

dragArea.addEventListener("drop", (el) => {
  el.preventDefault();

  file = el.dataTransfer.files[0];
  displayFile();
});

function displayFile() {
  let fileType = file.fileTypelet;
  let valid = ["image/png", "image/jpg", "image/jpeg"];

  if (valid.includes(fileType)) {
    let reader = new FileReader();

    reader.onload = () => {
      let URL = reader.result;
      let img = `<img src="${URL}" alt="">`;
      dragArea.innerHTML = img;
    };
    reader.readAsDataURL();
  } else {
    alert("Wrong");
    dragArea.classList.remove("active");
  }
}
