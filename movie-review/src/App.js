import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import './Components/SignIn/Login'
import "./style.css"
import Login from "./Components/SignIn/Login";
import Admin from "./Components/Admin";
import Customer from "./Components/Customer";
import Nav from "./Components/Nav";
function App() {
 
  return (
    
    
    
      
    <div className="container">
      <Nav/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/customer' element={<Customer/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>

        </Routes>
        </Router>
      {" "}
      
      
    </div>
  
    
  );
}

export default App;