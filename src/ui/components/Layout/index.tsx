import React from "react";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
