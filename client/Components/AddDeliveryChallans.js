// import SearchIcon from "@mui/icons-material/Search";
// import Stack from "@mui/material/Stack";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import MenuItem from "@mui/material/MenuItem";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import { useTheme } from "@mui/material/styles";
// import Challans from "../services/Challans";
// import {
//   Button,
//   Link,
//   FormControl,
//   Grid,
//   Input,
//   InputLabel,
//   Select,
//   Toolbar,
// } from "@mui/material";
// import Container from "@material-ui/core/Container";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/styles";
// import TextField from "@mui/material/TextField";
// import { Box } from "@mui/system";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect } from "react";
// import Customers from "../services/Customers";
// import Items from "../services/Items";
// import axios from "axios"
// import useSWR from 'swr'
// import { isAutheticated } from "../auth/auth";

// const {user} = isAutheticated();

// const ITEM_HEIGHT = 58;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 350,
//     },
//   },
// };
// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// const template = {
//   name: "",
//   quantity: 1,
//   amount: 0,
//   // discount: 0,
//   // rate: 0,
// };
// const names = [
//   "Supply of Liquid gas",
//   "Job Work",
//   "Supply on Approval",
//   "Others",
// ];
// const fetcher = async () => {
//   const respons1 = await axios.get(`http://localhost:4000/customers/${user._id}`)
//   const responses =  await axios.get(`http://localhost:4000/items/${user._id}`)

//   console.log(respons1.data,responses.data)  
//   return [responses.data,respons1.data]
  
// }
// export default function AddDeliveryChallens(props) {
//   const [products, setProducts] = useState([template]);

//   const [total, setTotal] = useState(0);

//   const [items, setItems] = useState();

//   const [customers, setCustomers] = useState();

//   // useEffect(() => {
//   //   let userId = localStorage.getItem("userId");
//   //   Customers.getAllCustomers(userId).then((res) => {
//   //     setCustomers(res.data);
//   //   });
//   //   Items.getAllItems(userId).then((res) => {
//   //     setItems(res.data);
//   //   });
//   // }, []);

//   const handleChange = (e, index) => {
//     if (e.target.name === "quantity" && e.target.value !== "") {
//       let temp = products;
//       temp[index]["amount"] =
//         e.target.value *
//         (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
//       temp[index][e.target.name] = e.target.value;

//       setProducts([...temp]);
//     }
//     if (e.target.name !== "quantity") {
//       let temp = products;
//       temp[index]["amount"] =
//         e.target.value *
//         (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
//       temp[index][e.target.name] = e.target.value;
//       setProducts([...temp]);
//     }
//     let tempTotal = 0;
//     for (let i in products) {
//       tempTotal += products[i].amount;
//     }
//     console.log(tempTotal);
//     setTotal(tempTotal);
//   };

//   const addFields = () => {
//     const inputs = products;
//     inputs.push(template);
//     setProducts([...inputs]);
//   };

//   const deleteFields = (index) => {
//     const inputs = products;
//     inputs.pop(index);
//     setProducts([...inputs]);
//   };

