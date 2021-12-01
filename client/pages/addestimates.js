import AddEstimates from "../Components/AddEstimates";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function addestimates({ customers, items }) {
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
        <title>Add New |Estimates | Zoho Invoice</title>
      </Head>
      <div style={{ display: "flex" }}>
        <AddEstimates customers={customers} items={items} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const customersData = await fetch("https://codingmart-invoice.herokuapp.com/customers");
  const customersJSON = await customersData.json();

  const itemsData = await fetch("https://codingmart-invoice.herokuapp.com/items");
  const itemsJSON = await itemsData.json();

  return {
    props: { customers: customersJSON, items: itemsJSON },
  };
};
