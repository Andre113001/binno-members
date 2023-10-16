import * as React from "react"
import {Routes, Route} from "react-router-dom";
import './index.css'


// Pages
import Home from "./pages/Home";
import Login from "./pages/Login"
import Members from "./pages/Members";


function App() {

return (
  <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  </>

  );
}

export default App
