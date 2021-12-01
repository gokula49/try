import Sidebar from "./Sidebar";
import Appbar from "../HomeItems/Appbar";
import Router from "next/router";

import { useEffect, useState } from "react";
const Layout = ({ children }) => {
  const pathNames = ["/", "/sign-in", "/sign-up", "/organizationsetup","/table"];
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (pathNames.includes(Router.pathname)) {
      setShowNavbar(false);
    }
  }, []);

  return (
    <>
      {showNavbar && <Appbar />}
      {showNavbar && <Sidebar />}
      {children}
    </>
  );
};
export default Layout;
