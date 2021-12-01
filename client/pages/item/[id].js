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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import {
  
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import ItemDialog from "../../Components/ItemDialog";

const ADdCustomers=({itmid})=> {
    const router = useRouter()
    const fetcher=async()=>{
        const response = await axios.get(`https://codingmart-invoice.herokuapp.com/itemsbyid/${itmid}`)
        return response.data
    }

   const {data,error} = useSWR("itmview",fetcher)
   console.log(data)
   

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

    const handleDelete = () =>{
      axios.delete(`https://codingmart-invoice.herokuapp.com/items/${data._id}`).
      then((data)=>{alert("Deleted Succesfully")
      router.push('/items')
    }
      )
      .catch(console.log('Not deleted'));
    }

   
  return (
    
    <>
    {/* <h1>{data&&data._id}</h1>
    <h1>{data&&data._id}</h1>
    <h1>{data&&data._id}</h1>
    <h1>{data&&data._id}</h1> */}
    <div style={{marginLeft:'280px', marginTop:'80px'}}>
    <h2>{data&&data.name}</h2>
        <Box sx={{ width: '100%', typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChanges} aria-label="lab API tabs example">
        <Tab label="Overview" value="1" />
        {/* <Tab label="Transactions" value="2" />
        <Tab label="History" value="3" /> */}
      </TabList>
    </Box>
    <TabPanel value="1">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Item style={{padding:'20px 250px 20px 30px'}}>

                  <Button styles={{zindex:"i"}} onClick={handleOpen}><EditIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
                  <Button styles={{zindex:"i"}} onClick={handleDelete}><DeleteIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
                  <br/>
                <List>
                <Dialog
        open={open}
        className="mainbox"
        onClose={handleClose}
        maxWidth="800px"
      >
        <DialogTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <lable>Edit Item</lable>
            <Button className="head" onClick={handleClose}>
              X
            </Button>
            
          </div>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            {/* <CustomerDialog id={data._id}/> */}
            <ItemDialog id ={ data && data}
            handleclose={handleClose}
            />
            
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
                  <div style={{padding:'10px 50px'}}>
                    <div style={{display:'flex'}}>
                      <div>
                        <p style={{color:'#999999'}}>Item Type</p><br/>
                        <p style={{color:'#999999'}}>Unit</p><br/>
                        <p style={{color:'#999999'}}>Created Source</p>
                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <p style={{color:'#000000'}}>{data&&data.type}</p><br/>
                        <p style={{color:'#000000'}}>{data&&data.unit}</p><br/>
                        <p style={{color:'#000000'}}>User</p>
                      </div>
                    </div>
                    <br/><br/>
                    <div>
                      <Typography variant="body2" gutterBottom>
                        <b style={{color:'#000000'}}>Sales Information</b>
                      </Typography>
                      <br/>
                      <div style={{display:'flex'}}>
                        <div>
                          <p style={{color:'#999999'}}>Selling Price</p><br/>
                          <p style={{color:'#999999'}}>Description</p>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          <p style={{color:'#000000'}}>₹{data&&data.selling_price}</p><br/>
                          <p style={{color:'#000000'}}>{data&&data.selling_description}</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </List>
              </Item>
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
<button
            id="ember1447"
            className="btn btn-primary ember-view"
            type="submit">Save</button>
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
                    value={values.email} onChange={handleChange("email")}/>
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
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"  onChange={handleChange("body")}
                    value={values.body} required>
      hello
        </textarea>
      </div>
      
      <div style={{padding:"10px" ,textAlign:"center"}} >
      <button type="submit" class="btn btn-primary btn-lg">Send</button>

      </div>
      
    </form>
    </TabPanel> */}
  </TabContext>
</Box>
</div>
     </>
  );
}
export default ADdCustomers

export const getServerSideProps = async (context) => {
    return { props: { itmid: context.params.id } };
  };
