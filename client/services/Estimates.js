import axios from "axios";

const API_URL = `https://codingmart-invoice.herokuapp.com/estimates`;

class Estimates {
  getAllEstimates(userId) {
    return axios.get(API_URL + "/" + userId);
  }

  getEstimateByCustomer(id, userId) {
    return axios.get(API_URL + "/customer/" + id + "/" + userId);
  }

  addEstimate(data) {
    return axios.post(API_URL, data);
  }
}
export default new Estimates();
