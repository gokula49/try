import * as React from "react";
import { Link, Button } from "@mui/material";
import {useState} from "react";

function AddTimesheet(){

  const [value, setValue] = useState('1');
  const [values, setValues] = useState({
    
    project_name:"",
    description:"",
    customer_name:"",
    billing_method:"",
    rate_per_hour:""
  });

  const {project_name, description,customer_name,billing_method,  rate_per_hour}=values
  console.log(values)

  const handleChange = name => event => {
    setValues({ ...values,[name]:event.target.value});
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({...values,isclick:true})
    const timesheet={
        
    project_name:project_name,
    description:description,
    customer_name:customer_name,
    billing_method:billing_method,
    rate_per_hour:  rate_per_hour,
          }
        console.log(timesheet)
        postParRec(timesheet).then((data)=>{
        if(data.error){
          console.log("error")
        }
        else{
          alert("Saved Succesfully")
        }
      }
        )

      }




    return(



        <div>
             <div className="column content-column" style={{ marginLeft: "-20px" }}>
             <div className="fill header">
              <h3 className="float-left">New Project </h3>
              </div>
              <div className="scroll-y noscroll-x fill body scrollbox">
              <form className="item-creation" onSubmit={handleSubmit} >


              <div className="row form-group">
                <label className="col-form-label col-lg-3 required">
                Project Name
                </label>
                <div className="col-lg-6">
                  <input
                  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"   
                    onChange={handleChange("project_name")}
                    value={values.project_name}     
                  />
                </div>
              </div>

              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                Description
                </label>
                <div className="col-lg-6">
                  <textarea
                        id="ember1440"
                        className="ember-text-area ember-view form-control"
                        placeholder="Max 200 words"
                        type="text"
                        style={{ width: 265 }}
                        onChange={handleChange("description")}
                        value={values.description}
                      ></textarea>
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3 required">
                 Customer Name
                </label>
                <div className="col-lg-6">
                  <select  style={{ width: 265 }}
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder=""
                    type="text"
                    select
                    label="Select Customer"
                    onChange={handleChange("customer_name")}
                    value={values.customer_name}
                    >
                    <option
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Select Customer
                  </option>
                  </select>
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3 required ">
                Billing Method
                </label>
                <div className="col-lg-6">
                  <select  style={{ width: 265 }}
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="Select "
                    type="text"
                    select
                    label="Select "
                    onChange={handleChange("billing_method")}
                    value={values.billing_method}
                    >
                    <option style={{  display: "flex", flexDirection: "column",}}> </option>
                           <option >Fixed Cost for Project </option>
                           <option >Based on Project Hours</option>
                            <option >Based on Task Hours</option>
                            <option >Based on Staff Hours</option>
                          
                  </select>
                </div>
              </div>

              <div className="row form-group">
                <label className="required col-form-label col-lg-3">
                 Rate per Hour
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="INR"
                    type="text"
                    onChange={handleChange("rate_per_hour")}
                    value={values.rate_per_hour}
                  />
                </div>
              </div>
<br/>

 <div>
     <h4>Users</h4>
     <br/>
     <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
               User
                </label>
                <div className="col-lg-6">
                  <input
                  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="Select User"
                    type="text"   
                  />
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
              Email
                </label>
                <div className="col-lg-6">
                  <input
                  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="Email Id"
                    type="text"   
                  
                  />
                </div>
              </div>
 </div>


 <div>
     <h4>Tasks</h4>
     <br/>
     <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
                Task Name
                </label>
                <div className="col-lg-6">
                  <input
                  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="Task Name"
                    type="text"   
                  />
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
                Description
                </label>
                <div className="col-lg-6">
                  <input
                  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    placeholder="Description"
                    type="text"   
                  
                  />
                </div>
              </div>
 </div>

              <div className="txn-creation-column">
                  <div className="btn-toolbar fixed-actions">
                    <Button
                      id="ember1447"
                      className="btn btn-primary ember-view"
                      type="submit"
                      variant="contained"
                      component={Link}
                     // href="/timesheet"
                    >
                      Save
                    </Button>
                    &nbsp;
                    <Link href="/timesheet">
                      <button
                        className="btn btn-secondary"
                        data-ember-action=""
                        data-ember-action-1448="1448"
                      >
                        Cancel
                      </button>
                    </Link>
                    
                  </div>
                </div>
                  </form>
              </div>
             </div>
        </div>
    )
};
export default AddTimesheet;