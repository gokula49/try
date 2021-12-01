import React from 'react'
import Appbar from '../Components/HomeItems/Appbar'
import Deliverychallans from "../Components/DeliveryChallans"

import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
export default function deliverychallans() {
 
    return (
        <div>
             <Head>
        <title>Delivery Challans | Zoho Invoice</title>
      </Head>
            <Appbar/>
            <Deliverychallans />
        </div>
    )
}
// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:4000/challans");
//     const data = await res.json();
//     return {
//       props: { challanitems: data },
//     };
//   };
