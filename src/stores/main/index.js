import { observable, action, computed } from "mobx"

class Counter {
    @observable value = 0;
    @computed get getValue() {
      return this.value;
    }
    @action add() {
      this.value += 1
    }
}

export default Counter