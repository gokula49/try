import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/organizationsetup.module.css";
import countriesList from "../public/JSON/countrieslist.json";
import languagesList from "../public/JSON/languagesList.json";
import currencyList from "../public/JSON/currencyList.json";
import timezoneList from "../public/JSON/timezoneList.json";
import Router from "next/router";
import axios from "axios";
import router from "next/router";
import { isAutheticated } from "../auth/auth";
import {addOrg} from '../auth/services';
import useSWR from 'swr';
export function Organizationsetup() {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedStates, setSelectedState] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedCurrency, setselectedCurrency] = useState();
  const [selectedTimeZone, setSelectedTimeZone] = useState();
  const [visible, setvisible] = useState(false);
  const [availableStates, setStates] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const {user,token} = isAutheticated();
  
  const handleAddress = () => {
    setvisible(true);
  };
  // useEffect(() => {
  //   const userId = localStorage.getItem("user");
  //   const company = localStorage.getItem("companyName");
  //   if (!userId) {
  //     Router.replace("/");
  //   }
    
  // }, []);
  console.log(token)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_id:user._id,
      org_name: e.target.organization_name.value,
      business_location: e.target.country.value,
      state: e.target.state.value,
      //street1: e.target.street1.value,
      //street2: e.target.street2.value,
      //city: e.target.city.value,
      //pincode: e.target.pincode.value,
      currency: e.target.currency.value,
      language: e.target.language.value,
      time_Zone: e.target.timezone.value,
    };

    // addOrg()
    // const { data, error } = useSWR(', fetcher)
   addOrg(formData).then((data)=>{
     console.log(data)
     alert("Created Sucess fully")
     Router.replace("/home/dashboard").then((result) => Router.reload());   })
   
    // if(data){
    //   alert("Success");
    // }
    // else{
    //   alert("Error")
    // }
   
    console.log(user);
    


