import { observable } from 'mobx';
import axios from 'axios';
import WineAPI from '../service/wine_api';

class AutoCompleteStore {
  @observable words = []
  wine_api = new WineAPI()

  constructor() {
    this.getWords = this.getWords.bind(this);
    this.receivedWords = this.receivedWords.bind(this);
  }

  receivedWords(response) {
    this.words = response.data.results;
  }

  getWords(word) {
    this.wine_api.getAutocomplete(word, this.receivedWords);
  }
}

export default AutoCompleteStore;
