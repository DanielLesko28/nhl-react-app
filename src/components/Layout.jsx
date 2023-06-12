import React from "react";
import Navbar from "./Navbar";
import { useUserAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { user } = useUserAuth();

  return (
    <div>
      {user && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
