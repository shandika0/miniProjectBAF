import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reduxs/reducer'
import rootSaga from '../reduxs/saga'

const sagaMiddleware = createSagaMiddleware()
// Redux: Store
const store = createStore(
    rootReducer, 
    applyMiddleware(
      sagaMiddleware,
    ),
  );// Middleware: Redux Saga
  sagaMiddleware.run(rootSaga);// Exports
  export {
    store,
  }