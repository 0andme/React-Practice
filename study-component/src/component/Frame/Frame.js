import React, { Component, useState } from "react";
import "./Frame.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Lecture from "./Lecture";
import Contact from "./Contact";

function Frame() {
  return (
    <BrowserRouter>
      <h1>Simple SPA</h1>
      <ul className="header">
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/lecture">Stuff</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Frame;
