


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
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/estimates/${user._id}`)
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
  data && data.map((e=> arr.push({"DATE":e.estimate_date,"ESTIMATE NUMBER":e._id.slice(5,10),"REFERENCE NUMBER":e.reference, "CUSTOMER NAME":e.customer_name,"AMOUNT":e.total,"ID":e._id})))
  if(error) return "An Error has Occured"
if(!data) return "Loading"
//  },[])

 
//                     <TableCell>{product.estimate_date}</TableCell>
//                     <TableCell>{product._id}</TableCell>
//                     <TableCell>{product.reference}</TableCell>
//                     <TableCell>{product.customer_name}</TableCell>
//                     <TableCell>{product.estimate_date}</TableCell>
//                     <TableCell>{product.total}</TableCell>


const columns = [
  { name: "DATE"  },
  { name:"ESTIMATE NUMBER"},
  {name:"REFERENCE NUMBER"},
  { name: "CUSTOMER NAME"  },
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
    router.push(`/estimates/${rowData[5]}`)
            console.log("RowClicked->", rowData[4] );
        },
  responsive: 'scroll',
};

  return (
    <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
      <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/addestimates') }}>+ New</Button>
    <ThemeProvider theme={createTheme()} >
   
   <MUIDataTable 
        title={"Estimates"}
       
        columns={columns.map((e) => e)}
        data={arr}

        options={options}
      />
    </ThemeProvider>
    </div>
  );
}
