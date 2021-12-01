import axios from "axios";

const API_URL = `https://codingmart-invoice.herokuapp.com/items`;

class Items {
    getAllItems(userId) {
        return axios.get(API_URL + "/" + userId);
      }

    addItem(data) {
        return axios.post(API_URL, data);
        
    }
}
export default new Items();