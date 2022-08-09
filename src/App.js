import { Route, Routes } from "react-router-dom";
import Home from "./componets/Home/Home"
import SecondPage from "./componets/SecondPage/SecondPage";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SecondPage" element={<SecondPage/>}/>
      </Routes>
  );
}

export default App;
