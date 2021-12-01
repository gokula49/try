
import axios from "axios"
import useSWR from "swr";
// import withAuth from "../../auth/protectedroute"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React,{useContext,useState} from 'react'; 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";

import { useRouter } from "next/router";
import {
  
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import PaymentDialog from "../../Components/PaymentDialog";


const ADdCustomers=({itmid})=> {
  const router = useRouter()

    const fetcher=async()=>{
        const response = await axios.get(`https://codingmart-invoice.herokuapp.com/paymentbyid/${itmid}`)
        return response.data
    }

 


   const [value, setValue] = React.useState('1');


    // const [values, setValues] = useState({
    //     email:"",
    //     body:"",  
    //   });

    //   const {email,body}=values
    //   console.log(values)

    const handleChanges = (event, newValue) => {
      setValue(newValue);
    };

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      // textAlign: 'center',
      borderRadius:'0px',
      color: theme.palette.text.secondary,
    }));
    const [open,setOpen]= useState(false)
    const handleOpen =(e)=>{
      setOpen(true)

    }
    const handleClose = () => {
      setOpen(false);
    };
    


    const [openAddress, setOpenAddress] = React.useState(false);
    const [openOtherDetails, setOpenOtherDetails] = React.useState(false);
    const [openContactPerson, setOpenContactPerson] = React.useState(false);
    const handleClickAddress = () => {
      setOpenAddress(!openAddress);
    };
    const handleClickOtherDetails = () => {
      setOpenOtherDetails(!openOtherDetails);
    };
    const handleClickContactPerson = () => {
      setOpenContactPerson(!openContactPerson);
    };
    const {data,error} = useSWR("itmview",fetcher)
    console.log(data)
    const handleDelete = () =>{
      axios.delete(`https://codingmart-invoice.herokuapp.com/payment/${data._id}`).
      then((data)=>{alert("Deleted Succesfully")
      router.push('/paymentrecived')
    }
      )
      .catch(console.log('Not deleted'));
    }

    const handlesubmits = (e) => {
      e.preventDefault();
      const content={
       
        subject:"Payment done sucessfully",
         body:
         `Dear ${data&&data.customer_name},
         
         Thank you for your payment. It was a pleasure doing business with you. We look forward to work together again!
         Regards,
         Techpirates
         codingmart`
         
         
         
  
          }
          console.log(content.email)
          axios.post(`https://codingmart-invoice.herokuapp.com/sendmail/${data&&data.email}`,content).then(data=>{
            if(!data){
              //setValues({...values,error:data.error})
              
             alert("check ur email")
    
            }
            else{
                alert("Successfully Sent mail")
             
               console.log("error")
               
            }
            console.log(content)
        })
  
       }
   
  return (
    // <>
    // <h1>{data&&data._id}</h1>
    // <h1>{data&&data._id}</h1>
    // <h1>{data&&data._id}</h1>
    // <h1>{data&&data._id}</h1>
      
    // </>
    <>
     {/* <Button styles={{zindex:"i"}} onClick={handleOpen}><EditIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
            <Button styles={{zindex:"i"}} onClick={handleDelete}><DeleteIcon style={{color:'#999999',fontSize:'20px'}}/></Button> */}
    <Dialog
        open={open}
        className="mainbox"
        onClose={handleClose}
        maxWidth="800px"
      >
        <DialogTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <lable>Edit Estimate</lable>
            <Button className="head" onClick={handleClose}>
              X
            </Button>
            
          </div>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            {/* <CustomerDialog id={data._id}/> */}
            <PaymentDialog id ={ data && data}
            handleclose={handleClose}
            />
            
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
        <div style={{marginLeft:'280px', marginTop:'80px'}}>
        <h2></h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            {/* <Tab label="Overview" value="1" />
            <Tab label="Comments" value="2" /> */}
            <Tab label="Overview" value="1" />
            <Tab label="mails" value="2" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
        <div style={{width:'80%', textAlign:'right'}}>
            {/* <Button styles={{zindex:"i"}} onClick={handleOpen}><EditIcon style={{color:'#999999',fontSize:'20px'}}/></Button> */}
            <Button styles={{zindex:"i"}} onClick={handleDelete}><DeleteIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
          </div>
          <form>
            
          {/* <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
          
            <label for="exampleFormControlInput1">From</label>
            <input type="email" class="form-control col-7" id="exampleFormControlInput1" placeholder="name@example.com" value="techpiratesteam@gmail.com"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Send To</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                        value={values.email} onChange={handleChange("email")}/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Cc</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Subject</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Account Statement from 01/11/2021 to 30/11/2021"/>
          </div> */}
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
            {/* <label for="exampleFormControlTextarea1">New Message</label> */}
            
            <div style={{width:"80%", border: "1px solid #c2c2a3"}}>
              <div style={{padding:'70px 70px'}}>
                <div>
                  <p style={{fontSize:'18px'}}><b>Codingmart</b></p>
                  <p style={{color:'#999999'}}>Tamil Nadu</p>
                  <p style={{color:'#999999'}}>India</p>
                </div>
                <hr /><br/>
                <div>
                  <p style={{fontSize:'18px',textAlign:'center'}}>PAYMENT RECEIPT</p>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <div>
                      <p style={{color:'#999999'}}>Payment Date</p>
                      <p style={{color:'#999999'}}>Reference Number</p>
                      <p style={{color:'#999999'}}>Payment Mode</p>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <p><b>{data&&data.payment_date}</b></p>
                      <p><b>{data&&data.reference}</b></p>
                      <p><b>{data&&data.payment_mode}</b></p>
                    </div>
                  </div>
                  <div style={{textAlign:'right',padding:'15px 10px',background:'#009933',justifyContent:'center'}}>
                    <p style={{textAlign:'center',color:'#ffffff'}}>Amount Received</p>
                    <p style={{fontSize:'20px',textAlign:'center',color:'#ffffff'}}><b>₹{data&&data.amount_received}</b></p>
                  </div>
                </div>
                <br /><br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <p style={{color:'#999999'}}><b>Bill To</b></p>
                    <p style={{color:'#0066cc'}}><b>{data&&data.customer_name}</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p style={{color:'#999999'}}>Authorized Signature</p>
                    <p style={{color:'#999999'}}>____________________</p>
                  </div>
                </div>
                <br /><br /><br />
                <hr />
                <div>
                  <p style={{color:'#999999'}}><b>Over payment</b></p>
                  <p>₹{data&&data.amount_received}</p>
                </div>
                <hr />
                <br />
              </div>
            </div>
            <br />
            {/* <div style={{width:"80%"}}>
              <p style={{fontSize:'18px'}}><b>More Information</b></p>
              <div style={{display:'flex'}}>
                <div>
                  <p style={{color:'#999999'}}>Deposit To</p>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                  <p>: Petty Cash</p>
                </div>
              </div>
            </div> */}
          </div>
          
          {/* <div style={{padding:"10px" ,textAlign:"center"}} >
          <button type="submit" class="btn btn-primary btn-lg">Send</button>

          </div> */}
          
        </form>
        </TabPanel>
        <TabPanel value="2">
          <form onSubmit={handlesubmits}>
            
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
          
            <label for="exampleFormControlInput1">From</label>
            <input type="email" class="form-control col-7" id="exampleFormControlInput1" placeholder="name@example.com" value="techpiratesteam@gmail.com"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Send To</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                       />
                        {/* value={cmail} onChange={handleChange("email")} */}
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Cc</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Subject</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Account Statement from 01/11/2021 to 30/11/2021"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
            {/* <label for="exampleFormControlTextarea1">New Message</label> */}
            
            <div style={{width:"80%", border: "1px solid #c2c2a3"}}>
              <div style={{padding:'70px 70px'}}>
                <div>
                  <p style={{fontSize:'18px'}}><b>Codingmart</b></p>
                  <p style={{color:'#999999'}}>Tamil Nadu</p>
                  <p style={{color:'#999999'}}>India</p>
                </div>
                <hr /><br/>
                <div>
                  <p style={{fontSize:'18px',textAlign:'center'}}>PAYMENT RECEIPT</p>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <div>
                      <p style={{color:'#999999'}}>Payment Date</p>
                      <p style={{color:'#999999'}}>Reference Number</p>
                      <p style={{color:'#999999'}}>Payment Mode</p>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <p><b>{data&&data.payment_date}</b></p>
                      <p><b>{data&&data.reference}</b></p>
                      <p><b>{data&&data.payment_mode}</b></p>
                    </div>
                  </div>
                  <div style={{textAlign:'right',padding:'15px 10px',background:'#009933',justifyContent:'center'}}>
                    <p style={{textAlign:'center',color:'#ffffff'}}>Amount Received</p>
                    <p style={{fontSize:'20px',textAlign:'center',color:'#ffffff'}}><b>₹{data&&data.amount_received}</b></p>
                  </div>
                </div>
                <br /><br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <p style={{color:'#999999'}}><b>Bill To</b></p>
                    <p style={{color:'#0066cc'}}><b>{data&&data.customer_name}</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p style={{color:'#999999'}}>Authorized Signature</p>
                    <p style={{color:'#999999'}}>____________________</p>
                  </div>
                </div>
                <br /><br /><br />
                <hr />
                <div>
                  <p style={{color:'#999999'}}><b>Over payment</b></p>
                  <p>₹{data&&data.amount_received}</p>
                </div>
                <hr />
                <br />
              </div>
            </div>
            <br />
            {/* <div style={{width:"80%"}}>
              <p style={{fontSize:'18px'}}><b>More Information</b></p>
              <div style={{display:'flex'}}>
                <div>
                  <p style={{color:'#999999'}}>Deposit To</p>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                  <p>: Petty Cash</p>
                </div>
              </div>
            </div> */}
          </div>
          
          <div style={{padding:"10px" ,textAlign:"center"}} >
          <Button type="submit" variant="contained">Send</Button>

          </div>
          
          
        </form>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
         </>
  );
}

export default ADdCustomers;


export const getServerSideProps = async (context) => {
    return { props: { itmid: context.params.id } };
  };
