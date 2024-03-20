/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import A_home from './pages/admin/A_home';
import Map from "./pages/Map";


function App() {
    return (  
      <div>       
        <Router>
          <Routes>
            { /*  non logged user  */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/map" element={<Map />} />

            { /*   admin  */}
            <Route path="/admin/home" element={<A_home />} />
          </Routes>
        </Router>
      </div>  );
}

export default App;
