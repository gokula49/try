import Expense from "../Components/Expense";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Expense</title>
        </Head>
      {/*<Header />*/}
        <Expense/>
       
      </div>
  
    )
}
export default Home;