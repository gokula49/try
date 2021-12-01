import Head from "next/head";
import EstimateHome from "../Components/EstimateHome";
// import { useEffect } from "react";
import Router from "next/router";
export default function Home() {
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
      <EstimateHome />
    </div>
    
  );

}
