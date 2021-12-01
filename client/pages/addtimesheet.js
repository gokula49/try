import AddTimesheet from "../Components/AddTimesheet";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Add Timesheet </title>
        </Head>
      {/*<Header />*/}
        <AddTimesheet/>
       
      </div>
  
    )
}
export default Home;