import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Reducers from '../Reducers';
import authSaga from '../Saga/Auth';
import movieSaga from '../Saga/Movie';
import orderSaga from '../Saga/Order';
import userSaga from '../Saga/User';
import otherSaga from '../Saga/Other';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(authSaga)
sagaMiddleware.run(movieSaga)
sagaMiddleware.run(orderSaga)
sagaMiddleware.run(userSaga)
sagaMiddleware.run(otherSaga)

export default store;