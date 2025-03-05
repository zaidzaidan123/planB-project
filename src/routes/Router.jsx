import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/LogIn";
import Home from "../pages/Home";
import SharedLayout from "../component/SharedLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
