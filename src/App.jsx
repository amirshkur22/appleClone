import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main.jsx";
import Mac from "./Components/Mac/Mac.jsx";
import Iphone from "./Components/Iphone/Iphone.jsx";
import Ipad from "./Components/Ipad/Ipad.jsx";
import Music from "./Components/Music/Music.jsx";
import Support from "./Components/Support/Support.jsx";
import Watch from "./Components/Watch/Watch.jsx";
import Tv from "./Components/Tv/Tv.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Fotter from "./Components/Fotter/Fotter.jsx";
import "../src/css/bootstrap.css";
import "../src/css/style.css";

import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound.jsx";
import SharedComponent from "./Components/SharedComponent/SharedComponent.jsx";
import IphoneSingleProduct from "./Components/Iphone/IphoneSingleProduct.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedComponent />}>
        <Route path="/" element={<Main />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:id" element={ <IphoneSingleProduct/>} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
