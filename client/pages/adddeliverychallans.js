import AddDeliveryChallans from "../Components/AddDeliveryChallans";
import Head from "next/head";


export default function adddelivarychallans() {
 
  return (
    <>
      <Head>
        <title>Add New |Estimates | Zoho Invoice</title>
      </Head>
      <div style={{ display: "flex" }}>
        <AddDeliveryChallans  />
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
// };
