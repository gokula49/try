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
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/items/${user._id}`)
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
  data && data.map((e=> arr.push({"Name":e.name,"DESCRIPTION":e.selling_description,"RATE":e.selling_price,"USAGE UNIT":e.unit,"ID":e._id})))
  if(error) return "An Error has Occured"
if(!data) return "Loading"
//  },[])

{/* <TableCell>NAME</TableCell> */}
//                   <TableCell>DESCRIPTION</TableCell>
//                   <TableCell>RATE</TableCell>
//                   <TableCell>USAGE UNIT</TableCell>
  
// console.log(data)


const columns = [
  { name: "Name"  },
  { name:"DESCRIPTION"},
  { name: "RATE"  },
  { name:"USAGE UNIT"},
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
    router.push(`/item/${rowData[4]}`)
            console.log("RowClicked->", rowData[4] );
        },
  responsive: 'scroll',
};

  return (
    <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
      <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/additem') }}>+ New</Button>
    <ThemeProvider theme={createTheme()} >
   
   <MUIDataTable 
        title={"Items"}
       
        columns={columns.map((e) => e)}
        data={arr}

        options={options}
      />
    </ThemeProvider>
    </div>
  );
}