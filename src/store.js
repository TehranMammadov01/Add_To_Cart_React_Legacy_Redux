import { legacy_createStore } from 'redux';
import rootred from './redux/reducers/main';

const store = legacy_createStore(rootred);

export default store;  