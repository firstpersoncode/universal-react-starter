import { EventEmitter } from 'events';
import dispatcher from "./dispatcher";
import Immutee from 'immutee';

class AppStore extends EventEmitter {
  constructor() {
    super();
    // initial state
    this.appState = {
      initial: '',
    };
    // immutable state
    this.immute = Immutee(this.appState);
  }

  newTest(data) {
    console.log(data);
    this.immute = this.immute.set('initial', data);
    this.emit("newTest");
  }

  fetch() {
    return this.immute.done().initial;
  }

  handleAction(action) {
    switch(action.type) {
      case "NEW_TEST": {
        this.newTest(action.test);
        break;
      }
    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleAction.bind(appStore));

export default appStore;