console.log(formData)

    // console.log(JSON.stringify(formData));
    // const userId = localStorage.getItem("user");
    // console.log(userId);
    // if (userId) {
    //   axios({
    //     method: "POST",
    //     url: "http://localhost:4000/api/create-company",
    //     data: { userId: userId, companyDetails: formData },
    //   }).then((response) => {
    //     const { success, msg } = response.data;
    //     if (success) {
    //       const { companyDetails } = response.data;
    //       // localStorage.setItem("company", JSON.stringify(companyDetails));
    //       // localStorage.removeItem("companyName");
    //       // Router.replace("/home/dashboard").then((result) => Router.reload());
    //       Router.push("/home/dashboard")
    //     } else {
    //       Router.reload();
    //       alert(msg);
    //     }
    //   });
    // } else {
    //   alert("Error occured ! Login Again ");
    //   Router.replace("/sign-in").then((result) => Router.reload());
    // }
  };
  // const formData = {
  //   user_id:user._id,
  //   org_name: "kannan",
  //   business_location: "e.target.country.value",
  //   state: "e.target.state.value",
  //   //street1: e.target.street1.value,
  //   //street2: e.target.street2.value,
  //   //city: e.target.city.value,
  //   //pincode: e.target.pincode.value,
  //   currency: "e.target.currency.value",
  //   language: "e.target.language.value",
  //   time_Zone: "e.target.timezone.value",
  // };
  // const {data,error}=useSWR('/api/user',addOrg(formData))
  // console.log(data);
  // console.log(error);


  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.bgimagetop}
          src="../org_setup_top.png"
          width="230px"
        ></img>
        <img
          className={styles.bgimagebottom}
          src="../org_setup_bottom.png"
          width="230px"
        ></img>
        <div className={styles.mainForm}>
          <div className={styles.formTop}>
            <svg
              version="1.1"
              className={styles.formsvglogo}
              id="Layer_1"
              xmlnsXlink="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 1024 1024"
              xmlSpace="preserve"
            >
              <g opacity=".9" fill="#226db4">
                <path d="M490 400.8h140c16.6 0 30-13.4 30-30v-140c0-16.6-13.4-30-30-30H490c-16.6 0-30 13.4-30 30v140c0 16.6 13.4 30 30 30zm30-140.1h80v80h-80v-80z"></path>
                <path d="M994.1 0H450c-93.8 0-170 76.3-170 170v110.6H169.3C75.9 280.6-.1 356.6-.1 450v404.6c0 93.4 76 169.4 169.4 169.4H754c72.1 0 140-28.1 191-79.1s79.1-118.8 79.1-191V30c0-16.6-13.4-30-30-30zM169.3 340.6h110.6v180.2h-220V450c0-60.3 49.1-109.4 109.4-109.4zm.6 623.4h-.6C109 964 59.9 914.9 59.9 854.6V580.8H280v273.8c0 60.3-49.1 109.4-109.4 109.4h-.7zm794.2-210c0 115.8-94.2 210.1-210.1 210.1H299.8c25-29.5 40.2-67.7 40.2-109.4V170c0-60.7 49.4-110 110-110h514.1v694z"></path>
                <path d="M490 580.8h323.5c16.6 0 30-13.4 30-30s-13.4-30-30-30H490c-16.6 0-30 13.4-30 30s13.4 30 30 30zm0 180.1h323.5c16.6 0 30-13.4 30-30s-13.4-30-30-30H490c-16.6 0-30 13.4-30 30s13.4 30 30 30z"></path>
              </g>
            </svg>
            <h2>Zoho Invoice - Organization Setup</h2>
            <svg
              className={styles.formsvgcross}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M455.2 9.2L256 208.4 56.8 9.2C44.5-3.1 24.6-3.1 12.2 9.2l-2.9 2.9C-3 24.4-3 44.4 9.3 56.7L208.4 256 9.2 455.2c-12.3 12.3-12.3 32.3 0 44.6l2.9 2.9c12.3 12.3 32.3 12.3 44.6 0L256 303.6l199.2 199.2c12.3 12.3 32.3 12.3 44.6 0l2.9-2.9c12.3-12.3 12.3-32.3 0-44.6L303.6 256 502.8 56.8c12.3-12.3 12.3-32.3 0-44.6l-2.9-2.9c-12.5-12.4-32.4-12.4-44.7-.1z"></path>
            </svg>
            {/* <p>\/</p>
                    <p>/\</p> */}
          </div>
          <form className={styles.formBottom} onSubmit={handleSubmit}>
            <h4>
              Welcome aboard, 
              
            </h4>
            <p className={styles.inputTitle}>
              Enter your organization details to get started with Zoho Invoice.
            </p>
            <br></br>

            <label htmlFor="Organization Name" className={styles.inputTitle}>
              Organization Name*
              <input
                type="text"
                value={companyName}
                className={styles.input}
                name="organization_name"
                onChange={(e) => setCompanyName(e.target.value)}
                required
                autoFocus
              />
            </label>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.secondTab}>
              <div className={styles.halfSize_first}>
                <label className={styles.inputTitle}>Business Location</label>
                <select
                  required
                  className={styles.input}
                  placeholder="Country"
                  name="country"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);

                    countriesList.countries.map((value) => {
                      if (value.country === e.target.value) {
                        setStates((e) => value.states);
                      }
                    });
                  }}
                >
                  <option></option>
                  {countriesList.countries.map((value, key) => {
                    return (
                      <option value={value.country} key={key}>
                        {value.country}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.halfSize_second}>
                <label className={styles.inputTitle}>State/Province</label>
                <select
                  required
                  className={styles.input}
                  placeholder="State"
                  name="state"
                  value={selectedStates}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  {availableStates.length == 0 && (
                    <option>Select a business location first</option>
                  )}
                  {availableStates.map((e, key) => {
                    return (
                      <option value={e} key={key}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br></br>
            <div className={styles.thirdTab}>
              <p
                onClick={handleAddress}
                className={visible ? styles["hide"] : styles["thirdinputTitle"]}
              >
                + Add Organization Address
              </p>
              <div
                className={visible ? styles["thirdVisible"] : styles["hide"]}
              >
                <input
                  className={styles.input}
                  placeholder="Street 1"
                  name="street1"
                />
                <br></br>
                <input
                  className={styles.input}
                  placeholder="Street 2"
                  name="street2"
                />
                <br></br>
                <div className={styles.thirdSideBox}>
                  <div className={styles.halfSize_first}>
                    <input
                      className={styles.input}
                      placeholder="City"
                      name="city"
                    />
                  </div>
                  <div className={styles.halfSize_second}>
                    <input
                      className={styles.input}
                      placeholder="Zip/Postal Code"
                      name="pincode"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.fourthTab}>
              <div className={styles.halfSize_first}>
                <label className={styles.inputTitle}>Currency</label>
                <select
                  className={styles.input}
                  placeholder="Currency"
                  name="currency"
                  value={selectedCurrency}
                  onChange={(e) => setselectedCurrency(e.target.value)}
                >
                  <option></option>
                  {currencyList.currencies.map((value, key) => {
                    return (
                      <option
                        value={value["cc"] + "" + value["name"]}
                        key={key}
                      >
                        {value["cc"] + " - " + value["name"]}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.halfSize_second}>
                <label className={styles.inputTitle}>Language</label>
                <select
                  className={styles.input}
                  placeholder="Language"
                  name="language"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option></option>
                  {languagesList.languages.map((value, key) => {
                    return (
                      <option value={value.name} key={key}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className={styles.fifthTab}>
              <label className={styles.inputTitle}>Time Zone</label>
              <select
                className={styles.input}
                placeholder="Time Zone"
                name="timezone"
                value={selectedTimeZone}
                onChange={(e) => setSelectedTimeZone(e.target.value)}
              >
                <option></option>
                {timezoneList.timeZones.map((value, key) => {
                  return (
                    <option
                      value={value["value"] + " - " + value["text"]}
                      key={key}
                    >
                      {value["value"] + " - " + value["text"]}
                    </option>
                  );
                })}
              </select>
            </div>
            <br></br>
            <br></br>
            {/* <div className={styles.sixthTab}>
                        <p className={styles.inputTitle}>Is this business registered for GST?</p>
                        <div className={styles.radioButton}>
                                <label className="switch">
                                <input type="checkbox" />
                                <span className={styles['slider']+""+styles['round']}></span>
                                </label>
                        </div>  
                    </div> */}
            <p className={styles.inputTitle}>
              <span>NOTE:</span> You can change these details later in Settings,
              if needed.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <div className={styles.seventhTab}>
              <div className={styles.buttons}>
                <button type="submit" className={styles.buttonStart}>
                  Submit
                </button>

                <button
                  className={styles.buttonBack}
                  onClick={() => Router.back()}
                >
                  Go Back
                </button>
              </div>

              <div className={styles.privacyPolicy}>
                <Link href="https://www.zoho.com/privacy.html">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
}
export default Organizationsetup;
