import axios from "axios";
import useSWR from "swr";
import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { useState,useEffect } from "react";
import Head from 'next/head'
import { handleBreakpoints } from "@mui/system";
export default function ExpenseDialog({id,handleclose}){
    const[post,setpost]=useState({
        customer_name:id.customer_name,
        invoice:id.invoice,
        amount:id.amount,
        notes:id.notes
        
    })
    const handlechange =(event)=>{
        const {name,value}=event.target
        setpost({...post,[name]:value})
    }
    const clickMe =(e)=>{
        e.preventDefault();
        axios.put(`https://codingmart-invoice.herokuapp.com/expense/${id._id}`,post)
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
    <label for="formGroupExampleInput" >invoice</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="invoice" value={post.invoice} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Amount</label>
    
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="amount" value={post.amount} onChange={handlechange}/>
    <label for="formGroupExampleInput">Notes</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="notes" value={post.notes} onChange={handlechange}/>
    <button type="button"class="btn btn-outline-success mt-4 "onClick={clickMe}>update</button>
    <button type="button" className="btn btn-outline-danger mt-4 "style={{marginLeft:"10px"}}onClick={()=>{handleclose()}} >cancel</button>
    
  </div>
{/* 
  <div class="form-group col">
    <label for="formGroupExampleInput2">Last Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="last_name" value={post.last_name} onChange={handlechange}/>
    <label for="formGroupExampleInput">Current Balance</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="curbalance" value={post.curbalance} onChange={handlechange}/>
    <label for="formGroupExampleInput">Payment Method</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="paymentT" value={post.paymentT} onChange={handlechange}/>
    <label for="formGroupExampleInput">Phone</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="mobile" value={post.mobile} onChange={handlechange}/>
    
  </div> */}
  
 
  
  
  
  </div>
</form>
        
        

       
        </>
    )

} 