import AddCustomers from "../Components/AddCustomers";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function addCustomers() {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   const company = JSON.parse(localStorage.getItem("company"));
  //   console.log(company);
  //   if (!userId) {
  //     Router.replace("/sign-in").then((result) => Router.reload());
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>Add New |Customers | Zoho Invoice</title>
      </Head>
      <div style={{ display: "flex" }}>
        <AddCustomers />
      </div>
    </>
  );
}
