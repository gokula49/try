import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faChartArea,
  faCodeBranch,
  faDatabase,
  faDollarSign,
  faFileInvoice,
  faMale,
  faMeteor,
  faPersonBooth,
  faTruck,
  faUser,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {
  Button,
  Link
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";

import { color } from "@mui/system";
          

 
function Sidebar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav((c) => !c);
  };
  return (
    <div className={styles.container}>
      <div
        className={
          nav ? styles.sidebar : `${styles.sidebar} ${styles.unactive}`
        }
      >
        <ul>
          {/* <li>
            <Link href="/home/dashboard">
              <a>
                <FontAwesomeIcon className={styles.icon} icon={faDatabase} />
                DashBoard
              </a>
            </Link>
          </li> */}
          <List>
          <ListItem disablePadding
           component={Link}
           href="/home/dashboard" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faDatabase} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding
           component={Link}
           href="/customers" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faUser} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Customers" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding
           component={Link}
           href="/items" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Items" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <br/>
         
          <ListItem disablePadding
           component={Link}
           href="/estimates" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faChartArea} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Estimates" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding
           component={Link}
           href="/deliverychallans" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faTruck} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Delivery Challans" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding
           component={Link}
           href="/invoices" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faFileInvoice} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Invoices" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding
           component={Link}
           href="/paymentrecived" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faDollarSign} />
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Payments Received" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <br/>
          <ListItem disablePadding
           component={Link}
           href="/expense" className={styles.highlight}
           style={{width:'135%',marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
            <FontAwesomeIcon className={styles.icon} icon={faHandHoldingUsd} />
              
              </ListItemIcon>
              <ListItemText primary="Expenses" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem>
          <br/>
          {/* style={{marginLeft:"-50px",marginTop:"-15px"}} */}
          {/* <ListItem disablePadding
           component={Link}
           href="/timesheet"
           style={{marginLeft:"-50px",marginTop:"-15px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                
              </ListItemIcon>
              <ListItemText primary="Timesheet" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem> */}
          {/* <ListItem disablePadding
           component={Link}
           href="#"
           style={{marginLeft:"-50px"}}>
            <ListItemButton>
              <ListItemIcon>
              <FontAwesomeIcon className={styles.icon} icon={faCodeBranch} />
               
              </ListItemIcon>
              <ListItemText primary="Reports" style={{color:"white"}}/>
            </ListItemButton>
          </ListItem> */}
         
        </List>
         
         
          <br />
         <br />
         
          <br />
         
         </ul>
          <li className={styles.icon1}>
            <a onClick={() => handleNav()}>&rsaquo;</a>
          </li>
         
        
      </div>
    </div>
  );
}

export default Sidebar;