import AddExpense from "../Components/AddExpense";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Add Expense </title>
        </Head>
      {/*<Header />*/}
        <AddExpense/>
       
      </div>
  
    )
}
export default Home;