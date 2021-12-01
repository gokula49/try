import styles from "../../styles/newcustomer.module.css";
import Head from "next/head";
import { useState, React, useEffect } from "react";
import countriesList from "../../public/JSON/countrieslist.json";
import languagesList from "../../public/JSON/languagesList.json";
import currencyList from "../../public/JSON/currencyList.json";
import Router from "next/router";
export default function NewCustomer() {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   const company = JSON.parse(localStorage.getItem("company"));
  //   console.log(company);
  //   if (!userId) {
  //     Router.replace("/sign-in").then((result) => Router.reload());
  //   }
  // }, []);
  const [toggle, settoggle] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedCurrency, setselectedCurrency] = useState();
  const [visible, setvisible] = useState(false);
  const data = countriesList;
  const availableState = data.countries.find(
    (c) => c.country === selectedCountry
  );

  const handlestate = (index) => {
    settoggle(index);
  };
  const handleMoreDetails = () => {
    setvisible(true);
  };
  return (
    <>
      <Head>
        <title>New Contact | Contacts | Zoho Invoice</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3>New Customer</h3>
          <p>Page Tips</p>
        </div>
        <div className={styles.middle}>
          <div className={styles.first}>
            <div className={styles.label}>
              <label>Customer Type</label>
            </div>
            <input
              className={styles.radioTop}
              type="radio"
              checked
              name="customer_type"
              value="Business"
            />
            Business
            <input
              className={styles.radioTop}
              type="radio"
              name="customer_type"
            />
            Customer
          </div>
          <br />
          <div className={styles.second}>
            <label className={styles.label}>Primary Contact</label>
            <select className={styles.smallInput}>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
              <option>Miss.</option>
              <option>Dr.</option>
            </select>
            <input
              className={styles.smallInput}
              placeholder="First Name"
            ></input>
            <input
              className={styles.smallInput}
              placeholder="Last Name"
            ></input>
          </div>
          <br />
          <div className={styles.third}>
            <label className={styles.label}>Company Name</label>
            <input className={styles.input} placeholder="Company Name"></input>
          </div>
          <br />
          <div className={styles.fourth}>
            <label className={styles.label}>Customer Display Name</label>
            <input className={styles.input} placeholder="" />
          </div>
          <br />
          <div className={styles.fifth}>
            <label className={styles.label}>Customer Email Name</label>
            <input className={styles.input} placeholder="" />
          </div>
          <br />
          <div className={styles.sixth}>
            <label className={styles.label}>Customer Phone</label>
            <input
              className={styles.smallInput}
              placeholder="Work Phone"
            ></input>
            <input className={styles.smallInput} placeholder="Phone"></input>
          </div>
          <br />
          <div className={styles.seventh}>
            <div>
              <p
                onClick={handleMoreDetails}
                className={visible ? styles["hide"] : styles["seventhTitle"]}
              >
                {" "}
                + Add More Details
              </p>
            </div>
            <br />
            <div
              className={visible ? styles["seventhVisible"] : styles["hide"]}
            >
              <div className={styles.seventhFirst}>
                <label className={styles.label}>Skype Number/Name</label>
                <input className={styles.input}></input>
              </div>
              <br />
              <div className={styles.seventhFirst}>
                <label className={styles.label}>Designation</label>
                <input className={styles.input}></input>
              </div>
              <br />
              <div className={styles.seventhFirst}>
                <label className={styles.label}>Department</label>
                <input className={styles.input}></input>
              </div>
              <br />
              <div className={styles.seventhFirst}>
                <label className={styles.label}>Website</label>
                <input className={styles.input}></input>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div className={styles.bottom}>
          <div className={styles.navbar} id={styles.navbar}>
            <li>
              <a
                className={
                  toggle === 1
                    ? styles["toggleElement"] + " " + styles["toggleActive"]
                    : styles["toggleElement"]
                }
                onClick={() => handlestate(1)}
              >
                Other Details
              </a>
            </li>
            <li>
              <a
                className={
                  toggle === 2
                    ? styles["toggleElement"] + " " + styles["toggleActive"]
                    : styles["toggleElement"]
                }
                onClick={() => handlestate(2)}
              >
                Address
              </a>
            </li>
            <li>
              <a
                className={
                  toggle === 3
                    ? styles["toggleElement"] + " " + styles["toggleActive"]
                    : styles["toggleElement"]
                }
                onClick={() => handlestate(3)}
              >
                Contact Persons
              </a>
            </li>
            <li>
              <a
                className={
                  toggle === 4
                    ? styles["toggleElement"] + " " + styles["toggleActive"]
                    : styles["toggleElement"]
                }
                onClick={() => handlestate(4)}
              >
                Custom Fields
              </a>
            </li>
            <li>
              <a
                className={
                  toggle === 5
                    ? styles["toggleElement"] + " " + styles["toggleActive"]
                    : styles["toggleElement"]
                }
                onClick={() => handlestate(5)}
              >
                Remarks
              </a>
            </li>
          </div>

          <div
            className={
              toggle === 1
                ? styles["contentBoxFirst"] + " " + styles["active-contentBox"]
                : styles["contentBoxFirst"]
            }
          >
            <div className={styles.firstOne}>
              <label className={styles.label}>PAN</label>
              <input className={styles.input}></input>
            </div>
            <br />
            <div className={styles.firstOne}>
              <label className={styles.label}>Currency*</label>
              <select
                className={styles.input}
                placeholder="Country"
                value={selectedCurrency}
                onChange={(e) => setselectedCurrency(e.target.value)}
              >
                <option>Currency</option>
                {currencyList.currencies.map((value, key) => {
                  return (
                    <option value={value["cc"] + "" + value["name"]} key={key}>
                      {value["cc"] + " - " + value["name"]}
                    </option>
                  );
                })}
              </select>
            </div>
            <br />
            <div className={styles.firstOne}>
              <label className={styles.label}>Payment Terms</label>
              <select className={styles.input}>
                <option>Due on Receipt</option>
                <option>Net 15</option>
                <option>Net 30</option>
                <option>Net 60</option>
                <option>Due end of the month</option>
                <option>Due end of next month</option>
              </select>
            </div>
            <br />
            <div className={styles.firstOne}>
              <label className={styles.label}>Portable Language</label>
              <select
                className={styles.input}
                placeholder="Language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option>Language</option>
                {languagesList.languages.map((value, key) => {
                  return (
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <br />
            <div className={styles.firstOne}>
              <label className={styles.label}>Facebook</label>
              <input className={styles.input}></input>
            </div>
            <br />
            <div className={styles.firstOne}>
              <label className={styles.label}>Twitter</label>
              <input className={styles.input}></input>
            </div>
            <br />
          </div>
          <div
            className={
              toggle === 2
                ? styles["contentBoxSecond"] + " " + styles["active-addressBox"]
                : styles["contentBoxSecond"]
            }
          >
            <div className={styles.billing}>
              <h2 className={styles.addressTitle}>Billing</h2>
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Attention</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Country/region</label>
                <select
                  required
                  className={styles.inputOne}
                  placeholder="Country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option>Select Country</option>
                  {data.countries.map((value, key) => {
                    return (
                      <option value={value.country} key={key}>
                        {value.country}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Address</label>
                <input
                  className={styles.inputOne}
                  placeholder="Street 1"
                ></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <input
                  className={styles.inputDifferent}
                  placeholder="Street 2"
                ></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>City</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>State</label>
                <select
                  required
                  className={styles.inputOne}
                  placeholder="State"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option>Select State</option>
                  {availableState?.states.map((e, key) => {
                    return (
                      <option value={e} key={key}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Zip Code</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Phone</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Fax</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
            </div>
            <div className={styles.shipping}>
              <h2 className={styles.addressTitle}>shipping</h2>
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Attention</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Country/region</label>
                <select
                  required
                  className={styles.inputOne}
                  placeholder="Country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option>Select Country</option>
                  {data.countries.map((value, key) => {
                    return (
                      <option value={value.country} key={key}>
                        {value.country}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Address</label>
                <input
                  className={styles.inputOne}
                  placeholder="Street 1"
                ></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <input
                  className={styles.inputDifferent}
                  placeholder="Street 2"
                ></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>City</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>State</label>
                <select
                  required
                  className={styles.inputOne}
                  placeholder="State"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option>Select State</option>
                  {availableState?.states.map((e, key) => {
                    return (
                      <option value={e} key={key}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Zip Code</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Phone</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
              <div className={styles.firstOne}>
                <label className={styles.labelOne}>Fax</label>
                <input className={styles.inputOne}></input>
              </div>
              <br />
            </div>
          </div>
          <div
            className={
              toggle === 3
                ? styles["contentBoxThird"] + " " + styles["active-contentBox"]
                : styles["contentBoxThird"]
            }
          >
            <table className={styles.table}>
              <tr className={styles.headRow}>
                <th>Salutation</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Work Phone</th>
                <th>Mobile</th>
              </tr>
              <tr className={styles.headRow}>
                <td>
                  <select className={styles.inputField}>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                    <option>Miss.</option>
                    <option>Dr.</option>
                  </select>
                </td>
                <td>
                  <input className={styles.inputField}></input>
                </td>
                <td>
                  <input className={styles.inputField}></input>
                </td>
                <td>
                  <input className={styles.inputField}></input>
                </td>
                <td>
                  <input className={styles.inputField}></input>
                </td>
                <td>
                  <input className={styles.inputField}></input>
                </td>
              </tr>
            </table>
          </div>
          <div
            className={
              toggle === 4
                ? styles["contentBoxThird"] + " " + styles["active-contentBox"]
                : styles["contentBoxThird"]
            }
          >
            <h4 className={styles.customFields}>
              Start adding custom fields for your contacts by going to Settings
              Preferences Customers. You can also refine the address format of
              your customers from there.
            </h4>
          </div>
          <div
            className={
              toggle === 5
                ? styles["contentBoxThird"] + " " + styles["active-contentBox"]
                : styles["contentBoxThird"]
            }
          >
            <div className={styles.remarks}>
              <label>Remarks (For Internal Use)</label>
              <br />
              <textarea type="text"></textarea>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.buttons}>
          <button className={styles.buttonSave}>Save</button>
          <button className={styles.buttonCancel}>Cancel</button>
        </div>
      </div>
    </>
  );
}
