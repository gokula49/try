import React,{useState,useEffect} from "react";
import Appbar from "../Components/HomeItems/Appbar";
import Customers from "../Components/Customers";
import Head from "next/head";
import axios from "axios";
import { isAutheticated } from "../auth/auth";

// const customersitems;
export default function customers() {
// const {user} = isAutheticated();
// const [customersitems,setcusgmailtomersitems] = useState();

// useEffect(()=>{
//   customersitems = axios.get(`http://localhost:4000/customers/${user._id}`).then((response)=>{
//     console.log(response.data)
//     // const datass =await response.data.JSON;
//     setcustomersitems(JSON.stringify(response));
//     return customersitems;
//   })
// },[])




  return (
    <div>
      <Head>
        <title>Customers | Zoho Invoices</title>
      </Head>
      <Appbar />
      <Customers  />
    </div>
  );
}
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:4000/customers/61923c4e212dfba72ad20215");
//   const data = await res.json();
//   return {
//     props: { customersitems: data },
//   };
// };