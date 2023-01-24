import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Navbar } from "../Components/Navbar";
import { Signup } from "../Components/Signup/Signup";
import {  Homepage } from "../Components/Home/Home";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={"Unable to access"} />
      </Routes>
    </>
  );
};
