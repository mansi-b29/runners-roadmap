
import { useState, useEffect } from "react";
import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Layout } from "./Layout";
import Dropdown from "./components/Dropdown";
import DropdownItem from "./components/DropdownItem";
import { DataProvider } from "./DataContext";
import axios from 'axios';


function App() {

  
  return (
    <> 
      <DataProvider>
        <Router>
          <Routes>
            <Route element={<Layout/>}> 
              <Route path="/" element={<Home/>}/>
              <Route path="/Page1" element={<Page1/>}/>
              <Route path="/Page2" element={<Page2/>}/>
            </Route>
          </Routes>
        </Router>
      </ DataProvider>
    </>
  );
}

export default App;
