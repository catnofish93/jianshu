import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store/index"
import HeaderC from "./common/header/headerC"
function App() {
  return (
    <Provider className="App" store={store}>
      <HeaderC></HeaderC>
    </Provider>
  );
}

export default App;
