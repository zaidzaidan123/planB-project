import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer";

const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