//   // data from db

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let datas = {
//       user_id:user._id,
//       customer_name: e.target.elements.customer.value,
//       reference: e.target.elements.reference.value,
//       delivery_challan_date: e.target.elements.delivery_challan_date.value,
//       challan_type: e.target.elements.challan_type.value,
//       terms: e.target.elements.terms.value,
//       userId: localStorage.getItem("userId"),
//       customer_notes: e.target.elements.customer_notes.value,
//       items: [...products],
//       total: total,
//     };
// let datas = {
//   user_id:user._id,
//   customer_name: e.target.elements.customer.value,
//   reference: e.target.elements.reference.value,
//   estimate_date: e.target.elements.estimate_date.value,
//   expiry_date: e.target.elements.expiry_date.value,

//   terms: e.target.elements.terms.value,
//   subject: e.target.elements.subject.value,
//   customer_notes: e.target.elements.customer_notes.value,
//   items: [...products],
//   total: total,
// };
//     console.log(datas);
//     axios.post(`http://localhost:4000/challans`,datas).then(()=>{
//       alert("Created Successfully")
//     }).catch(()=>{
//       alert("Something went wrong")
//     })
//   };

//   const theme = useTheme();

//   const {data,error} = useSWR('cusss',fetcher)
//    console.log(data)

//   return (
//     <div style={{ width: "10%" }}>
//       <div className="column content-column">
//         <h3 style={{ paddingTop: "20px" }}>New Delivery Challan</h3>
//         <div className="scroll-y noscroll-x fill body scrollbox">
//           <form className="item-creation" onSubmit={handleSubmit}>
//             <div className="primary-info grey-bg">
//               <div className="item-new">
//                 <div className="row">
//                   <div className="col-lg-8">
//                     <div className="row form-group">
//                       <label className="col-lg-3 col-form-label required">
//                         Customer Name
//                       </label>
//                       <div className="col-lg-8" style={{ display: "flex" }}>
//                         <Box sx={{ minWidth: 120 }}>
//                           <FormControl style={{ width: "500px" }}>
//                             <select
//                               name="customer"
//                               style={{ height: "40px", background: "#fff" }}
//                             >
//                               {data &&
//                                 data[1].map((option) => (
//                                   <option
//                                     key={option._id}
//                                     value={option.first_name}
//                                     style={{
//                                       display: "flex",
//                                       flexDirection: "column",
//                                       fontWeight: "bold",
//                                       padding: "-30px",
//                                     }}
//                                   >
//                                     {option.first_name + " " + option.last_name}
//                                   </option>
//                                 ))}
//                             </select>
//                           </FormControl>
//                         </Box>
//                         <div>
//                           <SearchIcon
//                             style={{
//                               width: "53px",
//                               padding: "8px",
//                               height: "46px",
//                               margin: "10px",
//                               borderRadius: "5px",
//                               backgroundColor: "#397db9",
//                               marginLeft: "380px",
//                               marginTop: "-5px",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <br />
//                     <div className="row form-group">
//                       <label className="col-lg-3 col-form-label required">
//                         Delivery Challan#
//                       </label>

//                       <div className="col-lg-8" style={{ display: "flex" }}>
//                         <input
//                           id="outlined-basic"
//                           label="Estimate"
//                           name="estimate"
//                           value=" DC-00001"
//                           disabled
//                           style={{
//                             width: 500,
//                             background: "#fff",
//                             border: "1px solid #ced4da",
//                             color: "#495057",
//                           }}
//                         ></input>
//                         &nbsp;
//                         <SettingsOutlinedIcon color="primary" />
//                         <div></div>
//                       </div>
//                     </div>

//                     <div className="row form-group">
//                       <label className="col-lg-3 col-form-label ">
//                         Reference#
//                       </label>
//                       <div className="col-lg-8" style={{ display: "flex" }}>
//                         <input
//                           id="outlined-basic"
//                           label="Reference#"
//                           name="reference"
//                           style={{ width: 500 }}
//                         ></input>
//                         <div></div>
//                       </div>
//                     </div>

//                     <div style={{ display: "flex" }}>
//                       <div className="row form-group">
//                         <label className="col-lg-3 col-form-label required">
//                           Delivery Challan Date
//                         </label>

//                         <div className="col-lg-8" style={{ display: "flex" }}>
//                           <LocalizationProvider dateAdapter={AdapterDateFns}>
//                             <input
//                               label="14 Oct 2021"
//                               style={{ width: 500 }}
//                               name="delivery_challan_date"
//                               type="date"
//                             />
//                           </LocalizationProvider>

//                           <div></div>
//                         </div>
//                       </div>

//                       <div className="row form-group">
//                         <div className="col-lg-8" style={{ display: "flex" }}>
//                           <div></div>
//                         </div>
//                       </div>
//                     </div>

//                     <br />
//                     <hr />
//                     <br />

//                     <div className="row form-group" style={{ display: "flex" }}>
//                       <label className="col-lg-3 col-form-label required">
//                         <span
//                           style={{
//                             borderBottom: "1px dashed #969696!important",
//                           }}
//                         >
//                           Challan type
//                         </span>
//                         <i
//                           id="ember1431"
//                           className="tooltip-container ember-view"
//                         ></i>
//                       </label>

//                       <FormControl
//                         style={{
//                           maxWidth: 390,
//                           marginLeft: "145px",
//                           marginTop: "-20px",
//                         }}
//                       >
//                         <select name="challan_type" style={{ padding: "14px" }}>
//                           {names.map((name) => (
//                             <option key={name} value={name}>
//                               {name}
//                             </option>
//                           ))}
//                         </select>
//                       </FormControl>
//                     </div>

//                     <div className="row form-group">
//                       <div
//                         className="col-lg-8"
//                         style={{ display: "flex" }}
//                       ></div>
//                       <br />
//                       <br />
//                     </div>
//                     <hr />
//                     <div className="row form-group"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="zb-txn-form item-new">
//               <div className="row">
//                 {" "}
//                 <div className="col-lg-6"> </div>{" "}
//                 <div className="col-lg-6"> </div>{" "}
//               </div>{" "}
//             </div>{" "}
//             <Container component="main" maxWidth="s">
//               <CssBaseline />
//               <div>
//                 <h6>Item Details</h6>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <FormControl
//                       variant="outlined"
//                       fullWidth
//                       required
//                     ></FormControl>
//                   </Grid>
//                   {products.map((item, index) => {
//                     return (
//                       <>
//                         <Grid item xs={3} sm={5}>
//                           <FormControl variant="outlined" fullWidth required>
//                             <InputLabel>Item Details</InputLabel>
//                             <Select
//                               native
//                               onChange={(e) => handleChange(e, index)}
                              
//                               name="productId"
//                               inputProps={{
//                                 name: "productId",
//                                 id: "outlined-age-native-simple",
//                               }}
//                             >
                              
//                               {data &&
//                                 data[0].map((val, index) => (
//                                   <option value={index}>{val.name}</option>
//                                 ))}
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={2} sm={2}>
//                           <TextField
//                             variant="outlined"
//                             fullWidth
//                             type="number"
//                             id="quantity"
//                             onChange={(e) => handleChange(e, index)}
//                             label="Quantity"
//                             name="quantity"
//                           />
//                         </Grid>

//                         <Grid item xs={1} sm={1}>
//                           <TextField
//                             variant="outlined"
//                             fullWidth
//                             required
//                             id="rate"
//                             onChange={(e) => handleChange(e, index)}
//                             label="Rate"
//                             name="rate"
//                           />
//                         </Grid>

//                         <Grid item xs={0} sm={0}>
//                           <TextField
//                             variant="outlined"
//                             fullWidth
//                             required
//                             id="amount"
//                             onChange={(e) => handleChange(e, index)}
//                             label="Amount"
//                             name="amount"
//                           />
//                           <Button
//                             style={{ marginTop: "1px" }}
//                             variant="contained"
//                             color="error"
//                             onClick={() => deleteFields(index)}
//                           >
//                             Delete
//                           </Button>
//                         </Grid>
//                         <br />
//                       </>
//                     );
//                   })}
//                 </Grid>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={addFields}
//                   //   className={classNamees.submit}
//                 >
//                   Add another line
//                 </Button>
//                 <hr />
//               </div>
//             </Container>
//             <div style={{ display: "flex", justifyContent: "space-around" }}>
//               <div style={{ marginLeft: "-50px", marginTop: "100px" }}>
//                 <h4>Customer Notes</h4>
//                 <textarea
//                   aria-label="empty textarea"
//                   placeholder="&nbsp; Enter any notes to be displayed in your transaction"
//                   style={{ width: 500, height: 70 }}
//                   name="customer_notes"
//                 />
//               </div>
//               <div
//                 className="total-section ml-auto invoice-discount col-lg-6 mt-5 rounded-xlg mr-4 grey-bg"
//                 id="total-section"
//               >
//                 <div
//                   id="ember1836"
//                   className="ember-view"
//                   style={{ marginLeft: "-40px" }}
//                 >
//                   <div id="ember1837" className="ember-view">
//                     <div id="ember1838" className="ember-view collapse show">
//                       <div
//                         className="total-row sub-total  mt-3"
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-around",
//                           marginLeft: "10px",
//                           paddingLeft: "10px",
//                         }}
//                       >
//                         <div
//                           className="total-label"
//                           style={{ marginLeft: "-198px" }}
//                         >
//                           {" "}
//                           Sub Total{" "}
//                         </div>
//                         <div
//                           className="total-amount"
//                           style={{ marginRight: "-185px" }}
//                         >
//                           {" "}
//                           0.00{" "}
//                         </div>
//                       </div>
//                       <div
//                         className="total-row"
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-around",
//                           margin: "10px",
//                         }}
//                       >
//                         <div
//                           className="total-label"
//                           style={{ marginLeft: "-80px" }}
//                         >
//                           <div className="row">
//                             <div className="col-lg-5 col-sm-5 col-5">
//                               <div className="form-control-plaintext">
//                                 {" "}
//                                 Discount{" "}
//                               </div>
//                             </div>
//                             <div className="col-lg-5 col-sm-5 col-5">
//                               <div
//                                 id="ember1839"
//                                 className="input-group ember-view"
//                               >
//                                 <div
//                                   id="ember1841"
//                                   className="dropdown open ember-view input-group-append"
//                                 >
//                                   <div
//                                     className="ember-text-field form-control ac-search-txt ember-view"
//                                     style={{ width: 200, marginRight: "-10px" }}
//                                   >
//                                     <select
//                                       className="value"
//                                       style={{ width: 185 }}
//                                     >
//                                       <option value="saab">₹</option>
//                                       <option value="opel">%</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           className="total-amount"
//                           style={{ lineHeight: "2", marginRight: "-87px" }}
//                         >
//                           <span> 0.00 </span>
//                         </div>
//                       </div>
//                       <div id="ember1846" className="ember-view"></div>
//                       <div id="ember1847" className="ember-view"></div>
//                       <div className="table-row">
//                         <div
//                           className="total-row"
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-around",
//                             margin: "10px",
//                           }}
//                         >
//                           <div className="badge-editable total-label">
//                             <div className="row">
//                               <div className="col-lg-5 col-sm-5 col-5">
//                                 <input
//                                   id="ember1848"
//                                   className="ember-text-field ember-view form-control editable"
//                                   placeholder="Adjustment"
//                                   type="text"
//                                   style={{ marginLeft: "30px" }}
//                                 />
//                               </div>
//                               <div className="col-lg-4 col-sm-4 col-4">
//                                 <input
//                                   id="ember1849"
//                                   className="ember-text-field text-right ember-view form-control"
//                                   type="text"
//                                   style={{ marginLeft: "10px" }}
//                                 />
//                               </div>
//                               <HelpOutlineOutlinedIcon
//                                 color="disabled"
//                                 style={{
//                                   marginTop: "-26px",
//                                   marginLeft: "160px",
//                                 }}
//                               />
//                               <span
//                                 id="ember1851"
//                                 className="popover-container ember-view"
//                               >
//                                 <div
//                                   id="ember1853"
//                                   className="d-none popover bs-popover-top ember-view popover-help"
//                                 ></div>
//                               </span>
//                             </div>
//                           </div>

//                           <div
//                             className="total-amount "
//                             style={{ lineHeight: "2", marginRight: "30px" }}
//                           >
//                             {" "}
//                             0.00{" "}
//                           </div>
//                         </div>
//                       </div>
//                       <br />
//                       {/* <div className="table-row" id="tcs-field">
//                       <div
//                         className="total-row"
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-around",
//                           margin: "10px",
//                         }}
//                       > */}
//                       {/* <div className="total-label">
//                           <div className="row"> */}
//                       {/* <div className="col-lg-5 col-sm-5 col-5 py-2">
//                               <div
//                                 className="form-control-plaintext"
//                                 style={{ marginLeft: "-60px" }}
//                               >
//                                 {" "}
//                                 TCS
//                               </div>
//                             </div> */}

//                       {/* <div className="col-lg-6 col-sm-6 col-6 tds-select">
//                               <div id="ember1855" className="ember-view">
//                                 <div className="ac-box "> */}
//                       {/* <Box
//                                     sx={{ minWidth: 120, background: "#fff" }}
//                                   >
//                                     <FormControl style={{ width: "165px" }}>
//                                       <InputLabel
//                                         id="demo-simple-select-label"
//                                         style={{ height: "20px" }}
//                                       >
//                                         Select a tax
//                                       </InputLabel>
//                                       <Select
//                                         labelId="demo-simple-select-label"
//                                         id="demo-simple-select"
//                                         value={age}
//                                         label="Age"
//                                         onChange={handleChange}
//                                         style={{ height: "40px" }}
//                                       ></Select>
//                                     </FormControl>
//                                   // </Box> */}
//                       {/* <HelpOutlineOutlinedIcon */}
//                       {/* color="disabled" */}
//                       {/* style={{ */}
//                       {/* marginTop: "-60px",
//                                      marginLeft: "170px",
//                                     }}
//                                    /> */}

//                       {/* </div>
//                               </div>
//                             </div> */}
//                       {/* <span
//                               id="ember1857"
//                               className="popover-container ember-view"
//                             >
//                               <div
//                                 id="ember1859"
//                                 className="d-none popover bs-popover-bottom ember-view popover-help"
//                               ></div>
//                             </span> */}
//                       {/* </div>
//                         </div> */}
//                       {/* <div
//                           className="total-amount"
//                           style={{ lineHeight: "2", marginRight: "-67px" }}
//                         >
//                           <div
//                             id="ember1860"
//                             className="popover-container ember-view"
//                             style={{ marginRight: "-50px" }}
//                           >
//                             <div className="text-muted align-center"> 0 </div>
//                             <div
//                               id="ember1861"
//                               className="d-none popover bs-popover-bottom ember-view tax-override-popover"
//                             ></div>
//                           </div>
//                         </div> */}
//                       {/* </div>
//                     </div> */}
//                     </div>
//                     <div
//                       className="total-row gross-total mb-3  "
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-around",
//                         margin: "10px",
//                       }}
//                     >
//                       <div
//                         className="total-label"
//                         style={{ marginLeft: "-170px" }}
//                       >
//                         {" "}
//                         <b> Total ( ₹ ) </b>
//                       </div>
//                       <div
//                         className="total-amount "
//                         style={{ marginRight: "-180px" }}
//                       >
//                         <b>0.00</b>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div style={{ display: "flex", justifyContent: "space-around" }}>
//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <div
//                   style={{
//                     margin: "100px",
//                     marginLeft: "-20px",
//                     marginRight: "100px",
//                   }}
//                 >
//                   <h4>Terms & Conditions</h4>
//                   <textarea
//                     aria-label="empty textarea"
//                     placeholder="&nbsp; Enter the terms and conditions of your business to be displayed in your transaction"
//                     style={{ width: 600, height: 100 }}
//                     name="terms"
//                   />
//                 </div>
//                 <Stack
//                   direction="row"
//                   alignItems="center"
//                   spacing={2}
//                   style={{ marginLeft: "80px" }}
//                 >
//                   <label htmlFor="contained-button-file">
//                     <p>Attach File(s) to Delivery Challan</p>
//                     <Input
//                       accept="image/*"
//                       id="contained-button-file"
//                       multiple
//                       type="file"
//                     />
//                     <Button variant="contained" component="span">
//                       Upload
//                     </Button>
//                     <p>
//                       You can upload a maximum of 3 filejustifyContents, 5MB
//                       each
//                     </p>
//                   </label>
//                 </Stack>
//               </div>
//             </div>
//             <div className="text-muted mb-7"> </div>{" "}
//             <div className="txn-creation-column">
//               <div className="btn-toolbar fixed-actions">
//                 <Button
//                   variant="contained"
//                   color="success"
//                   component={Link}
//                   href="/deliverychallanshome"
//                 >
//                   Go back
//                 </Button>
//                 &nbsp;
//                 {/* )} */}
//                 <button
//                   id="ember1447"
//                   className="btn btn-primary ember-view"
//                   type="submit"
//                   component={Link}
//                   href="/deliverychallans"
//                 >
//                   Save
//                 </button>
//                 &nbsp;
//                 {/* <Link href="/pdf">
//                 <Button color="success" variant="contained">
//                   Generate PDF
//                 </Button>
//               </Link>
//               &nbsp; */}
//                 <Button
//                   className="btn btn-secondary"
//                   data-ember-action=""
//                   data-ember-action-1448="1448"
//                   component={Link}
//                   href="/deliverychallans"
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Link,
  Select,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Customers from "../services/Customers";
import Estimates from "../services/Estimates";
import axios from "axios"
import useSWR from 'swr'
import { isAutheticated } from "../auth/auth";
import { te } from "date-fns/locale";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useRouter } from "next/router";


