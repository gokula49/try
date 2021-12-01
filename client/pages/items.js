import React from 'react'
import Appbar from '../Components/HomeItems/Appbar'
import Items from '../Components/Items'
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function items() {
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
        <title>Items | Zoho Invoice</title>
      </Head>
           <Appbar />
            <Items />
        </div>
    )
}

// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:4000/items");
//     const data = await res.json();
//     return {
//       props: { listitems: data },
//     };
//   };