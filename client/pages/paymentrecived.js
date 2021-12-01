import PaymentRecived from "../Components/PaymentRecived";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Payment Recived </title>
        </Head>
      {/*<Header />*/}
        <PaymentRecived/>
       
      </div>
  
    )
}
export default Home;