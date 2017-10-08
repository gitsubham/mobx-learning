import {action, observable} from 'mobx';

export class CounterStore {
    @observable counter = 0;
    
    increment() {
       this.counter++; 
    }

    decrement() {
        this.counter--;
    }
}

let counterStore = new CounterStore();

export default counterStore;
