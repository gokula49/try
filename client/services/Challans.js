import axios from "axios";

const API_URL = `https://codingmart-invoice.herokuapp.com/challans`;

class Challans {
  getAllChallans(userId) {
    return axios.get(API_URL + "/" + userId);
  }

  getChallansByCustomer(id, userId) {
    return axios.get(API_URL + "/customer/" + id + "/" + userId);
  }

  addChallan(data) {
    return axios.post(API_URL, data);
  }
}
export default new Challans();
