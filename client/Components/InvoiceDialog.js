import axios from "axios";
import useSWR from "swr";
import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { useState,useEffect } from "react";
import Head from 'next/head'
import { handleBreakpoints } from "@mui/system";
export default function InvoiceDialog({id,handleclose}){
    const[post,setpost]=useState({
        user_id:id.user_id,
        customer_name:id.customer_name,
        invoice_date:id.invoice_date,
        due_date:id.due_date,
        order_no:id.order_no,
        terms:id.terms,
        customer_notes:id.customer_notes,
        // mobile:id.mobile,
        // paymentT:id.paymentT
        
    })
    const handlechange =(event)=>{
        const {name,value}=event.target
        setpost({...post,[name]:value})
    }
    const clickMe =(e)=>{
        e.preventDefault();
        axios.put(`https://codingmart-invoice.herokuapp.com/invoices/${id._id}`,post)
        .then((data)=>{
          console.log(data)
          alert("Created Successfully")
          handleclose()
        }).catch((err)=>{
          console.log(err);
          alert("Required all Fields")
        })


    }
    
    // if(!data){
        
    //     return(
    //         <h1>loading...</h1>
    //     )
    // }
    // setValue({...values,first_name:data.first_name})


    return(
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        </Head>
        <form >
            <div className="row">
  <div class="form-group col">
    <label for="formGroupExampleInput" >Customer Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="" value={post.customer_name} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Invoice Date</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="invoice_date" value={post.invoice_date} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Due Date</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="due_date" value={post.due_date} onChange={handlechange}/>
    
    <button type="button"className="btn btn-outline-success mt-4 "onClick={clickMe}>update</button>
    <button type="button" className="btn btn-outline-danger mt-4 "style={{marginLeft:"10px"}}onClick={()=>{handleclose()}} >cancel</button>
    
  </div>

  <div class="form-group col">
    <label for="formGroupExampleInput2">Order Number</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="order_no" value={post.order_no} onChange={handlechange}/>
    <label for="formGroupExampleInput">Terms</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="terms" value={post.terms} onChange={handlechange}/>
    <label for="formGroupExampleInput">Customer Notes</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="customer_notes" value={post.customer_notes} onChange={handlechange}/>
       
  </div>
  
 
  
  
  
  </div>
</form>
        
        

       
        </>
    )

} 