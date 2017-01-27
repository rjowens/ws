import { observable } from 'mobx';
import axios from 'axios';
import WineAPI from '../service/wine_api'

class WineVintageStore {
  @observable wineVintages = [];
  @observable facets = [];
  @observable selectedWineVintage = null;
  @observable criteria = [];
  @observable summary = null;

  wine_api = new WineAPI();

  constructor() {
    this.getWineVintages = this.getWineVintages.bind(this)
    this.selectWineVintage = this.selectWineVintage.bind(this)
    this.receivedWineVintages = this.receivedWineVintages.bind(this)
    this.setSelectedWineVintage = this.setSelectedWineVintage.bind(this)
    this.selectAutoComplete = this.selectAutoComplete.bind(this)
  }

  clearCriteria() {
    this.criteria = [];
  }

  selectAutoComplete(criterion) {
    this.clearCriteria()
    this.getWineVintages(criterion)
  }

  removeCriteria(c) {
    var index = this.criteria.indexOf(c)
    this.criteria.splice(index, 1)
    this.wine_api.searchWineVintages(this.criteria, this.receivedWineVintages);
  }

  receivedWineVintages(response) {
    this.wineVintages = response.data.results;
    this.facets = response.data.facets;
    this.summary = response.data.summary;
    this.selectWineVintage(this.wineVintages[0].wine_vintage_id)
  }

  getWineVintages(criterion) {
    this.criteria.push(criterion)
    this.wine_api.searchWineVintages(this.criteria, this.receivedWineVintages);
  }

  setSelectedWineVintage(response) {
    this.selectedWineVintage = response.data;
  }

  selectWineVintage(wine_vintage_id) {
    this.wine_api.getWineVintage(wine_vintage_id, this.setSelectedWineVintage)
  }
}

export default WineVintageStore;
