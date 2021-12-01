import axios from "axios";
import useSWR from "swr";
import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { useState,useEffect } from "react";
import Head from 'next/head'
import { handleBreakpoints } from "@mui/system";
export default function CustomerDailog({id,handleclose}){
    const[post,setpost]=useState({
        first_name:id.first_name,
        last_name:id.last_name,
        user_id:id.user_id,
        company_name:id.company_name,
        curbalance:id.curbalance,
        customer_email:id.customer_email,
        pan:id.pan,
        mobile:id.mobile,
        paymentT:id.paymentT
        
    })
    const handlechange =(event)=>{
        const {name,value}=event.target
        setpost({...post,[name]:value})
    }
    const clickMe =(e)=>{
        e.preventDefault();
        axios.put(`https://codingmart-invoice.herokuapp.com/customers/${id._id}`,post)
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
    <label for="formGroupExampleInput" >First Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="first_name" value={post.first_name} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Email</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="customer_email" value={post.customer_email} onChange={handlechange}/>
    <label for="formGroupExampleInput" >company Name</label>
    
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="company_name" value={post.company_name} onChange={handlechange}/>
    <label for="formGroupExampleInput">Pan</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="pan" value={post.pan} onChange={handlechange}/>
    <button type="button"className="btn btn-outline-success mt-4 "onClick={clickMe}>update</button>
    <button type="button" className="btn btn-outline-danger mt-4 "style={{marginLeft:"10px"}}onClick={()=>{handleclose()}} >cancel</button>
    
  </div>

  <div class="form-group col">
    <label for="formGroupExampleInput2">Last Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="last_name" value={post.last_name} onChange={handlechange}/>
    <label for="formGroupExampleInput">Current Balance</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="curbalance" value={post.curbalance} onChange={handlechange}/>
    <label for="formGroupExampleInput">Payment Method</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="paymentT" value={post.paymentT} onChange={handlechange}/>
    <label for="formGroupExampleInput">Phone</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="mobile" value={post.mobile} onChange={handlechange}/>
    
  </div>
  
 
  
  
  
  </div>
</form>
        
        

       
        </>
    )

} 