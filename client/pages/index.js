import { useEffect } from "react";
import axios from "axios";
import Invoicedetails from "../LandingPage/Invoicedetails";
import AppInfo from "../LandingPage/AppInfo";
import Awards from "../LandingPage/Awards";
import CentreBanner from "../LandingPage/CentreBanner";
import CustomerLoving from "../LandingPage/CustomerLoving";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";
import Otherapps from "../LandingPage/Otherapps";
import State from "../LandingPage/State";
import Cookies from "universal-cookie";
import Router from "next/router";
const cookies = new Cookies();
export function LandingPage() {
 
  return (
    <>
      <Header />
      <CentreBanner />
      <State />
      <CustomerLoving />
      <Awards />
      <AppInfo />
      <Invoicedetails />
      <Otherapps />
      <Footer />
    </>
  );
}
//export default WithAuth(LandingPage, "/");
export default LandingPage;
