import axios from "axios"
import useSWR from "swr";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import withAuth from "../../auth/protectedroute"
import React,{useContext,useState} from 'react'; 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import {ExpandLess,ExpandMore} from '@mui/icons-material';
import { Collapse, Link, ListItemButton } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { useRouter } from "next/router";
// import { getCustomersByCustomer } from "../services/Customers";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import CustomerDailog from "../../Components/CustomerDialog";


const  ADdCustomers=({custid})=> {
    const router = useRouter()
    const fetcher=async()=>{
        const response = await axios.get(`https://codingmart-invoice.herokuapp.com/customerbyid/${custid}`)
        return response.data
    }

  
   
  //  const handleSubmits = (e) => {
  //   e.preventDefault();
  //   const content={
     
  //      email:cmail,
  //      subject:"Customer Registration Sussessfully Done!",
  //      body:body,
       

  //       }
  //       console.log(content.email)
  //       postMail(content,cmail).then(data=>{
  //         if(data.error){
  //           setValues({...values,error:data.error})
            
  //          alert("check ur email")
  
  //         }
  //         else{
  //             alert("Successfully Sent mail")
  //           setValues({...values,
  //              email:"",
  //              body:""
  //             })
  //            console.log("error")
             
  //         }
  //         console.log(content)
  //     })

  //   }

 

  

   const [value, setValue] =useState('1');

   const [values, setValues] = useState({
    email:"",
    body:"",  
  });
  const {email,body}=values


    //   const {email,body}=values
    //   console.log(values)

    const handleChanges = (event, newValue) => {
      setValue(newValue);
    };

    const handleChange = name => event => {
      setValues({ ...values,[name]:event.target.value});
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
  //   const handlesubmit=(e)=> {
  //     e.preventDefault();
  //       // const body = "DearIts been a great experience working with you Attached with this email is a list of all transactions for the period between  If you have any questions, just drop us an email or call us"
  //   // const user = {
  //   //   body: body
  //   // };
  //   console.log("submit")
  //   axios.post(`http://localhost:4000/sendmail/kgokulakannan49@gmail.com`).then(() => {
  //     alert("mail sended");
  //   }).catch(() => {
  //     alert("Failed to send");
  //   });
  // }



  const {data,error} = useSWR("custview",fetcher)
  console.log(data)
  const handleDelete = () =>{
    axios.delete(`https://codingmart-invoice.herokuapp.com/customers/${data._id}`).
    then((data)=>{alert("Deleted Succesfully")
    router.push('/customers')
  }
    )
    .catch(console.log('Not deleted'));
  }
  //try
   const handleSubmits = (e) => {
    e.preventDefault();
    const content={
     
      subject:`Customer Created Successfully - ${data&&data.company_name}`,
       body:
       `Dear ${data&&data.company_name},
       
            Its been a great experience working with you.
       Attached with this email is a list of all transactions for the period around fewdays.
       If you have any questions, just drop us an email or call for techpiratesteam@gmail.com
        
       Regards,
       Techpirates Team
       
       `
       
       

        }
        console.log(content.email)
        axios.post(`https://codingmart-invoice.herokuapp.com/sendmail/${data&&data.customer_email}`,content).then(data=>{
          if(!data){
            //setValues({...values,error:data.error})
            
           alert("check ur email")
  
          }
          else{
              alert("Successfully Sent mail")
             
          }
          console.log(content)
      })

     }



  return (
    <>
    <div style={{marginLeft:'13rem', marginTop:'5rem'}}>
        <h2>{data&&data.company_name}</h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Comments" value="2" />
            <Tab label="mails" value="3" />
            <Tab label="Statement" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
         
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body2" gutterBottom style={{color:'#000000'}}>
                {data&&data.company_name}
                </Typography>

               
                {/* <Button styles={{zindex:"i"}} onClick={handleOpen}> <EditIcon/></Button>
                <Button styles={{Zindex:"i"}} onClick={handleDelete}> <DeleteIcon/> </Button> */}
                <Divider />
                
    <Dialog
        open={open}
        className="mainbox"
        onClose={handleClose}
        maxWidth="800px"
      >
        <DialogTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <lable>Edit Customer</lable>
            <Button className="head" onClick={handleClose}>
              X
            </Button>
            
          </div>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            {/* <CustomerDialog id={data._id}/> */}
            <CustomerDailog id ={ data && data}
            handleclose={handleClose}
            />
            
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>

                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText style={{color:'#000000'}}>{data&&data.first_name} {data&&data.last_name}</ListItemText>
                  <Button styles={{zindex:"i"}} onClick={handleOpen}><EditIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
                <Button styles={{zindex:"i"}} onClick={handleDelete}><DeleteIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
                </ListItem>
                <p style={{color:'#000000'}}>{data&&data.customer_email}</p>
                <List>
                  <ListItemButton onClick={handleClickAddress}>
                    <Typography variant="body2" gutterBottom style={{color:'#000000'}}>
                      ADDRESS
                    </Typography>
                    {openAddress ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAddress}>
                    <List>
                      <Typography variant="body2" gutterBottom>
                        <b style={{color:'#000000'}}>Billing Address</b>
                        <p>{data&&data.addre}</p>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <b style={{color:'#000000'}}>Shipping Address</b>
                        <p>{data&&data.addre}</p>
                      </Typography>
                    </List>
                  </Collapse>
                  <br />
                  <ListItemButton onClick={handleClickOtherDetails}>
                    <Typography variant="body2" gutterBottom style={{color:'#000000'}}>
                      OTHER DETAILS
                    </Typography>
                    {openOtherDetails ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openOtherDetails}>
                    <List>
                      <div style={{display:'flex'}}>
                        <div>
                          <p style={{color:'#999999'}}>Customer ID</p>
                          <p style={{color:'#999999'}}>Customer Type</p>
                          <p style={{color:'#999999'}}>Currency Code</p>
                          <p style={{color:'#999999'}}>Payment Terms</p>
                          <p style={{color:'#999999'}}>Customer Number</p>
                          <p style={{color:'#999999'}}>Portal Language</p>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          <p style={{color:'#000000'}}>{data&&data._id}</p>
                          <p style={{color:'#000000'}}>{data&&data.customer_type}</p>
                          <p style={{color:'#000000'}}>INR</p>
                          <p style={{color:'#000000'}}>{data&&data.paymentT}</p>
                          <p style={{color:'#000000'}}>{data&&data.work_phone}</p>
                          <p style={{color:'#000000'}}>English</p>
                        </div>
                      </div>
                    </List>
                  </Collapse>
                  <br />
                  <ListItemButton onClick={handleClickContactPerson}>
                    <Typography variant="body2" gutterBottom style={{color:'#000000'}}>
                      CONTACT PERSONS
                    </Typography>
                    {openContactPerson ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openContactPerson}>
                    <List>
                      <Typography variant="body2" gutterBottom>
                        <p style={{textAlign:'center',color:'#000000'}}>No contact person found.</p>
                      </Typography>
                    </List>
                  </Collapse>
                  <br />
                </List>
                <Grid xs={12}>
                  <Item style={{backgroundColor:'#e6ffe6', borderRadius:'0px', borderWidth:'1px', borderColor:'#66ff66', padding:'20px 30px 30px 30px'}}>
                    <ListItemIcon>
                      <RecentActorsOutlinedIcon style={{color:'#33cc33'}}/>
                    </ListItemIcon>
                    <Typography variant="body2" gutterBottom>
                      <p style={{color:'#000000'}}>Client Portal allows your customers to keep track of all the transactions between them and your business. Learn More</p>
                    </Typography>
                  </Item>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <div style={{display:'flex'}}>
                  <div style={{padding:'5px 20px 20px 30px'}}>
                  <Typography variant="body2" gutterBottom>
                      <p style={{fontSize:'25px',color:'#000000'}}><b>Outstanding Receivables</b></p>
                      <p style={{fontSize:'20px',color:'#e65c00'}}><b>₹{data&&data.curbalance}</b></p>
                      <p style={{color:'#3399ff'}}>View Opening Balance</p>
                    </Typography>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                  <div style={{display:'flex'}}>
                    <div>
                      <p style={{color:'#999999'}}>Unused Credits</p>
                      <p style={{color:'#999999'}}>Payment due period</p>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <p style={{color:'#000000'}}><b>₹100.00</b></p>
                      <p style={{color:'#000000'}}><b>Due on Receipt</b></p>
                    </div>
                  </div>
                  </div>
                </div>
              </Item>
              <Divider />
              <Item>
                <ImageListItem>
                    <img  style={{width:'120%', padding:'0px 50px'}}
                    src={"https://lh3.googleusercontent.com/proxy/4vvku3sGGBwdTvPSMBMSIHZDUrFSzr8fYh2NffQZnEga2JqE4FRy46j4bZdlqZtEKH5C_yf5AOOHVAW6vJs9AQ1FjDH4hBU10swv3AFRu1enSuP7txQ3bUSW1P0vIIF65GqpbZyHyg"} />
                </ImageListItem>
              </Item>
            </Grid>
          </Grid>
        </Box>

        </TabPanel>
        <TabPanel value="2">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            placeholder="Enter your comments"
            style={{ width: 400 }}
          />
          <br/>
          <Button
                      id="ember1447"
                      className="btn btn-primary ember-view"
                      type="submit">Save</Button>
        </TabPanel>
        <TabPanel value="3">
        <form onSubmit={handleSubmits}>
            
            <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
            
              <label for="exampleFormControlInput1">From</label>
              <input type="email" class="form-control col-7" id="exampleFormControlInput1" placeholder="name@example.com" value="techpiratesteam@gmail.com"/>
            </div>
            <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
              <label for="exampleFormControlInput1">Send To</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                          value={data&&data.customer_email} onChange={handleChange("customer_email")}/>
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
              <label for="exampleFormControlTextarea1">New Message</label>
              <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            

            <div style={{width:"80%", border: "1px solid grey"}}>
              <div style={{padding:'20px'}}>
              <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p><b>codingmart</b></p>
                    <p>Tamil Nadu</p>
                    <p>India</p>
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    
                  </div>
                  <div style={{textAlign:'right',fontSize:'15px'}}>
                    <table style={{width:'100%',background:'#f5f5f0',color:'#000000'}} >
                      <tr style={{textAlign:'center'}}>
                        <td><b>Statement of Accounts</b></td>
                      </tr><hr/>
                      <tr>
                        <td>01/11/2021 to 30/11/2021</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <br />
                    <br />
                    <p><b>To</b></p>
                    <p style={{color:'#0066cc'}}><b>{data&&data.company_name}</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                  <table style={{width:'16rem',fontSize:'15px'}}>
                    <tr style={{background:'#d6d6c2',color:'#000000',textAlign:'left'}}>
                      <td colspan="2"><b>Account Summary</b></td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Opening Balance</td>
                      <td style={{textAlign:'right'}}>₹ {data&&data.curbalance}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Invoiced Amount</td>
                      <td style={{textAlign:'right'}}>₹ 0.00</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Amount Received</td>
                      <td style={{textAlign:'right'}}>₹ {data&&data.curbalance}</td>
                    </tr>
                    <hr />
                    <tr>
                      <td style={{textAlign:'left'}}>Balance Due</td>
                      <td style={{textAlign:'right'}}>₹ {data&&data.curbalance}</td>
                    </tr>
                  </table>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <table style={{width:'100%'}}>
                    <tr style={{background:'#3d3d29',color:'#ffffff'}}>
                      <td>Date</td>
                      <td>Transactions</td>
                      <td>Details</td>
                      <td style={{textAlign:'right'}}>Amount</td>
                      <td style={{textAlign:'right'}}>Payments</td>
                      <td style={{textAlign:'right'}}>Balance</td>
                    </tr>
                    <tr>
                      <td>01/11/2021</td>
                      <td>**Opening Balance**</td>
                      <td>-</td>
                      <td style={{textAlign:'right'}}>0.00</td>
                      <td style={{textAlign:'right'}}>-</td>
                      <td style={{textAlign:'right'}}>00.00</td>
                    </tr>
                    <tr>
                      <td>12/11/2021</td>
                      <td>Payment Received</td>
                      <td>₹{data&&data.curbalance} excess payments</td>
                      <td style={{textAlign:'right'}}>-</td>
                      <td style={{textAlign:'right'}}>₹{data&&data.curbalance}</td>
                      <td style={{textAlign:'right'}}>₹{data&&data.curbalance}</td>
                    </tr>
                  </table>
                </div>
                <hr />
                <div style={{display:'flex',textAlign:'right'}}>
                  <div style={{paddingLeft:'40rem'}}>
                    <p><b>Balance Due</b></p>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <p><b>₹ {data&&data.curbalance}</b></p>
                  </div>
                </div>
                <br /><br />
              </div>
            </div>

          </Grid>
        </Box>   
            </div>

            
            
            <div style={{padding:"10px" ,textAlign:"center"}} >
            <Button variant="contained" type="submit">Send</Button>
  
            </div>
            
          </form>
  
        </TabPanel>
        <TabPanel value="4">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            

            <div style={{width:"80%", border: "1px solid grey"}}>
              <div style={{padding:'20px'}}>
              <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p><b>codingmart</b></p>
                    <p>Tamil Nadu</p>
                    <p>India</p>
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    
                  </div>
                  <div style={{textAlign:'right',fontSize:'15px'}}>
                    <table style={{width:'100%',background:'#f5f5f0',color:'#000000'}} >
                      <tr style={{textAlign:'center'}}>
                        <td><b>Statement of Accounts</b></td>
                      </tr><hr/>
                      <tr>
                        <td>01/11/2021 to 30/11/2021</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <br />
                    <br />
                    <p><b>To</b></p>
                    <p style={{color:'#0066cc'}}><b>{data&&data.company_name}</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                  <table style={{width:'16rem',fontSize:'15px'}}>
                    <tr style={{background:'#d6d6c2',color:'#000000',textAlign:'left'}}>
                      <td colspan="2"><b>Account Summary</b></td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Opening Balance</td>
                      <td style={{textAlign:'right'}}>₹ {data&&data.curbalance}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Invoiced Amount</td>
                      <td style={{textAlign:'right'}}>₹ 0.00</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Amount Received</td>
                      <td style={{textAlign:'right'}}>₹ {data&&data.curbalance}</td>
                    </tr>
                    <hr />
                    <tr>
                      <td style={{textAlign:'left'}}>Balance Due</td>
                      <td style={{textAlign:'right'}}>₹ {data&&data.curbalance}</td>
                    </tr>
                  </table>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <table style={{width:'100%'}}>
                    <tr style={{background:'#3d3d29',color:'#ffffff'}}>
                      <td>Date</td>
                      <td>Transactions</td>
                      <td>Details</td>
                      <td style={{textAlign:'right'}}>Amount</td>
                      <td style={{textAlign:'right'}}>Payments</td>
                      <td style={{textAlign:'right'}}>Balance</td>
                    </tr>
                    <tr>
                      <td>01/11/2021</td>
                      <td>**Opening Balance**</td>
                      <td>-</td>
                      <td style={{textAlign:'right'}}>0.00</td>
                      <td style={{textAlign:'right'}}>-</td>
                      <td style={{textAlign:'right'}}>00.00</td>
                    </tr>
                    <tr>
                      <td>12/11/2021</td>
                      <td>Payment Received</td>
                      <td>₹{data&&data.curbalance} excess payments</td>
                      <td style={{textAlign:'right'}}>-</td>
                      <td style={{textAlign:'right'}}>₹{data&&data.curbalance}</td>
                      <td style={{textAlign:'right'}}>₹{data&&data.curbalance}</td>
                    </tr>
                  </table>
                </div>
                <hr />
                <div style={{display:'flex',textAlign:'right'}}>
                  <div style={{paddingLeft:'40rem'}}>
                    <p><b>Balance Due</b></p>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <p><b>₹ {data&&data.curbalance}</b></p>
                  </div>
                </div>
                <br /><br />
              </div>
            </div>

          </Grid>
        </Box>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
      
    </>
  );
}


export default ADdCustomers;

export const getServerSideProps = async (context) => {
    return { props: { custid: context.params.id } };
  };