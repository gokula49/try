
import InvoicesHome from "../Components/InvoicesHome";
import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
export default function Home() {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const company = JSON.parse(localStorage.getItem("company"));
    console.log(company);
    if (!userId) {
      Router.replace("/sign-in").then((result) => Router.reload());
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Invoices | Zoho Invoice</title>
      </Head>
      <InvoicesHome />
    </div>
  );
}