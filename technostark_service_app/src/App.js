import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";


// Components
import Header from "./components/Header";
import Home from "./components/Home"

// style
import "./style/app.scss";
import "./style/home.scss";



function App() {
  return (
   <>
    <Router>


      <Header/>


      <Routes>
        <Route path="/" element={<Home/>}  />
      </Routes>
    </Router>
   </>
  );
}

export default App;
