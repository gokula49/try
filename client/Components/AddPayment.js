import * as React from "react";
import { Link, Button } from "@mui/material";
import {useState} from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { isAutheticated } from "../auth/auth";
import axios from "axios"
import useSWR from 'swr'

import { useRouter } from "next/router";
const {user} = isAutheticated();





function AddPayment(){

  const [simple, setSimple] = useState({name:"",email:""});
  const fetcher = async () => {
    const response = await axios.get(`https://codingmart-invoice.herokuapp.com/customers/${user._id}`)
    // console.log(response.data)  
    return response.data
    
  }
  //  const handleChangeUser=(e)=>{
  //   setSimple({name:e.target.elements.cust_name.value})
  //  }
  const [values, setValues] = useState({
      
    customer_name:"",
    amount_received:"",
    payment_date:"",
    payment:"",
    payment_mode:"",
    reference:"",
  });
  const {data,error} = useSWR('paymentsss',fetcher)
  // console.log(data)
   
 // console.log(data)
 if(error) return "An Error has Occured"
 if(!data) return "Loading"
    // const [value, setValue] = useState(); 
   
  
    const {amount_received,payment_date,payment,payment_mode,reference,}=values
    // console.log(values)
  
    const handleChange = name => event => {
      setValues({ ...values,[name]:event.target.value});
    };
    // const handleChanges = (event, newValue) => {
    //   setValue(newValue);
    // };
    
  // const postMethod=async(org)=>{
  //   const res =await axios.get(`http://localhost:4000/customerbyid/${org}`)
  //   console.log(res.data)
  //   return res.data;
  // }

  const router =useRouter();
    const handleSubmit = (e) => {
      e.preventDefault();
      let newData = e.target.elements.cust_name.value;

      axios.get(`https://codingmart-invoice.herokuapp.com/customerbyid/${newData}`).then((data)=>{
        console.log(data.data)
        setSimple({name:data.data.first_name,email:data.data.customer_email})
      })
      console.log(simple)
   
      // const datavalue = await postMethod(newData)
      // console.log(datavalue)
      setValues({...values,isclick:true})
      const payment={
      user_id:user._id, 
      email:simple&&simple.email,
      customer_name:simple&&simple.name,
      amount_received:amount_received,
      payment_date:payment_date,
      payment:payment,
      payment_mode:payment_mode,
      reference:reference,
            }
            // console.log(simple)
          // console.log(payment)
          axios.post(`https://codingmart-invoice.herokuapp.com/payments`, payment)
          .then((data)=>{
            console.log(data)
            alert("Successfully created Payments")
            router.push('/paymentrecived');
          })
          .catch((err)=>{
            alert("All fields required!")
          })
  
        }
        

    return(
        <div>
              <div className="column content-column" style={{ marginLeft: "-20px" }}>
              <div className="fill header">
              <h3 className="float-left">New Payment </h3>
              </div>
             <br/>
              <div className="scroll-y noscroll-x fill body scrollbox">
              <form className="item-creation" onSubmit={handleSubmit} >
               
              <div className="row form-group">
                <label className="col-form-label col-lg-3 required">
                 Customer Name
                </label>
                <div className="col-lg-6">
                  <select  style={{ width: 265 }}
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"
                    name="cust_name"
                    // onChange={(e)=>{
                    //  handleChangeUser(e)
               
                    // }}
                    label="Select Customer"
                    // onChange={handleChange("customer_name")}
                    // value={values.customer_name}
                    >
                    {data && data.map((option) => (
                          <option
                            key={option._id}
                            value={option._id}
                          
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.first_name + " " + option.last_name}
                          </option>
                        ))}
                  </select>
                </div>
              </div>
                  

              <div className="row form-group">
                <label className="required col-form-label col-lg-3">
                  Amount Received
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="INR"
                    type="text"
                    onChange={handleChange("amount_received")}
                    value={values.amount_received}
                  />
                </div>
              </div>


              <div className="row form-group">
                      <label className="col-lg-3 col-form-label required">
                       Payment Date
                      </label>
                      <div className="col-lg-8">
                        <input style={{ width: 265 }}
                          name="date"
                          id="ember1430"
                          className="ember-text-field ember-view form-control"
                          type="date"
                          onChange={handleChange("payment_date")}
                          value={values.payment_date}
                        />
                      </div>
                    </div>



                    <div className="row form-group">
                <label className="col-form-label col-lg-3 required">
                 Payment #
                </label>
                <div className="col-lg-6">
                  <input
                  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"   
                    onChange={handleChange("payment")}
                    value={values.payment}     
                  />
                </div>
              </div>

              <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
                Payment Mode
                </label>
                <div className="col-lg-6">
                  <select  style={{ width: 265 }}
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="Select "
                    type="text"
                    select
                    label="Select Customer"
                    onChange={handleChange("payment_mode")}
                    value={values.payment_mode}
                    >
                    <option style={{  display: "flex", flexDirection: "column",}}> </option>
                           <option >Bank Remittance</option>
                           <option >Bank Transfer</option>
                            <option >Cash</option>
                            <option >Check</option>
                            <option >Credit Card</option>
                  </select>
                </div>
              </div>



              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                 Reference#
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"     
                    onChange={handleChange("reference")}
                    value={values.reference}
                  />
                </div>
              </div>
              

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Invoice no</TableCell>
                      <TableCell align="right">Invoice Amount</TableCell>
                      <TableCell align="right">Amount Due</TableCell>
                      <TableCell align="right">Payment</TableCell>
                    </TableRow>
                  </TableHead>
               
                  <TableBody>
                  
                      <TableRow
                     
                      >
                        <TableCell component="th" scope="row">  </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                   
                  </TableBody>
                </Table>
              </TableContainer>
<br/>
<br/>

              <div className="classes.billamt" style={{ alignItems: "center",width: "100%",margin:"auto"}}>
                <div className="d-flex flex-row-reverse bd-highlight">
                  <div className="p-2 bd-highlight" > 
                    <div className="classes.borderdashed" style={{ background: "#ffe6e6",borderWidth: "1px",
                             borderColor:"#ff9933",borderRadius:"4px",borderStyle: "dashed",padding: "10px 30px",display: "flex"}}>
                      <div className="classes.amountright">
                        <p>Amount Paid:</p>
                        <p>Amount used for Payments:</p>
                        <p>Amount Refunded:</p>
                        <p>Amount in Excess:</p>
                      </div>&nbsp;&nbsp;&nbsp;
                      <div className="classes.amountright" >
                        <p>Rs.{values.amount_received}</p>
                        <p>Rs.0.00</p>
                        <p>Rs.0.00</p>
                        <p>Rs.{values.amount_received} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div>
                <label className="">
                  <p>Notes (Internal use. Not visible to customer)</p>  <br/>
                </label>
              
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder=""
                  style={{ width: '100%' }}
                />
              </div>
              <br/>
              <div>
                <p>Additional Fields: Start adding custom fields for your payments received by going to Settings &rarr; Preferences  &rarr;Payments received.</p>
              </div>


              <div className="txn-creation-column">
                  <div className="btn-toolbar fixed-actions">
                    <button
                      id="ember1447"
                      className="btn btn-primary ember-view"
                      type="submit"
                      variant="contained"
                      component={Link}
                     // href="/paymentrecived"
                    >
                      Save
                    </button>
                    &nbsp;
                    
                    <div className="goback">
                    <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  href="/paymentrecived"
                >
                  Go back
                </Button>
                    </div>
                  </div>
                </div>



               </form>
                </div>
              </div>

        </div>
        )
    };
    export default AddPayment;