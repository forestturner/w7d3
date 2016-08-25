import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import {requestTodos} from './actions/todo_actions';


// window.requestTodos = requestTodos;
// window.store = configureStore;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
