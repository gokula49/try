import Suma1 from "../../Components/HomeItems/Suma1";
import Dashboard_2 from "../../Components/HomeItems/DashBoard_2";
import { useEffect } from "react";
import Router from "next/router";
import Layout from "../../Components/HomeItems/Layout";
const Dashboard = () => {
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   // const company = JSON.parse(localStorage.getItem("company"));
  //   // console.log(company);
  //   if (!user) {
  //     Router.replace("/sign-in").then((result) => Router.reload());
  //   }
  // }, []);
  return (
    <>
      <Layout>
      <Suma1 />
      <Dashboard_2 />
      </Layout>
    </>
  );
};
export default Dashboard;
