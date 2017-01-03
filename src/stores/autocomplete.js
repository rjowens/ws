import { observable } from 'mobx';
import axios from 'axios';

class AutoCompleteStore {
  @observable words = []

  constructor() {
    this.getWords = this.getWords.bind(this)
  }

  receivedWords(response) {
    this.words = response.data.results
  }

  getWords(word) {
    axios.get(`http://localhost:3000/autocomplete.json?search=${word}`).then((response) => this.receivedWords(response))
  }
}

export default AutoCompleteStore;
