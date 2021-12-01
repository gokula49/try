import * as React from "react";
import { Link } from "@mui/material";
import {useState} from "react";
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function AccountEdit(){

//   const [value, setValue] = useState('1');
//   const [values, setValues] = useState({
    
//     project_name:"",
//     description:"",
//     customer_name:"",
//     billing_method:"",
//   });

//   const {project_name, description,customer_name,billing_method}=values
//   console.log(values)

//   const handleChange = name => event => {
//     setValues({ ...values,[name]:event.target.value});
//   };
//   const handleChanges = (event, newValue) => {
//     setValue(newValue);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setValues({...values,isclick:true})
//     const timesheet={
        
//     project_name:project_name,
//     description:description,
//     customer_name:customer_name,
//     billing_method:billing_method,
   
//           }
//         console.log(timesheet)
//         postParRec(timesheet).then((data)=>{
//         if(data.error){
//           console.log("error")
//         }
//         else{
//           alert("Saved Succesfully")
//         }
//       }
//         )

//       }




    return(



        <div>
             <div className="column content-column" style={{ overflowY:"scroll", marginLeft: "-47px", marginTop:"8px", background:"#d9d9d9"}}>
                 <div style={{ width:"100%",padding:"40px 60px" }}>
                    <p style={{fontSize:'25px'}}>Profile</p>
                     <div style={{width:"100%"}}>
                     <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius:'6px',
                            padding:'40px',
                        }}
                        >
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            
                            <div>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccountCircleIcon style={{fontSize:'60px',color:'#d6d6c2'}}/>
                                    </ListItemIcon>&nbsp;
                                    <ListItemText primary={"name"} secondary={"mail_id"} />
                                </ListItem>
                            </div>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <div>
                                    <ListItemText primary={"First Name *"} />
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <ListItemText primary={"Last Name"} />   
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <div>
                                    <ListItemText primary={"Nick Name"} />  
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <ListItemText primary={"Gender"} />  
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <div>
                                    <ListItemText primary={"Country/Region"} />      
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <ListItemText primary={"State"} />
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <div>
                                    <ListItemText primary={"Language"} />
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <ListItemText primary={"Time zone"} />
                                    <div>
                                    <input
                                        style={{borderRadius:'6px'}}
                                        className="ember-text-field ember-view form-control"
                                        placeholder=""
                                        type="text"      
                                    />
                                    </div>
                                </div>
                            </ListItem>
                            
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <div style={{alignItems:'center'}}>
                                <ListItem>
                                    <Button href="" variant="contained" style={{background:'#66ffb3',textTransform:'none',fontSize:'18px',padding:'6px 40px'}}>Save</Button>&nbsp;&nbsp;&nbsp;
                                    <Button href="/account" variant="contained" style={{background:'#d9d9d9',textTransform:'none',fontSize:'18px',padding:'6px 40px',color:'#000000'}}>Cancel</Button>
                                </ListItem>
                            </div>
                        </Box>
                    </Box>
                    <br />
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius:'6px',
                            padding:'40px',
                        }}
                        >
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"My Email Addresses"} secondary={"View and manage all of the email addresses associated with your account."} />
                            </ListItem>
                            
                        </Box>
                        <hr/ >
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem style={{width:'60px',height:'60px', background:'#ff3399',borderRadius:'50%'}}>
                                <ListItemIcon>
                                    <MailOutlineIcon style={{fontSize:'30px',color:'#ffffff'}}/>
                                </ListItemIcon>&nbsp;
                                <ListItemText primary={"mail_id"} />
                            </ListItem>            
                        </Box>
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            }}
                        >
                            <ListItem style={{justifyContent:'center'}}>
                                <Button variant="text" style={{textTransform:'none'}}><b>+ Add Email Address</b></Button>
                            </ListItem>            
                        </Box>
                    </Box>
                    <br />
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius:'6px',
                            padding:'40px',
                        }}
                        >
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"My Mobile Numbers"} secondary={"View and manage all of the mobile numbers associated with your account."} />
                            </ListItem>
                            
                        </Box>
                        <hr/ >
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem style={{width:'60px',height:'60px', background:'#ffcc00',borderRadius:'50%'}}>
                                <ListItemIcon>
                                    <PhoneIcon style={{fontSize:'30px',color:'#ffffff'}}/>
                                </ListItemIcon>&nbsp;
                                <ListItemText primary={"phone_no"} />
                            </ListItem>            
                        </Box>
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            }}
                        >
                            <ListItem style={{justifyContent:'center'}}>
                                <Button variant="text" style={{textTransform:'none'}}><b>+ Add Mobile Number</b></Button>
                            </ListItem>            
                        </Box>
                    </Box>
                    </div>
                 
                 
                 </div>
                 
             </div>
        </div>
    )
};