const {user} = isAutheticated();

const template = {
  name: "",
  quantity: 1,
  amount: 0,
  discount: 0,
  rate: 0,
};
const currencies = [
  {
    value: "USD",
    label: "Registered Customer",
  },
  {
    value: "EUR",
    label: "Overseas Customer",
  },
  {
    value: "BTC",
    label: "Consumer Customer",
  },
  {
    value: "JPY",
    label: "SEZ Customer",
  },
];

const fetcher = async () => {
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/customers/${user._id}`)
  const responses =  await axios.get(`https://codingmart-invoice.herokuapp.com/items/${user._id}`)

  // console.log(responses.data,response.data)  
  return [responses.data,response.data]
  
}

export default function AddDeliveryChallans(props) {
 
  // const [itm,setItm] = useState()
  // console.log(response.data)  
  // setItm(response.data)
  // console.log(items)

  const router = useRouter()

  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  const [products, setProducts] = useState([template]);

  const [total, setTotal] = useState(0);
  const [quant,setquant] = useState(0);
  const [dis,setdis]= useState(0);

  const [value, setValue] = React.useState(new Date("11/01/2021"));

  const handleChanges = (newValue) => {
    setValue(newValue);
  };
  const [value1, setValue1] = React.useState(new Date("dd/MM/yyyy"));

  const [items, setItems] = useState();

  // const [customers, setCustomers] = useState();


  const {data,error} = useSWR('customersss',fetcher)
  console.log(data)
  // setCustomers(data)
   
 // console.log(data)
 if(error) return "An Error has Occured"
 if(!data) return "Loading"

  // useEffect(() => {
  //   let userId = localStorage.getItem("userId");
  //   Customers.getAllCustomers(userId).then((res) => {
  //     setCustomers(res.data);
  //   });
  //   Items.getAllItems(userId).then((res) => {
  //     setItems(res.data);
  //   });
  // }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    let datas = {
            user_id:user._id,
            customer_name: e.target.elements.customer.value,
            reference: e.target.elements.reference.value,
            delivery_challan_date: e.target.elements.delivery_challan_date.value,
            // challan_type: e.target.elements.challan_type.value,
            terms: e.target.elements.terms.value,
            
            customer_notes: e.target.elements.customer_notes.value,
            items: [...products],
            total: total,
          };
    console.log(datas);
    axios.post(`https://codingmart-invoice.herokuapp.com/challans`,datas).then((data)=>{
      alert("created successfully")
      router.push('/deliverychallans')
    }).catch(()=>{
      alert("Something went wrong");
    })
  };

  const addFields = () => {
    const inputs = products;
    inputs.push(template);
    setProducts([...inputs]);
  };

  const deleteFields = (index) => {
    const inputs = products;
    inputs.pop(index);
    setProducts([...inputs]);
  };
  const handleChangeSelect = (e, index) => {
    let temp = products;
    temp[index]["name"] = data[0][e.target.value]["name"];
    temp[index]["amount"] = data[0][e.target.value]["selling_price"];
    temp[index]["quantity"] = 1;
    setProducts([...temp]);
    console.log(temp);
  };



  const handleChange = (e, index) => {
    if (e.target.name === "quantity" && e.target.value !== "") {
      let temp = products;
      temp[index]["amount"] =
        e.target.value *
        (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
      temp[index][e.target.name] = e.target.value;

      setProducts([...temp]);
    }
    if (e.target.name !== "quantity") {
      let temp = products;
      temp[index]["amount"] =
        e.target.value *
        (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
      temp[index][e.target.name] = e.target.value;
      setProducts([...temp]);
    }
    
    let tempTotal = 0;
    for (let i in products) {
      tempTotal += products[i].amount;
    }
    setTotal(tempTotal);
    let quan = 0;
    for (let i in products) {
      quan += products[i].quantity;
    }
    setquant(quan)
  
    // if(e.target.name ==="discount"){
    //   let temp = products;
    //   temp[index]["amount"]=((temp[index]["amount"]* e.target.value)-temp[index]["amount"]);
    //   temp[index][e.target.name] = e.target.value;
    //   setProducts([...temp]);
    // }
  };
  const nnnnn=(e,index)=>{
    let temp = products;
    let take = ((e.target.value/100) *temp[index]["amount"])
      temp[index]["amount"] =temp[index]["amount"]-take
        
        // (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
      temp[index][e.target.name] = e.target.value;

      setProducts([...temp]);
      let tempi = 0;
    for (let i in products) {
      tempi += products[i].discount;
    }
    setdis(tempi);


  }
  const takehome=(e,index)=>{
    // let temp = products;
    //   temp[index]["amount"] =
    //     e.target.value *
    //     (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
    //   temp[index][e.target.name] = e.target.value;


  }
  

  return (
    <div style={{ width: "10%" }}>
      <div className="column content-column">
        <h3 style={{ paddingTop: "20px" }}>New Delivery Challans</h3>
        <div className="scroll-y noscroll-x fill body scrollbox">
          <form className="item-creation" onSubmit={handleSubmit}>
            <div className="primary-info grey-bg">
              <div className="item-new">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label required">
                        Customer Name
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl style={{ width: "500px" }}>
                            <select
                              name="customer"
                              style={{ height: "40px", background: "#fff" }}
                              label="Select Customer"
                            >
                              {data &&data[1] &&
                                data[1].map((option) => (
                                  <option
                                    key={option._id}
                                    value={option.name}
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      fontWeight: "bold",
                                      padding: "-30px",
                                    }}
                                  >
                                    {option.first_name + " " + option.last_name}
                                  </option>
                                ))}
                            </select>
                          </FormControl>
                        </Box>
                       
                      </div>
                    </div>
                    <br />
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label required">
                        Delivery#
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <input
                          id="outlined-basic"
                          label="Estimate"
                          name="estimate"//reference
                          value=" EST-000001"
                          style={{
                            width: 500,
                            background: "#fff",
                            border: "1px solid #ced4da",
                            color: "#495057",
                          }}
                        ></input>
                        &nbsp;
                        <SettingsOutlinedIcon color="primary" />
                        <div></div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                        Reference#
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <input
                          id="outlined-basic"
                          label="Reference#"
                          name="reference"
                          style={{ width: 500 }}
                        ></input>
                        <div></div>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="row form-group">
                        <label className="col-lg-3 col-form-label required">
                          Estimate Date
                        </label>

                        <div className="col-lg-8" style={{ display: "flex" }}>
                          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Stack
                            spacing={2}
                            style={{ width: "560px", height: "5px" }}
                          >
                            <MobileDatePicker
                              label=""
                              inputFormat="dd/MM/yyyy"
                              value={value}
                              onChange={handleChanges}
                              name="estimate_date"
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider> */}
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <input
                              label="hvgvg"
                              style={{ width: 500 }}
                              name="delivery_challan_date"
                              type="date"
                            />
                          </LocalizationProvider>
                          <div></div>
                        </div>
                      </div>

                      <div className="row form-group">
                        <label className="col-lg-3 col-form-label">
                          Expiry Date
                        </label>

                        <div className="col-lg-8" style={{ display: "flex" }}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <input
                              label="DD MMM YYY"
                              style={{ width: 500 }}
                              name="expiry_date"
                              type="date"
                            />
                          </LocalizationProvider>
                          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Stack
                            spacing={2}
                            style={{ width: "550px", height: "25px" }}
                          >
                            <MobileDatePicker
                              label="dd/MM/yyyy"
                              inputFormat="dd/MM/yyyy"
                              value={value1}
                              onChange={handleChange1}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider> */}
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingTop: "2px",
                        marginLeft: "145px",
                        fontSize: "14px",
                      }}
                      className="font-xs"
                      data-ember-action=""
                      data-ember-action-4193="4193"
                    >
                      {" "}
                      To create transaction dated before 01/07/2017,{" "}
                      <a href="#">click here</a>{" "}
                    </div>

                    <br />
                    <hr />
                    <br />
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                        Salesperson
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <Box sx={{ minWidth: 120, background: "#fff" }}>
                          <FormControl style={{ width: "365px" }}>
                          <input
                            id="outlined-basic"
                            name="salesperson"
                            placeholder="&nbsp;Add Sales Person"
                            style={{ width: 350 }}
                          />
                          </FormControl>
                        </Box>
                      </div>
                    </div>

                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                        Project Name
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <Box sx={{ minWidth: 120, backgroundColor: "#eee" }}>
                          <FormControl style={{ width: "365px" }}>
                          <input
                            id="outlined-basic"
                            name="projectname"
                            placeholder="&nbsp;Add Project Name"
                            style={{ width: 350 }}
                          />
                          </FormControl>
                        </Box>
                        {/* <select
                        id="outlined-select-currency"
                        select
                        label="Select Project Name"
                        name="project_name"
                        style={{ width: 500 }}
                      >
                        <option
                          disabled
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          Select
                        </option> */}
                        {/* {currencies.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.label + " --dummy data"}
                          </option>
                        ))} */}
                        {/* </select> */}
                        {/* <div></div> */}
                      </div>
                      <div
                        style={{
                          paddingTop: "2px",
                          marginLeft: "145px",
                          fontSize: "14px",
                        }}
                        className="font-xs"
                        data-ember-action=""
                        data-ember-action-4193="4193"
                      >
                        {" "}
                        Select a customer to associate a project.{" "}
                      </div>
                      <br />
                      <br />
                    </div>
                    <hr />
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                        Subject &nbsp;
                        <InfoOutlinedIcon />
                      </label>

                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <input
                          id="outlined-basic"
                          label="Reference#"
                          name="subject"
                          placeholder="&nbsp;Let your customer know what this Estimate is for"
                          style={{ width: 600 }}
                        ></input>
                        <div></div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="zb-txn-form item-new">
              <div className="row">
                {" "}
                <div className="col-lg-6"> </div>{" "}
                <div className="col-lg-6"> </div>{" "}
              </div>{" "}
            </div>{" "}
           

            <h2>Price List</h2>
              <Grid container spacing={2}>
                {products.map((item, index) => {
                  return (
                    <>
                      <Grid item xs={3} sm={3}>
                        <FormControl
                          variant="outlined"
                          // className={classNamees.formControl}
                          fullWidth
                        >
                          <InputLabel>Item Details</InputLabel>
                          <Select
                            native
                            onChange={(e) => handleChangeSelect(e, index)}
                            label="Item Details"
                            name="name"
                            inputProps={{
                              name: "itemId",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option value="select" defaultChecked>
                              Select
                            </option>
                            {data && data[0] &&
                                data[0].map((val, index) => (
                              <option value={index}>{val.name}</option>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={3} sm={3}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          type="number"
                          id="quantity"
                          onChange={(e) => handleChange(e, index)}
                          label="Quantity"
                          name="quantity"
                          value={products[index].quantity}
                        />
                      </Grid>

                      {/* <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="rate"
                          onChange={(e) => takehome(e, index)}
                          label="Rate"
                          type="number"
                          name="rate"
                        />
                      </Grid>  */}

                       <Grid item xs={2} sm={2}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="discount"
                          onChange={(e) => nnnnn(e, index)}
                          label="Discount"
                          name="discount"
                        />
                      </Grid> 

                      {/* <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="tax"
                          // onChange={(e) => handleChange(e, index)}
                          label="Tax"
                          name="tax"
                        />
                      </Grid> */}

                      <Grid item xs={2} sm={2}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={products[index].amount}
                          id="amount"
                          onChange={(e) => handleChange(e, index)}
                          label="Amount"
                          name="amount"
                        />
                        <Button
                          style={{ marginTop: "1px",marginLeft:"1.5rem" }}
                          variant="contained"
                          color="error"
                          onClick={() => deleteFields(index)}
                        >
                          Delete
                        </Button>
                        
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                onClick={addFields}
                style={{ marginTop: "1px" }}
                //   className={classNamees.submit}
              >
                Add
              </Button>
              
              <hr />
            
          
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ 
                    marginLeft: "-30px",
                    marginRight: "50px" }}>
              <h4>Customer Notes</h4>
              <textarea
                aria-label="empty textarea"
                placeholder="Looking forward for your business."
                style={{ width: 500, height: 100 }}
                name="customer_notes"
              />
            </div>
            <div>
            {/* <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
              <div class="form-group col">
                <label for="formGroupExampleInput" >Quantity</label><br/>
                <label for="formGroupExampleInput" >Discount</label><br/>
                <label for="formGroupExampleInput" >Total</label>
              </div>
              <div class="form-group col">
                <input type="text" style= {{width:"140px"}} id="formGroupExampleInput" placeholder=""  name="first_name" value={total} disabled readonly/>
                <input type="text" style= {{width:"140px"}} id="formGroupExampleInput" placeholder=""  name="first_name" value={total} disabled readonly/>
                <input type="text" style= {{width:"140px"}} id="formGroupExampleInput" placeholder=""  name="first_name" value={total} disabled readonly/>
              </div>
            </div> */}

                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                      Quantity
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <Box sx={{ minWidth: 120, background: "#fff" }}>
                          <FormControl style={{ width: "365px" }}>
                          <input
                            id="outlined-basic"
                            name="quantity"
                            placeholder="&nbsp;"
                            value={quant} 
                            disabled readonly
                            style={{ width: 200 }}
                          />
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                      Discount
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <Box sx={{ minWidth: 120, background: "#fff" }}>
                          <FormControl style={{ width: "365px" }}>
                          <input
                            id="outlined-basic"
                            name="discount"
                            placeholder="&nbsp;"
                            value={dis} 
                            disabled readonly
                            style={{ width: 200 }}
                          />
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                      Total
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <Box sx={{ minWidth: 120, background: "#fff" }}>
                          <FormControl style={{ width: "365px" }}>
                          <input
                            id="outlined-basic"
                            name="total"
                            placeholder="&nbsp;" 
                            value={total} 
                            disabled readonly
                            style={{ width: 200 }}
                          />
                          </FormControl>
                        </Box>
                      </div>
                    </div>

            </div>
            </div>
              <br/>

              <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ 
                    marginLeft: "-175px",
                    marginRight: "50px" }}>
              <h4>Terms & Conditions</h4>
              <textarea
                aria-label="empty textarea"
                placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                style={{ width: 500, height: 100 }}
                name="terms"
              />
            </div>
            <div>
            <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
              
            </div>
            </div>
            </div>
     
            {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    marginLeft: "-140px",
                    marginRight: "50px"
                  }}
                >
                  <h4>Terms & Conditions</h4>
                  <textarea
                    aria-label="empty textarea"
                    placeholder="&nbsp;Enter the terms and conditions of your business to be displayed in your transaction"
                    style={{ width: 600, height: 100 }}
                    name="terms"
                  />
                </div>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  style={{ marginLeft: "80px" }}
                >
                  <label htmlFor="contained-button-file">
                    <p>Attach File(s) to Estimate</p>
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <Button variant="contained" component="span">
                      Upload
                    </Button>
                    <p>You can upload a maximum of 5 files, 5MB each</p>
                  </label>
                </Stack>
              </div>
            </div> */}
            <br/>
            <div className="text-muted mb-7">
              {" "}
              <b>Additional Fields:</b>
              Start adding custom fields for your estimates by going to{" "}
              <b>
                <i>Settings &gt; Preferences &gt;Estimates. </i>
              </b>{" "}
            </div>{" "}
            <div className="txn-creation-column">
              <div className="btn-toolbar fixed-actions">
                {/* {props.title === "New Estimate" ? ( */}
                {/* ) : props.title === "New Sales Order" ? ( */}
                {/* ) : ( */}
                  
                &nbsp;
                {/* )} */}
                <button
                  id="ember1447"
                  className="btn btn-primary ember-view"
                  type="submit"
                  component={Link}
                  href="/deliverychallans"
                >
                  Save
                </button>
                &nbsp;

                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  href="/deliverychallans"
                >
                  Go back
                </Button>
                
                &nbsp;
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}