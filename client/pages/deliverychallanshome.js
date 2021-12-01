import DeliverychallansHome from "../Components/DeliveryChallansHome";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
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
        <title>Delivery Challans | Zoho Invoice</title>
      </Head>
      < DeliverychallansHome />

    </div>
    
  );

}
