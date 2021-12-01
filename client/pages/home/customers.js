import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/customers.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useEffect } from "react";
import Router from "next/router";
export default function Home() {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   const company = JSON.parse(localStorage.getItem("company"));
  //   console.log(company);
  //   if (!userId) {
  //     Router.replace("/sign-in").then((result) => Router.reload());
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>Contacts | Zoho Invoice</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topFirst}>
            <Dropdown className="d-inline mx-3" autoClose="outside">
              <Dropdown.Toggle variant="white" id="dropdown-autoclose-outside">
                All Customers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>DEFAULT FILTERS</Dropdown.Header>
                <Dropdown.Item href="#/allcustomers">
                  All customers
                </Dropdown.Item>
                <Dropdown.Item href="#/Active customers">
                  Active customers
                </Dropdown.Item>
                <Dropdown.Item href="#/CRM customers">
                  CRM customers
                </Dropdown.Item>
                <Dropdown.Item href="#/Duplicate customers">
                  Duplicate customers
                </Dropdown.Item>
                <Dropdown.Item href="#/Inactive customers">
                  Inactive customers
                </Dropdown.Item>
                <Dropdown.Item href="#/Client Portal Enabled">
                  Client Portal Enabled
                </Dropdown.Item>
                <Dropdown.Item href="#/Client Portal Disabled">
                  Client Portal Disabled
                </Dropdown.Item>
                <Dropdown.Item href="#/OverDue Customers">
                  OverDue Customers
                </Dropdown.Item>
                <Dropdown.Item href="#/Unpaid Customers">
                  Unpaid Customers
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.topSecond}>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id={`tooltip-bottom`}>Create Customer</Tooltip>}
            >
              <Link href="/newcustomer">
                <button className={styles.newButton}>+ New</button>
              </Link>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id={`tooltip-bottom`}>Create Customer</Tooltip>}
            >
              <button className={styles.settingsButton}>Settings</button>
            </OverlayTrigger>
            <Dropdown className="mx-3" autoClose="outside">
              <Dropdown.Toggle variant="white" id="dropdown-autoclose-outside">
                Sort
                {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve" className="icon icon-sm">
                    <path d="M0 191h512v64H0zM0 319h512v64H0zM0 447h512v64H0z"></path></svg> */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>SORT BY</Dropdown.Header>
                <Dropdown.Item href="#/All customers">Name</Dropdown.Item>
                <Dropdown.Item href="#/Company Name">
                  Company Name
                </Dropdown.Item>
                <Dropdown.Item href="#/Receivables">Receivables</Dropdown.Item>
                <Dropdown.Item href="#/Unused Credits">
                  Unused Credits
                </Dropdown.Item>
                <Dropdown.Item href="#/Created Time">
                  Created Time
                </Dropdown.Item>
                <Dropdown.Item href="#/Last Modified Time">
                  Last Modified Time
                </Dropdown.Item>
                <Dropdown.Item href="#/Import Contacts">
                  Import Contacts
                </Dropdown.Item>
                <Dropdown.Item href="#/Import Contact Persons">
                  Import Contact Persons{" "}
                </Dropdown.Item>
                <Dropdown.Item href="#/Export Contacts">
                  Export Contacts
                </Dropdown.Item>
                <Dropdown.Item href="#/Export Contact Persons">
                  Export Contact Persons
                </Dropdown.Item>
                <Dropdown.Item href="#/Export Current View">
                  Export Current View
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h6> | </h6> <p> Page Trips</p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middleCenter}>
            <h3>Business is no fun without people.</h3>
            <p>Create and manage your contacts, all in one place.</p>
            <br></br>
            <Link href="/newcustomer">
              <button>Create New Customer</button>
            </Link>
            <br></br>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomCenter}>
            <h4>Typesof Contacts</h4>
            <img
              alt="Types of contacts"
              src="https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/1x/zi-contacts-workflow-1129e1a2217d43fd5bbad5a1245ac021.png"
              srcSet="https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/1x/zi-contacts-workflow-1129e1a2217d43fd5bbad5a1245ac021.png 1x, https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/2x/zi-contacts-workflow-b1122474f73d9534246ccae105b0f66b.png 2x"
            />
          </div>
          <div className={styles.bottomSecond}>
            <h4>In the Contacts section, you can:</h4>
            <li> Invite your customers to the Client Portal</li>
            <li> Run customer statement report</li>
            <li> Set a currency to invoice your customers. Learn More</li>
            <li> View transaction history for each customer</li>
            <li> Request feedback for your service</li>
          </div>
        </div>
      </div>
    </>
  );
}
