import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import {combineForms} from 'react-redux-form';

const initialUserState = {
  userName: '',
  password: '',
};

export const store = createStore(combineForms({
  user: initialUserState,
}), applyMiddleware(thunk));
