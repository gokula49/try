import axios from "axios";
import useSWR from "swr";
import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { useState,useEffect } from "react";
import Head from 'next/head'
import { handleBreakpoints } from "@mui/system";
export default function ItemDialog({id,handleclose}){
    const[post,setpost]=useState({
        type:id.type,
        unit:id.unit,
        user_id:id.user_id,
        name:id.name,
        selling_price:id.selling_price,
        selling_description:id.selling_description,
        // pan:id.pan,
        // mobile:id.mobile,
        // paymentT:id.paymentT
        
    })
    const handlechange =(event)=>{
        const {name,value}=event.target
        setpost({...post,[name]:value})
    }
    const clickMe =(e)=>{
        e.preventDefault();
        axios.put(`https://codingmart-invoice.herokuapp.com/items/${id._id}`,post)
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
    <label for="formGroupExampleInput" >Item Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="name" value={post.name} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Item Type</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="type" value={post.type} onChange={handlechange}/>
    <label for="formGroupExampleInput" >Unit</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="unit" value={post.unit} onChange={handlechange}/>
    {/* <label for="formGroupExampleInput">Pan</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""  name="pan" value={post.pan} onChange={handlechange}/> */}
    <button type="button"class="btn btn-outline-success mt-4 "onClick={clickMe}>update</button>
    <button type="button" className="btn btn-outline-danger mt-4 "style={{marginLeft:"10px"}}onClick={()=>{handleclose()}} >cancel</button>
    
  </div>

  <div class="form-group col">
    <label for="formGroupExampleInput2">Selling Price</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="selling_price" value={post.selling_price} onChange={handlechange}/>
    <label for="formGroupExampleInput">Description</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="selling_description" value={post.selling_description} onChange={handlechange}/>
    {/* <label for="formGroupExampleInput">Payment Method</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="paymentT" value={post.paymentT} onChange={handlechange}/>
    <label for="formGroupExampleInput">Phone</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="mobile" value={post.mobile} onChange={handlechange}/> */}
    
  </div>
  
 
  
  
  
  </div>
</form>
        
        

       
        </>
    )

} 