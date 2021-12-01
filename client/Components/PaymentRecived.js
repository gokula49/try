// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   Link,
//   TableRow,
//   Button,
//   Toolbar,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import React, { useState, useEffect } from "react";
// import Customers from "../services/Customers";
// import { isAutheticated } from "../auth/auth";
// import axios from "axios"
// import useSWR from 'swr'
// const drawerWidth = 240;
// const {user} = isAutheticated();

// const fetcher = async () => {
//   const response = await axios.get(`http://localhost:4000/payments/${user._id}`)
//   console.log(response.data)  
//   return response.data
  
// }

// export default function Expense() {

//  const {data,error} = useSWR('expense',fetcher)
//  console.log(data)
  
// // console.log(data)
// if(error) return "An Error has Occured"
// if(!data) return "Loading"

//   return (
//     <div>
//       <div
//         class="navba"
//         style={{ float: "right", marginTop: "100px", marginRight: "50px" }}
//       >
//         <Button
//           variant="contained"
//           color="success"
//           component={Link}
//           href="/addpayment"
//         >
//           {" "}
//           <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
//           <a style={{ textDecoration: "none", color: "white" }}>New </a>
//         </Button>
//         <SettingsOutlinedIcon style={{ marginLeft: "20px" }} />
//         <DehazeIcon
//           sx={{
//             border: "1px solid #D3D3D3",
//             borderRadius: "3px",
//             padding: "3px",
//             background: "#DCDCDC",
//             marginLeft: "15px",
//           }}
//         />
//         <a
//           href="#"
//           data-ember-action=""
//           data-ember-action-2133="2133"
//           class="blubs"
//         >
//           <EmojiObjectsTwoToneIcon
//             color="primary"
//             style={{ marginLeft: "15px" }}
//           />
//         </a>
//       </div>
//       <hr />

//       <Box
//         component="main"
//         lg={{
//           flexGrow: 10,
//           p: 3,
//           width: { lg: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <TableContainer
//           style={{ width: "75%", marginTop: "150px", marginLeft: "280px" }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Amount Received</TableCell>
//                 <TableCell>Payment Date</TableCell>
//                 <TableCell>Customer Name</TableCell>
//                 <TableCell>Mode</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data &&
//                 data.map((customersitem) => (
//                   <TableRow>
//                     <TableCell>
//                     {customersitem.amount_received}
//                     </TableCell>
//                     <TableCell> {customersitem.payment_date}</TableCell>
//                     <TableCell>{customersitem.customer_name}</TableCell>
//                     <TableCell>{customersitem.payment_mode}</TableCell>
                  
                      
  
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </div>
//   );
// }


// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Toolbar,
//   Link,
//   Button,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import React, { useEffect, useState } from "react";
// import Estimates from "../services/Estimates";
// import axios from "axios"
// import { isAutheticated } from "../auth/auth";
// import useSWR from "swr";
// const drawerWidth = 240;
// const {user} = isAutheticated()
// const fetcher = async() => {
//   const response = await axios.get(`http://localhost:4000/estimates/${user._id}`)
//   console.log(response.data)
//   return response.data;
// }

// export default function Estimate() {
//   // const [products, setProducts] = useState();
 
//   // useEffect(() => {
//   //   let userId = localStorage.getItem("userId");
//   //   Estimates.getAllEstimates(userId).then((res) => {
//   //     setProducts(res.data);
//   //   });
//   // }, []);

//    const {data,error} = useSWR("estimates",fetcher)
  


//   return (
//     <div>
//       <div
//         class="navba"
//         style={{
//           float: "right",
//           marginTop: "100px",
//           marginLeft: "200px",
//           marginRight: "50px",
//         }}
//       >
//         <Button
//           class="btn btn-primary newicon"
//           data-ember-action=""
//           data-ember-action-2061="2061"
//           variant="contained"
//           color="success"
//           component={Link}
//           href="/addestimates"
//         >
//           {" "}
//           <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
//           <a style={{ textDecoration: "none", color: "white" }}>New </a>
//         </Button>
//         <SettingsOutlinedIcon style={{ marginLeft: "20px" }} />
//         <DehazeIcon
//           sx={{
//             border: "1px solid #D3D3D3",
//             borderRadius: "3px",
//             padding: "3px",
//             background: "#DCDCDC",
//             marginLeft: "15px",
//           }}
//         />
//         <a
//           href="#"
//           data-ember-action=""
//           data-ember-action-2133="2133"
//           class="blubs"
//         >
//           <EmojiObjectsTwoToneIcon
//             color="primary"
//             style={{ marginLeft: "15px" }}
//           />
//         </a>
//       </div>
//       <hr />
//       <Box
//         component="main"
//         lg={{
//           flexGrow: 10,
//           p: 3,
//           width: { lg: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <TableContainer
//           style={{ width: "75%", marginTop: "150px", marginLeft: "280px" }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>DATE</TableCell>
//                 <TableCell>ESTIMATE NUMBER</TableCell>
//                 <TableCell>REFERENCE NUMBER</TableCell>
//                 <TableCell>CUSTOMER NAME</TableCell>
//                 <TableCell>ESTIMATE DATE</TableCell>
//                 <TableCell>AMOUNT</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data &&
//                 data.map((product) => (
//                   <TableRow>
//                     <TableCell>{product.estimate_date}</TableCell>
//                     <TableCell>{product._id}</TableCell>
//                     <TableCell>{product.reference}</TableCell>
//                     <TableCell>{product.customer_name}</TableCell>
//                     <TableCell>{product.estimate_date}</TableCell>
//                     <TableCell>{product.total}</TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </div>
//   );
// }



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
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/payments/${user._id}`)
  console.log(response.data)  
  return response.data
  
}

export default function Customer() {
  const router =useRouter();
 const [post,setPost]=useState([]);
//  useEffect(()=>{
  const {data,error} = useSWR('customersss',fetcher)

//  const responsess =  axios.get(`http://localhost:4000/customerbyid/6196636f028d6b64d00b97ca`)
//  console.log(responsess.data)
//  const datas = responsess.data;

//  const simple = data&&data.map((opt)=>{{opt.customer_name=datas}})
//  customerbyid
  // setPost(data)
  const arr = []
  data && data.map((e=> arr.push({"DATE":e.payment_date,"CUSTOMER_NAME":e.customer_name,"EXPENSE ACCOUNT":e.payment_date,"REFERENSE #":e.reference,"Mode":e.payment_mode,"STATUS":"NOT BILLABLE","AMOUNT":e.amount_received,"ID":e._id})))
  if(error) return "An Error has Occured"
if(!data) return "Loading"
//  },[])
//<TableCell>
//                     {customersitem.amount_received}
//                     </TableCell>
//                     <TableCell> {customersitem.payment_date}</TableCell>
//                     <TableCell>{customersitem.customer_name}</TableCell>
//                     <TableCell>{customersitem.payment_mode}</TableCell>

const columns = [
  { name: "DATE"  },
  {name:"CUSTOMER_NAME"},
  { name:"EXPENSE ACCOUNT"},
  { name: "REFERENSE #"  },
  
  { name:"Mode"},
  {name:"STATUS"},
  {name:"AMOUNT"},
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
    router.push(`/payment/${rowData[7]}`)
            console.log("RowClicked->", rowData[6] );
        },
  responsive: 'scroll',
};

  return (
    <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
      <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/addpayment') }}>+ New</Button>
    <ThemeProvider theme={createTheme()} >
   
   <MUIDataTable 
        title={"Payments"}
       
        columns={columns.map((e) => e)}
        data={arr}

        options={options}
      />
    </ThemeProvider>
    </div>
  );
}
