import { Route, Routes } from "react-router-dom";
import Home from "./componets/Home/Home"
import SecondPage from "./componets/SecondPage/SecondPage";
import ThreePage from "./componets/ThreePage/ThreePage";
import FirstPage from "./componets/FirstPage/FirstPage";

import './App.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FirstPage" element={<FirstPage/>}/>
        <Route path="/SecondPage" element={<SecondPage/>}/>
        <Route path="/ThreePage" element={<ThreePage />}/>
      </Routes>
  );
}

export default App;
