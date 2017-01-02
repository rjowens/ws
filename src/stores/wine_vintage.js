import { observable } from 'mobx';
import axios from 'axios';

class WineVintageStore {
  @observable wineVintages = [];
  @observable facets = [];
  @observable selectedWineVintage = null;

  constructor() {
    this.getWineVintages = this.getWineVintages.bind(this)
    this.selectWineVintage = this.selectWineVintage.bind(this)
  }

  receivedWineVintages(response) {
    this.wineVintages = response.data.results;
    this.facets = response.data.facets;
  }

  getWineVintages(criterion) {
    axios.get(`http://localhost:3000/wine_vintages.json?search=${criterion}`).then((response) => this.receivedWineVintages(response));
  }

  setSelectedWineVintage(response) {
    this.selectedWineVintage = response.data;
  }

  selectWineVintage(wine_vintage_id) {
    axios.get(`http://localhost:3000/wine_vintages/${wine_vintage_id}.json`).then((response) => this.setSelectedWineVintage(response));
  }
}

export default WineVintageStore;
