import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {combineForms} from 'react-redux-form';
import { loginReducer } from '../reducers/loginPageReducer';
import { employeeReducer } from '../reducers/employeeReducer';

const initialUserState = {
  userName: '',
  password: '',
};

export const store = createStore(combineForms({
  user: initialUserState,
  login:loginReducer,
  employees:employeeReducer
}), applyMiddleware(thunk,logger));
