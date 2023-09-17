import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Destinations from "./component/destinations/Destinations";
import Blog from "./component/blog/Blog";
import Pages from "./component/pages/Pages";
import Contact from "./component/contactUs/Contact";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/">
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route
                            path="/Destinations"
                            element={<Destinations />}
                        />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/Pages" element={<Pages />} />
                    </Route>
                    <Route path="/Contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
