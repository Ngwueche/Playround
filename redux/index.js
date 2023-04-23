import store from './store.js';
import {clockedIn, resolved} from './actioncreator.js';

 const unsubscribe = store.subscribe(()=>{
    console.log('Welcome to Work', store.getState())
})
store.dispatch(clockedIn('description'));

unsubscribe()

store.dispatch(resolved(1))
console.log(store.getState())