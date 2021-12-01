


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
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/challans/${user._id}`)
  console.log(response.data)  
  return response.data
  
}

export default function Customer() {
  const router =useRouter();
 const [post,setPost]=useState([]);
//  useEffect(()=>{
  const {data,error} = useSWR('challans',fetcher)
  // setPost(data)
  const arr = []
  data && data.map((e=> arr.push({"DATE":e.delivery_challan_date,"DELIVER CHALLAN #":e._id.slice(0,5),"REFERENCE NUMBER":e.reference,"CUSTOMER NAME":e.customer_name,"STATUS":"DRAFT","AMOUNT":e.total,"ID":e._id})))
  if(error) return "An Error has Occured"
if(!data) return "Loading"

//                   <TableCell>Challan Number</TableCell>
//                   <TableCell>REFENCE NUMBER</TableCell>
//                   <TableCell>CUSTOMER NAME</TableCell>
//                   <TableCell>STATUS</TableCell>
//                   <TableCell>INVOICE STATUS</TableCell>
//                   <TableCell>AMOUNT</TableCell>

//                     <TableCell>{product.estimate_date}</TableCell>
//                     <TableCell>{product._id}</TableCell>
//                     <TableCell>{product.reference}</TableCell>
//                     <TableCell>{product.customer_name}</TableCell>
//                     <TableCell>{product.estimate_date}</TableCell>
//                     <TableCell>{product.total}</TableCell>

const columns = [
  { name: "DATE"  },
  { name:"DELIVER CHALLAN #"},
  { name: "REFERENCE NUMBER"  },
  { name: "CUSTOMER NAME"  },

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
    router.push(`/challan/${rowData[6]}`)
            console.log("RowClicked->", rowData[4] );
        },
  responsive: 'scroll',
};

  return (
    <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
      <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/adddeliverychallans') }}>+ New</Button>
    <ThemeProvider theme={createTheme()} >
   
   <MUIDataTable 
        title={"Delivery Challans"}
       
        columns={columns.map((e) => e)}
        data={arr}

        options={options}
      />
    </ThemeProvider>
    </div>
  );
}
