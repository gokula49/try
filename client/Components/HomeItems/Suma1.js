import React from "react";
import styles from "./Suma1.module.css";
import {isAutheticated} from "../../auth/auth";
import Image from 'next/image'
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';
import Head from "next/head";
import zohoinv from '../../public/Images/zoho_invoice1.png'
import { useRouter } from "next/router";

function Suma1() {
  const router =useRouter(); 
  const {user} = isAutheticated()
  return (
    <>
    <Head>
      <title>Zoho Invoices</title>
    </Head>
    <div className={styles.maincontent}>
      <div className={styles.container}>
        <div className={styles.contain}>
          <div className={styles.name_container}>
            <div className={styles.container_head}>
              <img
                src="https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/sparkles-4138d67498472c2ef5fd59561040e752.png"
                alt=""
              />

              <div className={styles.container_text}>
                <h3>Hello {user && user.name} ,</h3>
                <p>
                  Welcome to Zoho Invoice, the smart and secure invoicing
                  solution. Get ready to simplify invoicing for your business,
                  absolutely for free!
                </p>
              </div>
               
              {/* <Button variant="contained" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M253.2 39.2c-115.4 0-209 93.6-209 209s93.6 209 209 209 209-93.6 209-209-93.5-209-209-209zm64.5 226.2l-11.5 8.5-83 61.8-14.9 11.1c-.8.7-1.8.9-2.7.9h-.1c-.4 0-.7-.1-1.1-.2-.1 0-.3-.1-.4-.2-.4-.1-.7-.3-1-.6-1.4-1-2.2-2.9-1.6-4.9l23.4-72.1 4.4-13.6c.6-1.8 0-3.6-1.3-4.7-.4-.4-.9-.7-1.5-.9l-9.6-3.1-4.6-1.5-22.3-7.3c-.6-.2-1.1-.5-1.5-.9l-.1-.1c-1.9-1.8-2-5.1.3-6.8l109.5-81.3c1-.8 2.2-1 3.2-.9.1 0 .3.1.4.1.2.1.5.1.7.2 1.9.8 3.2 3 2.5 5.4l-9.7 29.8L277 240c-.7 2.1.2 4.2 2 5.2.3.1.5.3.8.4l7.1 2.3 6.5 2.1 10.9 3.5 12 3.9c.2.1.4.2.6.2.1 0 .1.1.2.1.2.1.3.2.5.3.8.6 1.4 1.4 1.7 2.3.1.2.1.4.1.6 0 .2.1.4.1.6 0 1.6-.5 3-1.8 3.9z"
                    fill="#fff"
                  ></path>
                </svg>{" "}
                <Link href="/account" style={{marginLeft:"70%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px",textDecoration:'none'}}>
                My Account
                </Link>
              </Button> */}
              <Button variant="contained" style={{marginLeft:"70%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/account') }}>+ My Account</Button>
             
              {/* <button className={styles.closebtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M289.9 256L471.8 74.2c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.4-33.9 0L256 222.1 74.2 40.2c-9.4-9.4-24.6-9.4-33.9 0-9.4 9.4-9.4 24.6 0 33.9L222.1 256 40.2 437.8c-9.4 9.4-9.4 24.6 0 33.9 4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L256 289.9l181.8 181.8c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L289.9 256z"></path>
                </svg>
              </button> */}
            </div>
          </div>
          {/* <div className={styles.box_container}>
            <div className={styles.box1}>
              <div className={styles.first}>
                <img className={styles.topimg}
                  src="https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/top-grey-bg-9fa6c1f772b39836948c44f99ac3e796.png"
                  alt=""
                />
                <h2>01</h2>
                <p>
                  Tell us about your business so we can understand your needs
                  better
                </p>
                <div className={styles.svgdots}>
                  <span><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><path d="M347.5 82h-183c-44.2 0-80 35.8-80 80v188c0 44.2 35.8 80 80 80h183c44.2 0 80-35.8 80-80V162c0-44.2-35.8-80-80-80z"></path></svg></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                </div>
                <img className={styles.bottomimg} src = "https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/bottom-grey-bg-04e7e4f71be4518363e71c5c9d91edca.png" alt=""/>
              </div>
              <div className={styles.second}>
                <div className={styles.second_content}>
                  <div className={styles.label_items}>
                    <div>
                    <label>Industry Type</label>
                    <select className={styles.select}>
                    <option value=""></option>
                    <option value="Construction">Construction</option>
                  <option value="Education">Education</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Health Care">Health Care</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Retail">Retail(E-Commerce and Offline)</option>
                  <option value="web Designing">Web Designing</option>
                  <option value="web Development">Web Development</option>
                  <option value="agency">Agency or Sales House</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="art">Art and Design</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Consulting">Consulting</option>
                  <option value="consumer">Consumer Packaged Goods</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="food">Food Services(Restuarnts and Fast Food)</option>
                  <option value="Gaming">Gaming</option>
                  <option value="govt">Government</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="internal">Internal</option>
                  <option value="Legal">Legal</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Mizoram">Mining and Logistics</option>
                  <option value="non-profit">Non-Profit</option>
                  <option value="publishng">Publishing and Web Media</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Services">Services</option>
                  <option value="tech">Technology</option>
                  <option value="Tele">Telecommunications</option>
                  <option value="Travel">Travel/Hospitality</option>
                  <option value="writer">Writers</option>
                      
                    </select>
                    </div>
                    <div className={styles.seperator}>
                    <label>Bussiness Type</label>
                    <select className={styles.select}>
                    <option value=""></option>
                       <option value="Freelancing">Freelancing</option>
                  <option value="For-profit Business">For-profit Business</option>
                  <option value="NGO">NGO</option>
                    </select>
                    </div>
                  </div>
                    <div className={styles.buttondiv}>
                      <button className={styles.savebtn}>Save and Next</button>
                      <button className={styles.skipbtn}>Skip</button>
                    </div>
                </div> 
                
                <div></div>
              </div>
            </div>
            <div className={styles.box2}>
              <div>
                <h4>
                  Visit the links below to deep-dive into all the features that
                  Zoho Invoice offers:
                </h4>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon icon-xlg mr-1 align-middle"
                  >
                    <path
                      d="M388.2 123.8c-72.9-72.9-191.5-72.9-264.5 0-72.9 72.9-72.9 191.5 0 264.5C160.2 424.8 208 443 255.9 443s95.8-18.2 132.2-54.7c73-73 73-191.6.1-264.5zm-8.8 238.7l-53-53c23.9-31.5 23.9-75.4 0-106.9l53-53c52.7 60.9 52.7 151.9 0 212.9zm-169-60.9c-25.1-25.1-25.1-66 0-91.1 12.6-12.6 29.1-18.8 45.6-18.8s33 6.3 45.6 18.8c25.1 25.1 25.1 66 0 91.1-25.2 25.1-66 25.1-91.2 0zM256 93.1c38 0 76 13.2 106.5 39.5l-53 53c-31.5-23.9-75.4-23.9-106.9 0l-53-53C180 106.2 218 93.1 256 93.1zm-123.4 56.4l53 53c-23.9 31.5-23.9 75.4 0 106.9l-53 53c-52.7-60.9-52.7-151.9 0-212.9zm16.9 229.9l53-53c15.7 12 34.6 18 53.5 18s37.7-6 53.5-18l53 53c-61 52.7-152 52.7-213 0z"
                      fill="#246ef6"
                    ></path>
                  </svg>
                  Help Documents
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    className="icon icon-xlg mr-1 align-middle"
                  >
                    <path
                      d="M295 176.4c-10-7.9-21.8-11.9-35.2-11.9-12.3 0-23.3 3.1-33 9.2-6 3.8-11 8.5-15 14.1-4.1 5.7-2.3 13.8 3.8 17.3l5.8 3.3c5.3 3 12 1.6 15.6-3.3 5.3-7.1 12.5-10.6 21.6-10.6 6.4 0 11.4 1.4 15 4.3 3.6 2.8 5.4 6.9 5.4 12.1 0 8.4-6.3 17.7-18.8 27.8-5.1 4-9.5 9.1-13.2 15 0 .1-.1.1-.1.2-4.9 7.9.9 18 10.2 18h6.1c4.7 0 8.9-2.8 10.9-7 .6-1.3 1.3-2.5 2.3-3.8 2.6-3.6 5.8-7.1 9.4-10.4 3.7-3.4 7.3-7 11-10.8 3.7-3.8 6.8-8.5 9.4-13.9s3.9-11.3 3.9-17.4c0-13.7-5-24.4-15.1-32.2zm-38.1 113.1c-4 0-7.5 1.4-10.3 4.3-2.9 2.9-4.3 6.3-4.3 10.3 0 4 1.4 7.5 4.3 10.3 2.9 2.9 6.3 4.3 10.3 4.3 4 0 7.5-1.4 10.3-4.3 2.9-2.9 4.3-6.3 4.3-10.3 0-4-1.4-7.5-4.3-10.3-2.9-2.9-6.3-4.3-10.3-4.3z"
                      fill="#246ef6"
                    ></path>
                    <path
                      d="M396.1 358.7c34.1-30.6 52.9-70.8 52.9-113.1 0-44.3-20.3-85.8-57.3-116.9-36.3-30.6-84.5-47.4-135.7-47.4s-99.4 16.8-135.7 47.4C83.3 159.8 63 201.3 63 245.6s20.3 85.8 57.3 116.9C156.6 393.1 204.8 410 256 410c7.4 0 14.9-.4 22.2-1.1 24.8-2.4 50.7 1 74.7 10l29.6 11.1c1.4.5 2.8.8 4.2.8 2.9 0 5.7-1 8-3 3.3-2.9 4.7-7.5 3.7-11.8l-8.8-36.4c-1.8-7.7.7-15.6 6.5-20.9zm-16-17.8c-12.4 11.1-17.6 28.1-13.7 44.3l3.5 14.4-8.5-3.2c-21.8-8.1-44.8-12.3-67.6-12.3-6 0-11.9.3-17.8.9-6.6.6-13.3 1-19.9 1-93.2 0-169-63-169-140.4s75.8-140.4 169-140.4 169 63 169 140.4c-.1 35.4-16.1 69.3-45 95.3z"
                      fill="#246ef6"
                    ></path>
                  </svg>
                  Frequently Asked Questions
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon icon-xlg mr-1 align-middle"
                  >
                    <path
                      d="M380.5 59.5h-219c-34.2 0-62 27.8-62 62v268c0 .4 0 .7.1 1.1 0 .7-.1 1.4-.1 2.2 0 32.9 26.8 59.8 59.8 59.8h221.2c17.6 0 32-14.4 32-32V91.5c0-17.6-14.4-32-32-32zm0 369H159.2c-19.7 0-35.8-16-35.8-35.8s16-35.8 35.8-35.8h221.2c2.8 0 5.4-.4 8-1v24.3H185.9c-6.6 0-12 5.4-12 12s5.4 12 12 12h202.6v16.2c0 4.5-3.6 8.1-8 8.1zm-219-345H256V156c0 4.4 2.4 8.4 6.2 10.5 1.8 1 3.8 1.5 5.8 1.5 2.2 0 4.5-.6 6.4-1.9l25.2-16 26.1 16.1c3.7 2.3 8.3 2.4 12.1.3 3.8-2.1 6.1-6.1 6.1-10.5V83.5h36.5c4.4 0 8 3.6 8 8V325c0 4.4-3.6 8-8 8H159.2c-13.4 0-25.8 4.4-35.8 11.9V121.5c.1-21 17.1-38 38.1-38zM320 84v50.5l-14.2-8.7c-1.9-1.2-4.1-1.8-6.3-1.8s-4.5.6-6.4 1.9l-13.1 8.3V84h40z"
                      fill="#246ef6"
                    ></path>
                  </svg>
                  Essential Business Guides
                </a>
              </div>
            </div>
          </div> */}
          <div className={styles.box_invoice}>
            <div className={styles.box_invoice_left}>
              <p>Zoho Invoice is a 100% free cloud-based invoicing solution designed to help small businesses with invoicing, tracking expenses and, accepting online payments.Key features include project billing, time tracking, reporting, customizable templates and, a client portaI.</p><br/><br/>
              <p>Teams using Zoho Invoice can track estimates, convert them to invoices, and send reminders to clients to complete their outstanding payments. Additionally, users can create tasks, collect advance payments for projects, and keep track of their invoice history.</p><br/><br/>
            </div>
            <div className={styles.box_invoice_right}>
              <Image src={zohoinv} layout="responsive" className={styles.box_invoice_img} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Suma1;
