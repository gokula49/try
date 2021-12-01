import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useRouter } from "next/router";
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

  console.log(responses.data,response.data)  
  return [responses.data,response.data]
  
}

export default function AddEstimates(props) {
 
  // const [itm,setItm] = useState()
  // console.log(response.data)  
  // setItm(response.data)
  // console.log(items)

  const [age, setAge] = React.useState("");
  const router = useRouter();
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


  const {data,error} = useSWR('estimatess',fetcher)
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
      estimate_date: e.target.elements.estimate_date.value,
      expiry_date: e.target.elements.expiry_date.value,
    
      terms: e.target.elements.terms.value,
      subject: e.target.elements.subject.value,
      customer_notes: e.target.elements.customer_notes.value,
      items: [...products],
      total: total,
    };
    console.log(datas);
    axios.post(`https://codingmart-invoice.herokuapp.com/estimates`,datas).then((data)=>{
      alert("created successfully")
      router.push('/estimates')
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
  if(!data[1]){
    return <h1>Loading...</h1>
  }
  

  return (
    <div style={{ width: "10%" }}>
      <div className="column content-column">
        <h3 style={{ paddingTop: "20px" }}>New Estimate</h3>
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
                              {data &&data[1]&&
                                data[1].map((option) => (
                                  <option
                                    key={option._id}
                                    value={option.first_name}
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
                        Estimate#
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <input
                          id="outlined-basic"
                          label="Estimate"
                          name="estimate"
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
                              name="estimate_date"
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
                  href="/estimates"
                >
                  Save
                </button>
                &nbsp;

                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  href="/estimates"
                >
                  Go back
                </Button>
                
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}