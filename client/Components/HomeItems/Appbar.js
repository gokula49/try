import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ArrowDropDown } from "@mui/icons-material";
import Zohologo from "../../public/Images/zoho-logo.png";
import Image from "next/image";
import styles from "./Appbar.module.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {isAutheticated, signout} from '../../auth/auth';
import Router from "next/router";

import axios from "axios";
import useSWR from "swr";



//try

// import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const {user} = isAutheticated()
const fetcher = async()=>{
    const response = await axios.get(`https://codingmart-invoice.herokuapp.com/organ/${user && user._id}`);
    console.log(user._id)
    return response.data;
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: "60px",
    backgroundColor: "#f1f1f1",
    color: "black",
  },
  searchdrop: {
    cursor: "pointer",
    zIndex: 99,
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "white",
  border: "1px solid white",
  "&:hover": {
    border: "1px solid blue",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: "35px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  zIndex: 0,
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function signsout (){
  signout(()=>{
   
    Router.replace("/").then((result) => Router.reload());

  })
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Appbar(props) {



  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => {
    setOpens(true);
  };
  const handleCloses = () => {
    setOpens(false);
  };


  const { children, onClose, ...other } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const classes = useStyles();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleSearchdrop = () => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE2(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      
    </Menu>
  );
  // const {user} = isAutheticated();
  const {data,error} = useSWR('sueeere',fetcher)
  console.log(data)

  return (
    <div className={styles.logo} style={{zIndex:"99", position:"fixed"}}>
      <div className={styles.main}>
        <div className={styles.image}>
          <Image src={Zohologo} alt="Logo" style={{width:"100%"}} /> <h4 style={{alignItems:"center",marginTop:"16px",marginLeft:"15px"}}> Invoice</h4>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={classes.root}
          position="static"
          elevation={0}
          color="inherit"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className={styles.header_dropdown_list}
            >

              <img src="https://img.icons8.com/ios-glyphs/30/000000/plus.png" className={styles.arrow} />
              <div className={styles.dropdown_list}>
                <a href="/customers">Customers</a>
                <a href="/items">Items</a>
                <a href="/estimates">Estimates</a>
                <a href="/deliverychallans">Delivery Challan</a>
                <a href="/invoices">Invoice</a>
                <a href="/paymentrecived">Payments</a>
                <a href="/expense">Expenses</a>
              </div>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <img src="https://img.icons8.com/material-two-tone/24/000000/time-machine.png" />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
                <a
                  onClick={() => handleClickOpen()}
                  className={classes.searchdrop}
                >
                  <ArrowDropDown />
                </a>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorE2}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="small" aria-label="coding" color="inherit">
                {data && data[0].org_name} <ArrowDropDown />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <img src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png" />
              </IconButton>
              {/* <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/24/000000/external-gear-setting-flatart-icons-outline-flatarticons-1.png" />
              </IconButton> */}
              {/* <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <img src="https://img.icons8.com/material-outlined/24/000000/help.png" />
              </IconButton> */}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
              >
                {/* <AccountCircle src={user} /> */}
                {user && <img style={{borderRadius:'50%',width:"50px",height:"50px"}} src={user.picture}/>} 
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      <BootstrapDialog
        onClose={handleCloses}
        aria-labelledby="customized-dialog-title"
        open={opens}
        style={{marginLeft:"65rem"}}
      >
        <Appbar id="customized-dialog-title" onClose={handleCloses}>
          Modal title
        </Appbar>

        <DialogContent dividers  style={{backgroundColor:"#ffffff"}}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <lable>Profile</lable>
            <Button className="head" onClick={handleCloses}>
              X
            </Button>
            
          </div>
          <Grid container justifyContent="center">
            {user && <img style={{borderRadius:'50%',width:"80px",height:"80px"}} src={user.picture}/>}
          </Grid>
          <br />         
          <Typography variant="body2" color="text.secondary" align="center"> User Name : {user && user.name}</Typography>
          <Typography variant="body2" color="text.secondary" align="center"> User Id : {user && user._id.slice(0, 5)}</Typography> 
          <Typography variant="body2" color="text.secondary" align="center"> User Email : {user && user.email}</Typography>
         <br/>
         <br/>
         <Grid container justifyContent="center">
          <Link  href="/account" underline="none"  color="primary" style={{ alignItems: "center",margin:"auto"}}>
          My Account
           </Link>
           <span>|</span>
          <Link onClick={signsout} underline="none"  color="#ff5722" style={{ alignItems: "center",margin:"auto"}}>
          Sign Out
          </Link>
         </Grid>
      <br/> <br/>
      <Typography variant="body2" color="text.secondary" align="center" > My Orangisations</Typography>

      <List component="nav" aria-label="secondary mailbox folder"  >
        <ListItemButton >
          <ListItemText primary="Oraganisation Name:" secondary={data && data[0].org_name}/>
        </ListItemButton>
        {/* <ListItemButton >
          <ListItemText primary="Location:" secondary={data && data.business_location}/>
        </ListItemButton> */}

      </List>
         
        </DialogContent>
        <DialogActions  style={{backgroundColor:"#ff3333"}}>
      
          <Button autoFocus onClick={handleCloses} style={{ alignItems: "center",width: "100%",margin:"auto",color:"#ffffff", height:"20px"}} >
            Close
          </Button>
        
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
