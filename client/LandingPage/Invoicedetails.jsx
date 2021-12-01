import React from "react";
import { FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { Button, Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import invoicestyles from "./Invoicedetails.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const countries = [
  {
    name: "Global",
    flag: "./Images/country-flags/globe.png",
  },
  {
    name: "United Kingdom",
    flag: "./Images/country-flags/united-kingdom.png",
  },
  {
    name: "Australia",
    flag: "./Images/country-flags/australia.png",
  },
  {
    name: "UAE",
    flag: "./Images/country-flags/united-arab-emirates.png",
  },
  {
    name: "Bahrain",
    flag: "./Images/country-flags/bahrain.png",
  },
  {
    name: "Qatar",
    flag: "./Images/country-flags/qatar.png",
  },
  {
    name: "UK",
    flag: "./Images/country-flags/united-kingdom.png",
  },
  {
    name: "United States",
    flag: "./Images/country-flags/united-states.png",
  },
  {
    name: "Canada",
    flag: "./Images/country-flags/canada.png",
  },
  {
    name: "India",
    flag: "./Images/country-flags/india.png",
  },
  {
    name: "Saudi Arabia",
    flag: "./Images/country-flags/saudi-arabia.png",
  },
  {
    name: "Kuwait",
    flag: "./Images/country-flags/kuwait.png",
  },
  {
    name: "Oman",
    flag: "./Images/country-flags/oman.png",
  },
];
const Invoicedetails = () => {
  const router = useRouter();
  const [country, setCountry] = React.useState(countries[0].name);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className={invoicestyles.invoicedetails}>
      <div className={invoicestyles.header}>
        <img
          src="./Images/country-flags/green-globe.png"
          className={invoicestyles.greenGlobe}
        />
        <div className={invoicestyles.titleClass}>
          <h1>
            Transform your billing process for{" "}
            <span style={{ color: "greenyellow" }}> ₹0</span>
          </h1>
          <p>
            Experience how professional billing should feel with{" "}
            <b>Zoho Invoice</b>
          </p>
        </div>

        <div className={invoicestyles.btnClass}>
          <Button
            id={invoicestyles.Button}
            variant="contained"
            onClick={() => router.push("/sign-up")}
          >
            ACCESS ZOHO INVOICE
          </Button>
        </div>
      </div>
      <div className={invoicestyles.content}>
        <div className={invoicestyles.imgClass}>
          <a href="https://www.zoho.com/in/invoice/what-is-invoice/">
            <Image
              src="/Images/invoice-details/what-is-invoice.jpg"
              width="300"
              height="200"
              alt="img"
              layout="fixed"
            />
          </a>
          <a href="https://www.zoho.com/in/invoice/what-is-a-timesheet/">
            <Image
              src="/Images/invoice-details/what-is-timesheet.jpg"
              width="300"
              height="200"
              alt="img"
              layout="fixed"
            />
          </a>
        </div>
        <div className={invoicestyles.details}>
          <div className={invoicestyles.listClass}>
            <ul className={invoicestyles.ul}>
              <h3>Product</h3>
              <a href="https://www.zoho.com/in/invoice/create-send-invoices/">
                <li>
                  Features <div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/pricing/">
                <li>
                  Pricing - It's Free<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/mobile-apps/">
                <li>
                  Mobile Invoicing<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/addons/">
                <li>
                  Integrations<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/casestudy/customers-testimonials.html">
                <li>
                  Customer Testimonials<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/casestudy/case-study.html">
                <li>
                  Case Studies<div className={invoicestyles.hr}></div>
                </li>
              </a>
            </ul>
            <ul className={invoicestyles.ul}>
              <h3>Resources</h3>

              <a href="https://www.zoho.com/in/invoice/resources/">
                <li>
                  Business Guides<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/help/getting-started/welcome.html">
                <li>
                  Help Documentation<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/kb/invoices/">
                <li>
                  FAQs<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/whats-new.html">
                <li>
                  What&apos;s New ?<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/release-notes.html">
                <li>
                  Release Notes<div className={invoicestyles.hr}></div>
                </li>
              </a>
            </ul>
            <ul className={invoicestyles.ul}>
              <h3>Quick Links</h3>
              <a href="https://www.zoho.com/financeplus/gdpr.html">
                <li>
                  GDPR and Zoho Finance<div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/invoice-software-for-all-industries/">
                <li>
                  Industries Best Suited For
                  <div className={invoicestyles.hr}></div>
                </li>
              </a>
              <a href="https://www.zoho.com/in/invoice/templates/">
                <li>
                  Invoice Templates<div className={invoicestyles.hr}></div>
                </li>
              </a>
            </ul>
          </div>
          <div className={invoicestyles.socialandcountryWrapper}>
            <div className={invoicestyles.socialmedia}>
              <h3>Connect with us</h3>
              <a href="https://twitter.com/intent/follow?&screen_name=ZohoInvoice">
                <FaTwitterSquare className={invoicestyles.twitterIcon} />
              </a>
              <a href="https://www.youtube.com/channel/UCHEOgQ5G6sd7jzCMnQ9dD9Q">
                <FaYoutubeSquare className={invoicestyles.ytIcon} />
              </a>
            </div>
            <div className={invoicestyles.selectCountry}>
              <InputLabel style={{ color: "white", fontWeight: "600" }}>
                Select Edition
              </InputLabel>

              <Select
                className={invoicestyles.select}
                value={country}
                onChange={handleChange}
                size="small"
              >
                {countries.map((c, index) => (
                  <MenuItem
                    className={invoicestyles.menuitem}
                    value={c.name}
                    key={index}
                    onFocus={() => {}}
                  >
                    <img src={c.flag} width="24" height="24" alt="img" />
                    &nbsp;{c.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoicedetails;
