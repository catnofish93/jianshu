import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import store from "./store/index"
import HeaderC from "./common/header/headerC"
import Content from "./common/content/content";
import Detail from "./common/detail/detail"
import SignIn from "./common/signIn/signIn";
import PageHome from "./common/homePage/index"
import WriteArticle from "./common/writeArticle/index"
import {Router, Route, hashHistory} from 'react-router'
import "antd/dist/antd.css";
function App() {
  return (
    <Provider className="App" store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <div>
           <Router history={hashHistory}>
             <Route path="/" component={SignIn}></Route>
              <Route path="/view" component={HeaderC}>
                  <Route path="/view/list" component={Content}></Route>
                  <Route path="/view/detail" component={Detail}></Route>
                  <Route path="/pageHome" component={PageHome}></Route>
              </Route>
              <Route path="/signIn" component={SignIn}></Route>
             <Route path="/WriteArticle" component={WriteArticle}></Route>
           </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
