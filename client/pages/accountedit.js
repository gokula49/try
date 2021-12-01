import AccountEdit from "../Components/AccountEdit";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Zoho Accounts</title>
        </Head>
        <AccountEdit />
       
      </div>
  
    )
}
export default Home;