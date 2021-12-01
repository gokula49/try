import React from "react";
import Estimates from "../Components/Estimates";
import Appbar from "../Components/HomeItems/Appbar";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function estimates({estimateitems}) {
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
        <title>Estimates | Zoho Invoice</title>
      </Head>
      <Appbar />
      <Estimates />
    </div>
  );
}
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:4000/estimates");
//   const data = await res.json();
//   return {
//     props: { estimateitems: data },
//   };
// };
