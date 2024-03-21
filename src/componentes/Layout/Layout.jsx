import React from "react";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
