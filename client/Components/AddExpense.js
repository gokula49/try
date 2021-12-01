import * as React from "react";
import { Link, Button } from "@mui/material";
import {useState} from "react";
import { isAutheticated } from "../auth/auth";
import axios from "axios"
import useSWR from 'swr'
import { useRouter } from "next/router";
const {user} = isAutheticated();


const fetcher = async () => {
  const response = await axios.get(`https://codingmart-invoice.herokuapp.com/customers/${user._id}`)
  console.log(response.data)  
  return response.data
  
}


function AddExpense(){
  const [custname,setCustname] = useState();
  const [value, setValue] = useState('1');
  const [values, setValues] = useState({
    date:"",
    category_name:"",
    amount:"",
    invoice:"",
    notes:"",
    
  });
  const {data,error} = useSWR('customersss',fetcher)
 console.log(data)
  
// console.log(data)
// if(error) return "An Error has Occured"
// if(!data) return "Loading"

   
  
    const {date,category_name,amount,invoice,notes}=values
    console.log(values)
  
    const handleChange = name => event => {
      setValues({ ...values,[name]:event.target.value});
    };
    const handleChanges = (event, newValue) => {
      setValue(newValue);
    };
  
    const router = useRouter()
    const handleSubmit = (e) => {
      e.preventDefault();
      setValues({...values,isclick:true})
      const expense={
        user_id:user._id,
        date:date,
        category_name:category_name,
        amount:amount,
        invoice:invoice,
        notes:notes,
        customer_name:e.target.elements.cust_name.value,
        
            }
          console.log(e.target.elements.cust_name.value)
          console.log(expense)
          axios.post(`https://codingmart-invoice.herokuapp.com/expense`, expense)
          .then((data)=>{
            alert("Successfully created")
            router.push('/expense')
          })
          .catch((err)=>{
            alert("All fields Required!")
          })
          
  
        }
       

    return(
        <div>
           <div className="column content-column" style={{ marginLeft: "-20px" }}>
           <div className="fill header">
           <h3 className="float-left">New Expense </h3>
         </div>
         <br/>
         <div className="scroll-y noscroll-x fill body scrollbox">
         <form className="item-creation" onSubmit={handleSubmit} >

         <div className="row form-group">
                      <label className="col-lg-3 col-form-label required">
                       Date
                      </label>
                      <div className="col-lg-8">
                        <input
                          name="date"
                          id="ember1430"
                          className="ember-text-field ember-view form-control"
                          type="date"
                          onChange={handleChange("date")}
                          value={values.date}
                        />
                      </div>
                    </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3 required">
                Category Name
                </label>
                <div className="col-lg-6">
                  <select  style={{ width: 265 }}
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"
                    select
                    label="Select Customer"
                    onChange={handleChange("category_name")}
                    value={values.category_name}
                    >
                    <option style={{  display: "flex", flexDirection: "column",}}>Job Costing</option>
                            <option >Labor</option>
                            <option >Material</option>
                            <option >Subcontractor</option>
                            <option >Purchase Discounts</option>
                  </select>
                </div>
              </div>

                 <div className="row form-group">
                <label className="required col-form-label col-lg-3">
                  Amount
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="INR"
                    type="text"
                    onChange={handleChange("amount")}
                    value={values.amount}
                  />
                </div>
              </div>

                  <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  REFERENCE #
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"   
                    onChange={handleChange("invoice")}
                    value={values.invoice}     
                  />
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                 Notes
                </label>
                <div className="col-lg-6">
                  
                  <textarea
                        id="ember1440"
                        className="ember-text-area ember-view form-control"
                        placeholder="Max. 500 words"
                        type="text"
                        style={{ width: 265 }}
                        onChange={handleChange("notes")}
                        value={values.notes}
                      ></textarea>
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                 Customer Name
                </label>
                <div className="col-lg-6">
                  <select  style={{ width: 265 }}
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                  
                   
                    label="Select Customer"
                    name="cust_name"
                    // onChange={handleChange("customer_name")}
                    // value={values.customer_name}
                   
                  
                    >
                   {data && data.map((option) => (
                          <option
                            key={option._id}
                            value={option.first_name}
                           
                    // value={values.customer_name}
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
                  
             
                    
                     
              <div className="txn-creation-column">
                  <div className="btn-toolbar fixed-actions">
                    <button
                      id="ember1447"
                      className="btn btn-primary ember-view"
                      type="submit"
                      variant="contained"
                      component={Link}
                      
                    >
                      Save
                    </button>
                    &nbsp;
                   
                    <div className="goback">
                     
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
                </div>
              

         </form>
         </div>
           </div>
      </div>

    )
};
export default AddExpense;