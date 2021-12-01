import axios from "axios";

const API_URL = `https://codingmart-invoice.herokuapp.com/customers`;

class Customers {
  getAllCustomers(userId) {
    return axios.get(API_URL + "/" + userId);
  }

  getCustomersByCustomer(id, userId) {
    return axios.get(API_URL + "/customer/" + id + "/" + userId);
  }


  addCustomer(data) {
    return axios.post(API_URL, data);
  }
}
export default new Customers();
