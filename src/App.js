import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store/index"
import HeaderC from "./common/header/headerC"
import Content from "./components/content";
function App() {
  return (
    <Provider className="App" store={store}>
        <div>
            <HeaderC></HeaderC>
            <Content></Content>
        </div>
    </Provider>
  );
}

export default App;
