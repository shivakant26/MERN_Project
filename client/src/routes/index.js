import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../layout";
import Register from "../component/Register";
const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
