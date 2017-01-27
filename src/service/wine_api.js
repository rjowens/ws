import axios from 'axios';
import auth from './auth_api'

class WineAPI {
  wine_host = 'http://localhost:3000'

  getAutocomplete(term, success) {
    axios.get(`${this.wine_host}/autocomplete.json?search=${term}`).then((response) => success(response));
  }

  searchWineVintages(criteria, success) {
    axios.get(`${this.wine_host}/wine_vintages.json?search=${criteria.join(' AND ')}`).then((response) => success(response));
  }

  getWineVintage(wine_vintage_id, success) {
    axios.get(`${this.wine_host}/wine_vintages/${wine_vintage_id}.json`).then((response) => success(response));
  }

  getWineLists(term, success) {
    if (term) {
      axios.get(`${this.wine_host}/wine_lists.json?ac=${term}`).then((response) => success(response));
    } else {
      axios.get(`${this.wine_host}/wine_lists.json`).then((response) => success(response));
    }
  }

  addToWineList(wine_list_id, wine_vintage_id) {
    axios.post(`${this.wine_host}/wine_lists/${wine_list_id}/wine_vintage`, {
      wine_vintages: [{id: wine_vintage_id}]
    }).then((response) => console.log(response));
  }
}

export default WineAPI;
