import { observable, action, computed } from "mobx"

class Counter {
    @observable value = 0;
    @action add() {
      this.value += 1
    }
}

export default Counter