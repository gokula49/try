import AddInvoices from "../Components/AddInvoices";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function addinvoices() {
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
        <title>Add New |Invoices | Zoho Invoice</title>
      </Head>
      <div style={{ display: "flex" }}>
        <AddInvoices />
      </div>
    </>
  );
}
// export const getStaticProps = async () => {
//   const customersData = await fetch("http://localhost:4000/customers");
//   const customersJSON = await customersData.json();

//   const itemsData = await fetch("http://localhost:4000/items");
//   const itemsJSON = await itemsData.json();

//   return {
//     props: { customers: customersJSON, items: itemsJSON },
//   };
//};
