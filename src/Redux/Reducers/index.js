import { combineReducers } from 'redux';
import Auth from './Auth';
import Movie from './Movie';
import Order from './Order';
import User from './User';
import Other from './Other';

export default combineReducers({
  Auth,
  Movie,
  Order,
  User,
  Other
})