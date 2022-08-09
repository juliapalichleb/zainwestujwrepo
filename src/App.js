import { Route, Routes } from "react-router-dom";
import  FirstPage  from "./componets/FirstPage/FirstPage"
import SecondPage from "./componets/SecondPage/SecondPage";


function App() {

  return (
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/SecondPage" element={<SecondPage/>}/>
      </Routes>
  );
}

export default App;
