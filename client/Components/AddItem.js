import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Link, Button } from "@mui/material";
import Items from "../services/Items";
import "bootstrap/dist/css/bootstrap.min.css";
import { isAutheticated } from "../auth/auth";
import axios from "axios";
const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};
const names = [
  "box",
  "cm",
  "dz",
  "ft",
  "g",
  "in",
  "kg",
  "km",
  "lb",
  "mg",
  "ml",
  "pcs",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddItem() {
  const {user} = isAutheticated();

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const customHandleClick = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    let datas = {
      user_id:user._id,
      unit: e.target.elements.unit.value,
      name: e.target.elements.name.value,
      type: e.target.elements.productType.value,
      selling_price: e.target.elements.selling_price.value,
      selling_description: e.target.elements.selling_description.value
    };
  console.log(datas)
   axios.post(`https://codingmart-invoice.herokuapp.com/items`,datas)
   .then((data)=>{
     alert("Items Created Successfully")
   }).catch(()=>{
     alert("something went wrong")
   })


  //  console.log(user._id)
  //   axios.post(`http://localhost:4000/customers`, datas)
  //   .then((data)=>{
  //     alert("Successfully created customers")
  //   })
  //   .catch(console.log("Error"))
  // };
    // console.log(data);
    // let res = await Items.addItem(data);
    // console.log(res);
    
    // if (res.data.success) {
    //   window.location.replace("/items");
    // }
};

  return (
    <div>
      <div className="column content-column" style={{ marginLeft: "-20px" }}>
        {/* <div className={`content-column ${styles.column} ${styles.content-column}`} style={{marginLeft: "-20px"}} >  */}
        <div className="fill header">
          <h3 className="float-left">New Item </h3>
        </div>
        <div className="scroll-y noscroll-x fill body scrollbox">
          {/* <div className={`${styles.scroll_y}${styles.noscroll_x}${styles.fill}${styles.body}${styles.scrollbox}`}> */}
          <form className="item-creation" onSubmit={customHandleClick}>
            {/* <form className={`${styles.item_creation}`} onSubmit={customHandleClick}> */}
            <div
              tabIndex="-1"
              id="ember1428"
              className="no-outline ember-view"
              // className={`ember-view${styles.no_outline}${styles.grey_bg}`}
            ></div>
            <div className="primary-info grey-bg">
              {/* <div className={`primary-info${styles.primary-info}`}> */}
              <div className="item-new">
                <div className="row">
                  <div className="col-lg-8">
                    <fieldset className="form-group">
                      <div className="row">
                        <legend className="col-lg-3 pt-0 col-form-label">
                          Type &nbsp;
                          <i
                            id="ember1429"
                            className="tooltip-container ember-view"
                          >
                            <HelpOutlineOutlinedIcon sx={{ fontSize: 15 }} />
                          </i>
                        </legend>
                        <div className="col-lg-8">
                          <div className="form-check form-check-inline">
                            <input
                              name="productType"
                              id="acd24c0f6"
                              className="ember-view form-check-input"
                              type="radio"
                              value="goods"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="acd24c0f6"
                            >
                              Goods
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              name="productType"
                              id="a7da477be"
                              className="ember-view form-check-input"
                              type="radio"
                              value="service"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="a7da477be"
                            >
                              Service
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label required">
                        Name
                      </label>
                      <div className="col-lg-8">
                        <input
                          name="name"
                          id="ember1430"
                          className="ember-text-field ember-view form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row form-group" style={{ display: "flex" }}>
                      <label className="col-lg-3 col-form-label">
                        <span>Unit &nbsp;</span>
                        <i
                          id="ember1431"
                          className="tooltip-container ember-view"
                        >
                          <HelpOutlineOutlinedIcon sx={{ fontSize: 15 }} />
                        </i>
                      </label>

                      <FormControl
                        style={{
                          maxWidth: 390,
                          marginLeft: "145px",
                          marginTop: "-20px",
                        }}
                      >
                        <InputLabel
                          id="demo-multiple-name-label"
                          style={{ marginTop: "-16px" }}
                        >
                          {" "}
                          &nbsp;Select or type to add
                        </InputLabel>

                        {/* <MenuItem value="" >
            <em>Select or Type to add </em>
          </MenuItem> */}

                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          name="unit"
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Name" />}
                          MenuProps={MenuProps}
                          style={{ height: "50%" }}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* <div className="col-lg-8">
                        <div id="ember1432" className="type-ahead ember-view">
                          <div
                            id="ember1433"
                            className="dropdown show ac-dropdown ember-view"
                          >
                            {" "}
                            <div
                              className="auto-select ac-selected"
                              tabIndex="-1"
                            > */}
                      {/* <input
                                className="ember-text-field form-control ac-search-txt ember-view"
                                placeholder="Select or Type to add"
                              /> */}
                      {/* <select
                                  className="value"
                                  name="unit"
                                  style={{
                                    width: "350px",
                                    padding: "1px 12px",
                                    margin: "0px 0px 2px",
                                  }}
                                > */}
                      {/* <datalist id="exampleList">
                                  <option value="" disabled>
                                    Select or Type to add
                                  </option>
                                  <option value="Box">Box</option>
                                  <option value="cm">cm</option>
                                  <option value="ft">ft</option>
                                  <option value="ib">ib</option>
                                  <option value="ft">ft</option>
                                  <option value="kg">kg</option>
                                  <option value="cm">cm</option>
                                  <option value="sales">sales</option>
                                  </datalist> */}

                      {/* </div> */}

                      {/* <i className="zf-ac-toggler"></i> */}
                      {/* </div> */}
                      {/* </div>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="zb-txn-form item-new"
              style={{ marginTop: "-10px" }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group d-flex">
                    <div className=" form-check form-check-inline font-large"></div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label col-lg-4">
                      <span
                        id="ember1435"
                        className="tooltip-container text-dashed-underline ember-view"
                      >
                        <span className="required">Selling Price</span>
                      </span>
                    </label>
                    <div className="col-lg-8" style={{ marginLeft: "-30px" }}>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">INR</span>
                        </div>
                        <input
                          id="ember1436"
                          className="ember-text-field text-left ember-view form-control"
                          type="text"
                          name="selling_price"
                          style={{ width: "50px", height: "40px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-group">
                    <label className="col-form-label col-lg-4">
                      {" "}
                      Description{" "}
                    </label>{" "}
                    <div className="col-lg-8" style={{ marginLeft: "-30px" }}>
                      <textarea
                        id="ember1440"
                        className="ember-text-area ember-view form-control"
                        name="selling_description"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="txn-creation-column">
                  <div className="btn-toolbar fixed-actions">
                  <Link href="/items">
                        <button
                          id="ember1447"
                          className="btn btn-primary ember-view"
                          type="submit"
                        >
                          <a>Submit </a>
                        </button>
                      </Link>
                    &nbsp;
                    <Link href="/items">
                      <button
                        className="btn btn-secondary"
                        data-ember-action=""
                        data-ember-action-1448="1448"
                        href="/items"
                      >
                        Cancel
                      </button>
                    </Link>
                    <div className="goback">
                      <Link href="/items">
                        <button
                          id="ember1447"
                          className="btn btn-primary ember-view"
                          type="submit"
                        >
                          <a>Go back </a>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}