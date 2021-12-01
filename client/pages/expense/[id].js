import axios from "axios"
import useSWR from "swr";
import {useRouter} from "next/router";
// import withAuth from "../../auth/protectedroute"
import React,{useContext,useState} from 'react'; 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import ExpenseDialog from "../../Components/ExpenseDialog";

const ADdCustomers=({custid})=> {
  const router = useRouter();

    const fetcher=async()=>{
        const response = await axios.get(`https://codingmart-invoice.herokuapp.com/expense/${custid}`)
        return response.data
    }

   
   const [open,setOpen]= useState(false)
    const handleOpen =(e)=>{
      setOpen(true)

    }
    const handleClose = () => {
      setOpen(false);
    };
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

    const {data,error} = useSWR("custview",fetcher)
    console.log(data)
    const handleDelete = () =>{
      axios.delete(`https://codingmart-invoice.herokuapp.com/expense/${data._id}`).
      then((data)=>{alert("Deleted Succesfully")
      router.push('/expense')
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
            <ExpenseDialog id ={ data && data}
            handleclose={handleClose}
            />
            
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
    
    <div style={{marginLeft:'280px', marginTop:'80px'}}>
        <h2>{data && data.customer_name}</h2>
        <br/>
        <Button styles={{zindex:"i"}} onClick={handleOpen}><EditIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
                <Button styles={{zindex:"i"}} onClick={handleDelete}><DeleteIcon style={{color:'#999999',fontSize:'20px'}}/></Button>
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
                    <List>
                      <div>
                        <div>
                            <p style={{color:'#999999'}}>Expense Amount</p>
                            <p style={{color:'#999999'}}><span style={{fontSize:'20px',color:'#e65c00'}}>₹{data&&data.amount}</span> on {data&&data.date}</p>
                            <p style={{color:'#000000'}}>NON-BILLABLE</p>
                        </div>
                        <br /><br />
                        <div>
                            <p style={{color:'#000000'}}><span style={{background:'#80dfff',padding:'2px 15px'}}>{data&&data.category_name}</span></p>
                        </div>
                        <br /><br />
                        <div>
                            <p style={{color:'#999999'}}>Ref #</p>
                            <p style={{color:'#000000'}}>{data&&data.invoice}</p>
                        </div>
                        <br />
                        <div>
                            <p style={{color:'#999999'}}>Customer</p>
                            <p style={{color:'#008ae6'}}>{data&&data.customer_name}</p>
                        </div>
                        <br />
                        <div>
                            <p style={{color:'#999999'}}><b>{data&&data.notes}</b></p>
                        </div>
                        <br />
                      </div>
                    </List>
                  </Item>
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
