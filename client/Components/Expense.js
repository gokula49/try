// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     Link,
//     TableRow,
//     Button,
//     Toolbar,
//   } from "@mui/material";
//   import { Box } from "@mui/system";
//   import AddIcon from "@mui/icons-material/Add";
//   import DehazeIcon from "@mui/icons-material/Dehaze";
//   import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
//   import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
//   import React, { useState, useEffect } from "react";
//   import Customers from "../services/Customers";
//   import { isAutheticated } from "../auth/auth";
//   import axios from "axios"
//   import useSWR from 'swr'
//   const drawerWidth = 240;
//   const {user} = isAutheticated();
  
//   const fetcher = async () => {
//     const response = await axios.get(`http://localhost:4000/expenses/${user._id}`)
//     console.log(response.data)  
//     return response.data
    
//   }
  
//   export default function Expense() {
  
//    const {data,error} = useSWR('expense',fetcher)
//    console.log(data)
    
//   // console.log(data)
//   if(error) return "An Error has Occured"
//   if(!data) return "Loading"
  
//     return (
//       <div>
//         <div
//           class="navba"
//           style={{ float: "right", marginTop: "100px", marginRight: "50px" }}
//         >
//           <Button
//             variant="contained"
//             color="success"
//             component={Link}
//             href="/addcustomer"
//           >
//             {" "}
//             <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
//             <a style={{ textDecoration: "none", color: "white" }}>New </a>
//           </Button>
//           <SettingsOutlinedIcon style={{ marginLeft: "20px" }} />
//           <DehazeIcon
//             sx={{
//               border: "1px solid #D3D3D3",
//               borderRadius: "3px",
//               padding: "3px",
//               background: "#DCDCDC",
//               marginLeft: "15px",
//             }}
//           />
//           <a
//             href="#"
//             data-ember-action=""
//             data-ember-action-2133="2133"
//             class="blubs"
//           >
//             <EmojiObjectsTwoToneIcon
//               color="primary"
//               style={{ marginLeft: "15px" }}
//             />
//           </a>
//         </div>
//         <hr />
  
//         <Box
//           component="main"
//           lg={{
//             flexGrow: 10,
//             p: 3,
//             width: { lg: `calc(100% - ${drawerWidth}px)` },
//           }}
//         >
//           <Toolbar />
//           <TableContainer
//             style={{ width: "75%", marginTop: "150px", marginLeft: "280px" }}
//           >
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Category NAME</TableCell>
//                   <TableCell>Customer NAME</TableCell>
//                   <TableCell>Date</TableCell>
//                   <TableCell>Amount</TableCell>
//                   <TableCell>Notes</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data &&
//                   data.map((customersitem) => (
//                     <TableRow>
//                       <TableCell>
//                       {customersitem.category_name}
//                       </TableCell>
//                       <TableCell> {customersitem.customer_name}</TableCell>
//                       <TableCell>{customersitem.date}</TableCell>
//                       <TableCell>{customersitem.amount}</TableCell>
//                       <TableCell>{customersitem.notes}</TableCell>
                    
                        
    
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </div>
//     );
//   }
  




import MUIDataTable from "mui-datatables";
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button"
import axios from "axios"
import useSWR from 'swr'
import { isAutheticated } from "../auth/auth";
import { useRouter } from "next/router";
const drawerWidth = 240;
const {user} = isAutheticated();


const fetcher = async () => {
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/expenses/${user._id}`)
  console.log(response.data)  
  return response.data
  
}

export default function Customer() {
  const router =useRouter();
 const [post,setPost]=useState([]);
//  useEffect(()=>{
  const {data,error} = useSWR('customersss',fetcher)
  // setPost(data)
  const arr = []
  data && data.map((e=> arr.push({"DATE":e.date,"EXPENSE ACCOUNT":e.category_name,"REFERENCE #":e.invoice,"CUSTOMER NAME":e.customer_name,"STATUS":"NOT-BILLABLE","AMOUNT":e.amount,"ID":e._id})))
  if(error) return "An Error has Occured"
if(!data) return "Loading"
//  },[])
//<TableCell> {customersitem.customer_name}</TableCell>
//                       <TableCell>{customersitem.date}</TableCell>
//                       <TableCell>{customersitem.amount}</TableCell>
//                       <TableCell>{customersitem.notes}</TableCell>
                    

const columns = [
  { name: "DATE"  },
  { name:"EXPENSE ACCOUNT"},
  { name: "REFERENCE #"  },
  { name:"CUSTOMER NAME"},
  { name:"STATUS"},
  { name:"AMOUNT"},
  {
    name: "ID",
    options: {
      display: false,
    }}
  
  
];
// const datas = [
//   data.map((datas)=>{[
//     datas.customer_email,
//     datas.customer_type,
//     datas.first_name,
//     datas._id

//   ]})
// ]
{/* <TableCell>NAME</TableCell> */}
//           <TableCell>COMPANY NAME</TableCell>
//           <TableCell>EMAIL</TableCell>
//           <TableCell>WORKPHONE</TableCell>
//           <TableCell>RECEIVABLES</TableCell>
//           <TableCell>Action</TableCell>
// const columns = [
//   { title: "Trip Id", field: "_id" },

//   { title: "Departure Date", field: "depart_date" },
//   { title: "Arrive At", field: "arrive_at" },
//   { title: "Status", field: "status" },
//   { title: "Approver", field: "approver" },
//   { title: "Email", field: "email" },
// ];


const options = {
  onTableChange: (action, state) => {
    console.log(action);
    console.dir(state);
  },
  print:false,
  download:false,
  onRowClick: (rowData) => {
    router.push(`/expense/${rowData[6]}`)
            console.log("RowClicked->", rowData[4] );
        },
  responsive: 'scroll',
};

  return (
    <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
      <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/addexpense') }}>+ New</Button>
    <ThemeProvider theme={createTheme()} >
   
   <MUIDataTable 
        title={"Expenses"}
       
        columns={columns.map((e) => e)}
        data={arr}

        options={options}
      />
    </ThemeProvider>
    </div>
  );
}
