import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './redux/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import store from "./redux/store"
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux"
import {actionCreators,State}  from "./redux/index"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>
);


reportWebVitals();
