import { observable } from 'mobx';
import axios from 'axios';
import WineAPI from '../service/wine_api';

class WineList {
  @observable wine_lists = []
  wine_api = new WineAPI()

  constructor() {
    this.getWineLists = this.getWineLists.bind(this);
    this.receivedWineLists = this.receivedWineLists.bind(this);
  }

  receivedWineLists(response) {
    console.log (response);
    this.wine_lists = response.data.wine_lists;
    this.wine_lists.push({name: "Create New List"});
  }

  addToWineList(wine_list_id, wine_vintage_id) {
    this.wine_api.addToWineList(wine_list_id, wine_vintage_id)
  }

  getWineLists(term) {
    this.wine_api.getWineLists(term, this.receivedWineLists);
  }
}

export default WineList;
