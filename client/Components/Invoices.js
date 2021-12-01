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
// import axios from "axios";
// import Items from "../services/Items"
// import { isAutheticated } from "../auth/auth";
// import React, { useEffect, useState } from "react";
// import useSWR from "swr";


// const fetcher = async ()=>{
//   const response = await axios.get(`http://localhost:4000/invoices/${user._id}`)
//   console.log(response.data)
//   return response.data;
// }


// const drawerWidth = 240;
// const {user} = isAutheticated();
// export default function Invoice() {
//   const [products, setProducts] = useState();

//   const {data,error}=useSWR("invoices",fetcher)

//   // useEffect(() => {
//   //   let userId = localStorage.getItem("userId");
//   //   Invoices.getAllInvoices(userId).then((res) => {
//   //     setProducts(res.data);
//   //   });
//   // }, []);
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
//           href="/addinvoices"
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
//                 <TableCell>ID</TableCell>
//                 <TableCell>INVOICE#</TableCell>
//                 <TableCell>ORDER NUMBER</TableCell>
//                 <TableCell>CUSTOMER NAME</TableCell>
//                 <TableCell>STATUS</TableCell>
//                 <TableCell>DUE DATE</TableCell>
//                 <TableCell>AMOUNT</TableCell>
//                 <TableCell>BALANCE DUE</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data &&
//                 data.map((product) => (
//                   <TableRow>
//                     <TableCell>{product._id}</TableCell>
//                     <TableCell>{product.invoice_number}</TableCell>
//                     <TableCell>{product.order_no}</TableCell>
//                     <TableCell>{product.customer}</TableCell>
//                     <TableCell>{product.status}</TableCell>
//                     <TableCell>{product.due_date}</TableCell>
//                     <TableCell>{product.total}</TableCell>
//                     <TableCell>{product.balance_due}</TableCell>
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
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Toolbar,
//     Link,
//     Button
//   } from "@mui/material";
//   import { Box } from "@mui/system";
//   import AddIcon from "@mui/icons-material/Add";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import axios from "axios";
// import Items from "../services/Items"
// import { isAutheticated } from "../auth/auth";
// import React, { useEffect, useState } from "react";
// import useSWR from "swr";
// const drawerWidth = 240;
// const {user} = isAutheticated();

// const fetcher = async ()=>{
//   const response = await axios.get(`http://localhost:4000/items/${user._id}`)
//   console.log(response.data)
//   return response.data;
// }


// export default function Item() {

//   // const [products, setProducts] = useState();

//   // useEffect(() => {
//   //   let userId = localStorage.getItem("userId")
//   //   Items.getAllItems(userId).then((res) => {
//   //      setProducts(res.data);
//   //   });
//   // }, []);

//   const {data,error}=useSWR("items",fetcher)

//     return (
//       <div>
//         <div class="navba" style={{float:"right",marginTop:"100px",marginLeft:"200px",marginRight:"50px"}}>
//           <Button
//             variant="contained"
//             color="success"
//             component={Link}
//             href="/additem"
//           >
//             {" "}
            
//             <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
//            <a style={{textDecoration:'none',color:'white'}}>New </a>
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
//         <hr/>
//         <Box
//           component="main"
//           lg={{
//             flexGrow: 10,
//             p: 3,
//             width: { lg: `calc(100% - ${drawerWidth}px)` },
//           }}
//         >
//           <Toolbar />
//           <TableContainer style={{width: "75%", marginTop: "150px", marginLeft: "280px" }}
//         >
            
//             <Table>
//               <TableHead>
//                 <TableRow>
                  
//                   <TableCell>NAME</TableCell>
//                   <TableCell>DESCRIPTION</TableCell>
//                   <TableCell>RATE</TableCell>
//                   <TableCell>USAGE UNIT</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data && data.map((product) => (
//                   <TableRow>
//                     <TableCell>{product.name}</TableCell>
//                     <TableCell>{product.selling_description}</TableCell>
//                    <TableCell>{product.selling_price}</TableCell>
//                     <TableCell>{product.unit}</TableCell>
//                   </TableRow>
//                 ))}
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
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/invoices/${user._id}`)
  console.log(response.data)  
  return response.data
  
}

export default function Customer() {
  const router =useRouter();
 const [post,setPost]=useState([]);
//  useEffect(()=>{
  const {data,error} = useSWR('item',fetcher)
  // setPost(data)
  const arr = []
  data && data.map((e=> arr.push({"Date":e.due_date,"Invoice #":e._id.slice(0,5),"Order Number":e.order_no,"Customer Name":e.customer_name,"Amount":e.total,"ID":e._id})))
  if(error) return "An Error has Occured"
if(!data) return "Loading"
//  },[])

{/* <TableCell>NAME</TableCell> */}
//                   <TableCell>DESCRIPTION</TableCell>
//                   <TableCell>RATE</TableCell>
//                   <TableCell>USAGE UNIT</TableCell>
  
// console.log(data)

//<TableCell>ID</TableCell>
//                 <TableCell>INVOICE#</TableCell>
//                 <TableCell>ORDER NUMBER</TableCell>
//                 <TableCell>CUSTOMER NAME</TableCell>
//                 <TableCell>STATUS</TableCell>
//                 <TableCell>DUE DATE</TableCell>
//                 <TableCell>AMOUNT</TableCell>
//                 <TableCell>BALANCE DUE</TableCell>
const columns = [
  { name: "Date"  },
  { name:"Invoice #"},
  { name: "Order Number"},
  { name: "Customer Name"},
  { name:"Amount"},
  {
    name: "ID",
    options: {
      display: false,
    }}
  
  
];

const options = {
  onTableChange: (action, state) => {
    console.log(action);
    console.dir(state);
  },
  print:false,
  download:false,
  onRowClick: (rowData) => {
    router.push(`/invoice/${rowData[5]}`)
            console.log("RowClicked->", rowData[4] );
        },
  responsive: 'scroll',
};

  return (
    <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
      <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/addinvoices') }}>+ New</Button>
    <ThemeProvider theme={createTheme()} >
   
   <MUIDataTable 
        title={"Invoices"}
       
        columns={columns.map((e) => e)}
        data={arr}

        options={options}
      />
    </ThemeProvider>
    </div>
  );
}