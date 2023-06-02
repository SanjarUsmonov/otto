import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Buyurtma from "./pages/buyurma";
import Kategoriya from "./pages/kategoriya";
import Manzil from "./pages/manzil";
import Qoshimcha from "./pages/qoshimcha";
import Tovar from "./pages/tovar";
import Banner from "./pages/banner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tovar" element={<Tovar />} />
          <Route path="buyurtma" element={<Buyurtma />} />
          <Route path="kategoriya" element={<Kategoriya />} />
          <Route path="manzil" element={<Manzil />} />
          <Route path="qoshimcha" element={<Qoshimcha />} />
          <Route path="banner" element={<Banner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//
export default App;
