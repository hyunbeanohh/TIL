import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, Middleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const thunkMiddleware : Middleware = thunk;

const loggerMiddleware: Middleware = (store:any) => (next:any) => (action:any) => {
  console.log('store : ',store);
  console.log('action : ',action);
  return next(action);
}

const middleware = applyMiddleware(thunk,loggerMiddleware);
const store = createStore(rootReducer,middleware);

const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App 
      value = {store.getState()}
      onIncrement = {() => store.dispatch({type: "INCREMENT"})}
      onDecrement = {() => store.dispatch({type: "DECREMENT"})}
    />
    </Provider>
  </React.StrictMode>
);

render();

store.subscribe(render);
