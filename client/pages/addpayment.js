import AddPayment from "../Components/AddPayment";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Add Payment </title>
        </Head>
      {/*<Header />*/}
        <AddPayment/>
       
      </div>
  
    )
}
export default Home;