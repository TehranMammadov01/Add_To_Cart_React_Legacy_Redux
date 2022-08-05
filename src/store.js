import { create } from '@mui/material/styles/createTransitions';
import { createStore } from 'redux';
import rootred from './redux/reducers/main';

const store = createStore(rootred);

export default store;