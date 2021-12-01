import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Image from "next/dist/client/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "bootstrap/dist/css/bootstrap.css";
import {
 
  Link,
  Button,
} from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import * as React from "react";
// import ReactPlayer from "react-player";
export default function DeliveryChallansHome() {
  return (
    // <div >
    //   <div className="navba" style={{float:"right",marginTop:"60px",marginRight:"20px"}}>
    //     <button
    //       className="btn btn-primary newicon"
    //       data-ember-action=""
    //       data-ember-action-2061="2061"
    //       style={{ background: "green" }}
    //     >
    //       {" "}
    //       <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
    //       <Link href="/addestimates">
    //         <a style={{ textDecoration: "none", color: "white" }}>New </a>
    //       </Link>{" "}
    //     </button>
    //     <SettingsOutlinedIcon style={{ marginLeft: "28px" }} />
    //     <DehazeIcon
    //       sx={{
    //         border: "1px solid #D3D3D3",
    //         borderRadius: "3px",
    //         padding: "3px",
    //         background: "#DCDCDC",
    //         marginLeft: "25px",
            
    //       }}
    //     />
    //     <a
    //       href="#"
    //       data-ember-action=""
    //       data-ember-action-2133="2133"
    //       className="blubs"
    //       style={{textDecoration: "none"}}
    //     >
    //       <EmojiObjectsTwoToneIcon
    //         color="primary"
    //         style={{ marginLeft: "25px" }}
    //       />{" "}
    //       Page Tips{" "}
    //     </a>
    //     <hr />
    //   </div>
       
    //   <hr/>

    
    <div style={{ float: "right", marginRight: "20px" }}>
    <div className="navba" style={{ marginLeft: "1180px",marginTop:"110px" }}>
    <Button
          class="btn btn-primary newicon"
          data-ember-action=""
          data-ember-action-2061="2061"
          variant="contained"
          color="success"
          component={Link}
          href="/adddeliverychallans"
        >
          {" "}
          <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
          <a style={{ textDecoration: "none", color: "white" }}>New </a>
        </Button>
      <SettingsOutlinedIcon style={{ marginLeft: "28px" }} />
      <DehazeIcon
        sx={{
          border: "1px solid #D3D3D3",
          borderRadius: "3px",
          padding: "3px",
          background: "#DCDCDC",
          marginLeft: "25px",
        }}
      />
      <a
        href="#"
        data-ember-action=""
        data-ember-action-2133="2133"
        className="blubs"
        style={{textDecoration:"none"}}
      >
        <EmojiObjectsTwoToneIcon
          color="primary"
          style={{ marginLeft: "25px" }}
        />{" "}
        Page Tips{" "}
      </a>
    </div>

    <hr/>
      <div>
        <div className="intro text-center">
          {/* <div className="videoimg">
            <div id="ember3610" className="yt-video-container ember-view">
              <div className="yt-video-section"> */}
                {/* <ReactPlayer
                  width="36%"
                  height="300px"
                  style={{ marginLeft: "460px", marginTop: "100px" }}
                  url="https://youtu.be/ffLnye2IPXw"
                /> */}
              {/* </div>
            </div>
          </div>{" "} */}
        </div>{" "}
        <h3
          style={{ textAlign: "center", marginTop: "250px", marginLeft: "180px" }}
        >
          Deliver Goods effectively!
        </h3>
        <p
          className="text-muted"
          style={{ textAlign: "center", marginTop: "20px", marginLeft: "190px" }}
        >
          Create, customize and print professional Delivery Challans


        </p>
        <div style={{ margintop: "25px" }} className="cb">
          <Link href="/addestimates">
            <button
              className="btn btn-primary uppercase"
              style={{
                padding: "10px 24px",
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "700px",
                background: "green",
              }}
              data-ember-action=""
              data-ember-action-3613="3613"
            >
              CREATE DELIVERY CHALLAN
            </button>
          </Link>
        </div>
       
        <br />
        <br />
        <br />
        <div
          id="ember3615"
          className="intro-lifecycle text-center ember-view"
          style={{ background: "#f8f7f7", paddingBottom: "50px" }}
        >
          <h4
            className="text-regular"
            style={{
              paddingTop: "40px",
              paddingBottom: "30px",
              marginLeft: "180px",
            }}
          >
            Life cycle of a Delivery Challan
          </h4>

          <img src="/Life cycle of a Delivery Challan.png" alt="site logo" width={1286} height={500} style={{paddingLeft:"400px",verticalAlign: "middle"}}></img>

          <div
            className="row workflow-block"
            style={{
            //   borderTop: "1px solid #ddd",
              maxWidth: "800px",
              margin: "50px auto",
            }}
          >
              <hr style={{marginLeft:"150px"}}/>
            <div className="col-lg-9 offset-lg-3 workflow-list-section text-left" style={{marginLeft:"300px"}}>
              <h4
                className="workflow-list-head text-regular"
                style={{ paddingTop: "50px"}}
              >
                In the
                <span className="text-capitalize"> Delivery Challan   </span> section, you
                can:
              </h4>

              <div className="icon align-text-bottom text-blue">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: "20px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Create delivery challans to accompany your goods when they are in transit.
                  
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Convert a delivery challan into an invoice to charge your customers.
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Mark your delivery challan as returned or record partial returns.
                   
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
