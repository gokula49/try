import axios from "axios";

const API_URL = `https://codingmart-invoice.herokuapp.com/invoices`;

class Invoices {
  getAllInvoices(userId) {
    return axios.get(API_URL + "/" + userId);
  }

  getInvoicesByCustomer(id, userId) {
    return axios.get(API_URL + "/customer/" + id + "/" + userId);
  }

  addInvoices(data) {
    return axios.post(API_URL, data);
  }
}
export default new Invoices();
