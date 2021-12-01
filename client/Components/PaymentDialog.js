import axios from "axios";
import useSWR from "swr";
import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { useState,useEffect } from "react";
import Head from 'next/head'
import { handleBreakpoints } from "@mui/system";
export default function PaymentDialog({id,handleclose}){
    const[post,setpost]=useState({
      user_id:id.user_id,
      customer_name:id.customer_name,
      amount_received:id. amount_received,
     
        
    })
    const handlechange =(event)=>{
        const {name,value}=event.target
        setpost({...post,[name]:value})
    }
    const clickMe =(e)=>{
        e.preventDefault();
        axios.put(`https://codingmart-invoice.herokuapp.com/estimates/${id._id}`,post)
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
    <label for="formGroupExampleInput" >Estimate Date</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="estimate_date" value={post.estimate_date} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Expiry Date</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="expiry_date" value={post.expiry_date} onChange={handlechange}/>
    
    <button type="button"className="btn btn-outline-success mt-4 "onClick={clickMe}>update</button>
    <button type="button" className="btn btn-outline-danger mt-4 "style={{marginLeft:"10px"}}onClick={()=>{handleclose()}} >cancel</button>
    
  </div>

  <div class="form-group col">
    {/* <label for="formGroupExampleInput2">Item Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="items_name" value={post.items_name} onChange={handlechange}/>
    <label for="formGroupExampleInput">Item Quantity</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="items_quantity" value={post.items_quantity} onChange={handlechange}/>
    <label for="formGroupExampleInput">Item Amount</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="items_amount" value={post.items_amount} onChange={handlechange}/> */}
    <label for="formGroupExampleInput">Customer Notes</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="customer_notes" value={post.customer_notes} onChange={handlechange}/>
    <label for="formGroupExampleInput">Reference</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="reference" value={post.reference} onChange={handlechange}/>
  </div>
  
 
  
  
  
  </div>
</form>
        
        

       
        </>
    )

} 