import React from "react";
import Appbar from "../Components/HomeItems/Appbar";
import Invoices from "../Components/Invoices";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function invoices({ invoicesitems }) {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   const company = JSON.parse(localStorage.getItem("company"));
  //   console.log(company);
  //   if (!userId) {
  //     Router.replace("/sign-in").then((result) => Router.reload());
  //   }
  // }, []);
  return (
    <div>
      <Head>
        <title>Invoices | Zoho Invoice</title>
      </Head>
      <Appbar />
      <Invoices invoicesitems={invoicesitems} />
    </div>
  );
}
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:4000/invoices");
//   const data = await res.json();
//   return {
//     props: { invoicesitems: data },
//   };
// };
