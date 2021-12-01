import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { ArrowDropDown } from "@mui/icons-material";
import styles from "./Item.module.css";
import { Menu, MenuItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
  dropitem: {
    color: "black",
  },
  heading: {
    fontSize: "13px",
    textAlign: "left",
    opacity: "0.8",
    fontWeight: "bolder",
  },
  customview: {
    color: "blue",
    "&:hover": {
      color: "white",
    },
    fontSize: "18px",
  },
  menuitem: {
    fontSize: "15px",
    backgroundColor: "",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
    },
  },
}));
export default function ItemHeader() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color elevation={1} color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div style={{ cursor: "pointer", float: "left" }}>
              <Button
                className={classes.dropitem}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                All Items
                <ArrowDropDown />
              </Button>
              <Menu
                elevation={0.5}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <span className={classes.heading}>DEFAULT FILTERS</span>
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  All
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  Active
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  Inactive
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  Sales
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  Services
                </MenuItem>
                <hr />
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  <span className={classes.customview}>+ New Custom view</span>
                </MenuItem>
              </Menu>
            </div>
          </Typography>
          <div className={styles.righticons}>
            <div>
              <Button>
                <button className={styles.new}>+New</button>
              </Button>
            </div>
            <div className={styles.icondiv}>
              <Button>
                <button className={styles.iconbutton}>
                  <img
                    className={styles.icon}
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-gear-setting-flatart-icons-outline-flatarticons-4.png"
                  />
                </button>
              </Button>
            </div>
            <div className={styles.icondiv}>
              <Button
                id="basic-button2"
                aria-controls="basic-menu2"
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
              >
                <button className={styles.iconbutton}>
                  <img
                    className={styles.icon}
                    src="https://img.icons8.com/material-outlined/64/000000/menu.png"
                  />
                </button>
              </Button>
              <Menu
                elevation={0.5}
                id="basic-menu2"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                  "aria-labelledby": "basic-button2",
                }}
              >
                <span className={classes.heading}>SORT BY</span>
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  Name
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  Rate
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  SKU
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  Last Modified Time
                </MenuItem>
                <hr />
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  <img src="https://img.icons8.com/ios/20/000000/download--v1.png" />{" "}
                  Import Items
                </MenuItem>
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  <img src="https://img.icons8.com/ios/20/000000/upload--v1.png" />{" "}
                  Export Items
                </MenuItem>
                <hr />
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  <img src="https://img.icons8.com/ios/20/000000/upload--v1.png" />{" "}
                  Export Current View
                </MenuItem>
                <hr />
                <MenuItem className={classes.menuitem} onClick={handleClose2}>
                  <img src="https://img.icons8.com/ios-glyphs/20/000000/refresh--v1.png" />{" "}
                  Refresh List
                </MenuItem>
              </Menu>
            </div>
            <div className={styles.tips}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#3498db">
                    <path d="M86.85664,21.23461c-24.43948,0 -44.32359,19.88411 -44.32359,44.32359c0,16.28668 8.81479,31.07113 23.08563,38.87133l-0.7861,6.4164c-0.0086,0.0688 -0.01344,0.13776 -0.01344,0.20828c0,4.29888 2.34563,8.1749 5.99648,10.2461c-1.49844,1.26239 -2.47586,3.16146 -2.47586,5.31453c0,2.67016 1.48833,4.96411 3.6382,6.10398c-0.67163,0.98005 -1.06492,2.16128 -1.06492,3.43664v1.55875c0,3.24488 2.55192,5.88219 5.75125,6.06703c0.74527,3.96657 5.42486,6.93375 11.27742,6.93375c3.58494,0 10.77252,-1.72195 11.52602,-6.92703c3.24499,-0.1374 5.84531,-2.79703 5.84531,-6.07375v-1.55875c0,-3.36432 -2.73631,-6.10063 -6.10063,-6.10063h-22.19875c-0.01149,0 -0.02212,0.0033 -0.0336,0.00336h-2.00219c-1.763,0 -3.19813,-1.54284 -3.19813,-3.44c0,-1.89716 1.43512,-3.44 3.19813,-3.44h24.64102c1.763,0 3.19813,1.54284 3.19813,3.44c0,0.98212 -0.00207,0.98008 -0.70211,1.94844c-0.55728,0.76884 -0.38251,1.84467 0.38633,2.40195c0.76884,0.55556 1.84131,0.38587 2.39859,-0.38297c1.20228,-1.6598 1.35719,-1.99106 1.35719,-3.97078c0,-3.79432 -2.97625,-6.88 -6.63813,-6.88h-24.64102c-0.03915,0 -0.07523,0.01273 -0.11422,0.01344c-0.20144,-0.34618 -0.50556,-0.63347 -0.91375,-0.77266c-3.37292,-1.14724 -5.6495,-4.28258 -5.69078,-7.82062l0.91711,-7.48469c0.08944,-0.71552 -0.27891,-1.41164 -0.92047,-1.74016c-13.7428,-7.04168 -22.28273,-20.97967 -22.28273,-36.37195c0,-22.54232 18.34127,-40.88359 40.88359,-40.88359c22.93964,0 41.60586,18.37398 41.60586,40.95414c0,14.89176 -9.03172,29.14269 -23.005,36.30477c-0.64156,0.32852 -1.00991,1.02292 -0.92047,1.74016l0.91711,7.48469c-0.02752,2.20676 -0.91009,4.27675 -2.49938,5.84195c-0.67768,0.66736 -0.68416,1.75787 -0.0168,2.43555c0.66736,0.67596 1.75451,0.68416 2.43219,0.0168c2.27212,-2.24116 3.52398,-5.22168 3.52398,-8.39508c0,-0.0688 -0.00484,-0.14112 -0.01344,-0.21164l-0.78609,-6.4164c14.50304,-7.91372 23.80789,-23.01462 23.80789,-38.80078c0,-24.47904 -20.20906,-44.39414 -45.04586,-44.39414zM88.97305,33.30484c-0.47472,0 -0.86,0.38528 -0.86,0.86c0,0.47472 0.38528,0.86 0.86,0.86c1.69592,0 3.40106,0.14136 5.06258,0.41656c9.62512,1.59616 18.00375,7.76849 22.41039,16.51469c0.15136,0.29928 0.45454,0.47367 0.7693,0.47367c0.13072,0 0.26421,-0.03042 0.38633,-0.09406c0.42484,-0.21328 0.59625,-0.72743 0.38297,-1.15227c-4.6526,-9.23468 -13.5016,-15.75463 -23.6668,-17.43851c-1.7544,-0.29068 -3.55425,-0.44008 -5.34477,-0.44008zM119.45602,56.17547c-0.11072,-0.01325 -0.22578,-0.00666 -0.3393,0.02687c-0.45752,0.13244 -0.72197,0.6074 -0.59125,1.06492c0.78948,2.75028 1.19258,5.60954 1.19258,8.50258c0,0.47472 0.38528,0.86 0.86,0.86c0.47644,0 0.86,-0.38184 0.86,-0.86c0,-3.053 -0.42557,-6.07625 -1.25977,-8.97961c-0.09804,-0.34185 -0.39009,-0.57502 -0.72227,-0.61477zM97.11617,74.23547c-0.49794,-0.02795 -1.02883,0.07359 -1.56547,0.30235c-1.44136,0.61576 -2.60991,2.02148 -2.83867,3.41984c-0.39044,2.39252 0.39616,4.95992 2.12648,7.11852c-1.21948,0.96492 -2.66342,1.54733 -4.1925,1.67633c-1.70968,0.14964 -3.6292,-0.56733 -5.16,-1.87453c1.1782,-1.86448 1.88313,-3.85498 2.30453,-5.4993c0.46612,-1.82148 0.24136,-3.1637 -0.66852,-3.98758c-0.69488,-0.63296 -1.66354,-0.82802 -2.71102,-0.54422c-1.39664,0.37152 -2.65611,1.51244 -3.06375,2.77148c-0.74132,2.29104 -0.14902,4.88604 1.62258,7.11516c0.09116,0.11352 0.18251,0.22758 0.27883,0.33594c-0.645,0.82044 -1.41153,1.57743 -2.31797,2.21383c-0.43,0.30272 -0.88435,0.56437 -1.35047,0.77938c-0.9116,-2.25148 -2.01219,-4.40084 -3.30563,-6.47688c-1.26076,-2.02444 -3.00178,-3.07364 -4.64266,-2.795c-0.7052,0.11696 -1.3875,0.47824 -2.02906,1.07164c-1.25044,1.15756 -1.86327,2.58731 -1.77039,4.13875c0.1118,1.86448 1.25278,3.70886 3.12758,5.06594c2.107,1.52392 4.92915,1.9167 7.61235,1.19258c2.51636,7.03652 3.23932,15.16825 2.34148,25.31625c-0.043,0.473 0.30638,0.88927 0.77938,0.93055c0.0258,0.00344 0.05311,0.00336 0.08062,0.00336c0.44032,0 0.81184,-0.33717 0.86,-0.78609c0.92192,-10.41288 0.17017,-18.77815 -2.43219,-26.04859c0.59512,-0.27004 1.17468,-0.5973 1.72336,-0.9843c1.00104,-0.70176 1.84596,-1.52959 2.5632,-2.41539c1.8576,1.53768 4.18126,2.36583 6.3089,2.18695c1.91436,-0.15996 3.71383,-0.90021 5.21711,-2.12313c0.0172,0.0172 0.03483,0.03319 0.05375,0.05039c0.82904,0.76712 1.7379,1.39957 2.69422,1.88461c-0.16161,0.28884 -0.29584,0.55795 -0.45016,0.8432c-0.32008,-0.08338 -0.66375,0.00891 -0.84992,0.40648c-0.86687,1.85271 -1.54035,3.72258 -2.09625,5.6068c-0.08552,0.19607 -0.30266,0.66398 -0.34601,0.76594c-0.07897,0.18645 -0.07328,0.38041 -0.02352,0.56102c-1.57668,6.06279 -1.81058,12.29651 -1.68641,18.76211c0.02064,1.10596 1.74064,1.1094 1.72,0c-0.12603,-6.6371 0.0923,-13.09386 1.88797,-19.3332c0.92767,-2.12035 2.1229,-4.58655 3.46016,-6.95055c1.65808,0.52804 3.38851,0.61756 5.01219,0.21164c0.51944,-0.24424 5.09851,-2.47083 5.64375,-5.62359c0.14964,-0.87204 0.04208,-2.1955 -1.3236,-3.55086c-0.77916,-0.77572 -1.73449,-1.07804 -2.76477,-0.8768c-2.43208,0.47816 -5.1166,3.98645 -7.3268,7.68961c-0.83248,-0.41796 -1.63564,-0.96677 -2.36836,-1.64273c0.0688,-0.0774 0.1362,-0.1594 0.20156,-0.23852c1.72344,-2.08292 2.55614,-4.76459 2.28438,-7.37383c-0.09976,-0.94944 -0.22129,-2.12855 -1.24297,-2.82859c-0.4128,-0.28208 -0.8794,-0.439 -1.37734,-0.46695zM96.94484,75.95211c0.19608,0 0.39401,0.04585 0.56773,0.16797c0.34056,0.23392 0.42127,0.77862 0.50727,1.59906c0.2236,2.1414 -0.46701,4.36023 -1.89805,6.09055c-0.01548,0.01892 -0.03155,0.04155 -0.04703,0.06047c-1.35708,-1.75096 -1.97233,-3.77091 -1.66961,-5.63367c0.13416,-0.8084 0.9299,-1.73801 1.81742,-2.11641c0.2064,-0.08944 0.46427,-0.16797 0.72227,-0.16797zM85.31805,76.44258c0.22704,0 0.46096,0.05488 0.645,0.22172c0.4988,0.45408 0.36085,1.49481 0.15789,2.28773c-0.35604,1.39148 -0.93393,3.06034 -1.86445,4.6393c-1.36224,-1.75268 -1.82868,-3.73251 -1.27656,-5.44219c0.22704,-0.70004 1.04729,-1.42093 1.87117,-1.63938c0.13932,-0.03784 0.30183,-0.06719 0.46695,-0.06719zM72.15938,80.46711c1.01996,0 2.02447,1.01942 2.65055,2.02906c1.22464,1.96596 2.26733,3.9997 3.13765,6.13422c-2.13452,0.52116 -4.36969,0.21554 -5.98305,-0.95406c-1.4534,-1.05264 -2.33455,-2.42746 -2.41539,-3.77594c-0.06192,-1.03372 0.34905,-1.96816 1.22281,-2.77484c0.39044,-0.36292 0.77411,-0.57636 1.14219,-0.63828c0.08256,-0.01376 0.16439,-0.02016 0.24523,-0.02016zM107.6075,80.75938c0.31936,0.01379 0.60308,0.15421 0.88688,0.43672c0.68284,0.67768 0.95852,1.34434 0.83984,2.03578c-0.33196,1.92984 -3.49152,3.80112 -4.51836,4.30336c-1.12316,0.27348 -2.34326,0.22626 -3.55758,-0.11086c2.09152,-3.46064 4.32932,-6.30788 6.01664,-6.63813c0.11481,-0.02322 0.22612,-0.03147 0.33258,-0.02687zM77.01367,133.49484h21.41938h0.77937c1.46716,0 2.66063,1.19347 2.66063,2.66063v1.55875c0,1.46716 -1.19347,2.66063 -2.66063,2.66063h-22.19875c-1.46716,0 -2.66062,-1.19347 -2.66062,-2.66063v-1.55875c0,-1.46716 1.19346,-2.66063 2.66062,-2.66063zM80.27898,143.81484h15.62781c-1.0476,2.60323 -6.34453,3.46016 -7.96508,3.46016c-3.62815,0 -6.75525,-1.49883 -7.66273,-3.46016z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div style={{ color: "lightblue", cursor: "pointer" }}>
              PageTips
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
