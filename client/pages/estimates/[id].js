
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
// import { getCustomersByCustomer } from "../services/Customers";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import {
  
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import EstimateDialog from "../../Components/EstimateDialog";


const ADdCustomers=({custid})=> {
  const router = useRouter()
    const fetcher=async()=>{
        const response = await axios.get(`https://codingmart-invoice.herokuapp.com/estimatesbyid/${custid}`)
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
    const {data,error} = useSWR("custview",fetcher)
    console.log(data)
    const handleDelete = () =>{
      axios.delete(`https://codingmart-invoice.herokuapp.com/estimates/${data._id}`).
      then((data)=>{alert("Deleted Succesfully")
      router.push('/estimates')
    }
      )
      .catch(console.log('Not deleted'));
    }
   
  return (
    <>
    <div style={{marginLeft:'13rem', marginTop:'5rem'}}>
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
            <EstimateDialog id ={ data && data}
            handleclose={handleClose}
            />
            
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
        {/* <h2>{"company_name"}</h2> */}
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            {/* <Tab label="Comments" value="2" />
            <Tab label="mails" value="3" />
            <Tab label="Statement" value="4" /> */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <div style={{width:'90%', textAlign:'right'}}>
            <Button styles={{zindex:"i"}} onClick={handleOpen}><EditIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
            <Button styles={{zindex:"i"}} onClick={handleDelete}><DeleteIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
          </div>
          <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <table style={{width:"90%", border: "1px solid grey",borderCollapse: "collapse"}}>
                <tr style={{border: "1px solid grey",backgroundColor:"#97a9ac"}}>
                <td colspan="4" style={{border: "1px solid grey",borderCollapse: "collapse",padding:"10px"}} >
                <b>Codingmart</b> <br/>
                Tamil nadu <br/> 
                India</td>
                <th><h2 style={{padding:"10px",textAlign:"right"}}>ESTIMATE</h2></th>
              </tr>

                <tr style={{border: "1px solid grey",borderCollapse: "collapse",padding:"15px"}} >
                <td style={{padding:"15px"}}>
                  #             <br/>
                  Estimate Date <br/>
                  Reference#    
                </td>
                  <td style={{padding:"15px"}}>
                  :  EST-000001<br/>
                  :  {data&&data.estimate_date}<br/>
                  :  {data&&data.reference}
                  </td>
                  <td colSpan='3' style={{border: "1px solid grey",borderCollapse: "collapse"}}></td>
                </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse" ,backgroundColor:"#97a9ac"}} >
                <td colspan="5"style={{padding:"10px"}}><b>Bill to</b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse",color:"#5c6f80"}} >
                <td colspan="5" style={{padding:"10px"}}><b>{data&&data.customer_name}</b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse",backgroundColor:"#97a9ac"}} >
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b>#</b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b>Item&Description</b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px",textAlign:"right"}}><b> Qty </b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px",textAlign:"right"}}><b> Rate </b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px",textAlign:"right"}}><b> Amount </b></td>
              </tr>
              {data && data.items.map((option,index)=>{
                return(
              <tr style={{border: "1px solid grey",borderCollapse: "collapse"}}> 
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>{index+1}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>{option.name}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px",textAlign:"right"}}>{option.quantity}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px",textAlign:"right"}}>{option.amount}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px",textAlign:"right"}}>{option.amount}</td>
              </tr>
              )})}
              <tr style={{border: "1px solid grey",borderCollapse: "collapse"}}>
                <td rowspan="2" style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>
                  <br/><br/>
                <br/>
                Looking forward for your business.</td>
                <td></td>
                <td></td>
                <td style={{textAlign:"left"}}>
                  Sub Total<br/>
                  Total
                </td>
                <td style={{textAlign:"right"}}>
                  {data&&data.items[0].amount}<br/>
                  ₹{data&&data.items[0].amount}
                </td>
              </tr>
              <tr>
                <td style={{paddingTop:"70px",textAlign: "center"}}><b>&nbsp;Authorized Signature</b></td>
              </tr>
            </table>
          </Grid>
        </Box>

        </TabPanel>
        {/* <TabPanel value="2">
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
          <form onSubmit={""}>
            
          
          
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
                    <p style={{color:'#0066cc'}}><b>{data&&data.first_name} {data&&data.last_name}</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                  <table style={{width:'16rem',fontSize:'15px'}}>
                    <tr style={{background:'#d6d6c2',color:'#000000',textAlign:'left'}}>
                      <td colspan="2"><b>Account Summary</b></td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Opening Balance</td>
                      <td style={{textAlign:'right'}}>₹ 0.00</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Invoiced Amount</td>
                      <td style={{textAlign:'right'}}>₹ 0.00</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'left'}}>Amount Received</td>
                      <td style={{textAlign:'right'}}>₹ 0.00</td>
                    </tr>
                    <hr />
                    <tr>
                      <td style={{textAlign:'left'}}>Balance Due</td>
                      <td style={{textAlign:'right'}}>₹ 0.00</td>
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
                      <td>***Opening Balance***</td>
                      <td>-</td>
                      <td style={{textAlign:'right'}}>0.00</td>
                      <td style={{textAlign:'right'}}>-</td>
                      <td style={{textAlign:'right'}}>00.00</td>
                    </tr>
                    <tr>
                      <td>12/11/2021</td>
                      <td>Payment Received</td>
                      <td>₹200.00 excess payments</td>
                      <td style={{textAlign:'right'}}>-</td>
                      <td style={{textAlign:'right'}}>₹200.00</td>
                      <td style={{textAlign:'right'}}>₹200.00</td>
                    </tr>
                  </table>
                </div>
                <hr />
                <div style={{display:'flex',textAlign:'right'}}>
                  <div style={{paddingLeft:'40rem'}}>
                    <p><b>Balance Due</b></p>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <p><b>₹ 0.00</b></p>
                  </div>
                </div>
                <br /><br />
              </div>
            </div>

          </Grid>
        </Box>
        </TabPanel> */}
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
