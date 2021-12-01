import AddItem from "../Components/AddItem";
import Head from "next/head";
import { useEffect } from "react";
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
    <>
      <Head>
        <title>Add New |Items | Zoho Invoice</title>
      </Head>
      <div style={{ display: "flex" }}>
        {/* <Header /> */}
        <AddItem />
      </div>
    </>
  );
}
