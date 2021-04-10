import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store/index"
import HeaderC from "./common/header/headerC"
import Content from "./common/content/content";
import Detail from "./common/detail/detail"
import SignIn from "./common/signIn/signIn";
import {Router, Route, hashHistory} from 'react-router'
import "antd/dist/antd.css";
function App() {
  return (
    <Provider className="App" store={store}>
        <div>
           <Router history={hashHistory}>
             <Route path="/" component={SignIn}></Route>
              <Route path="/view" component={HeaderC}>
                  <Route path="/view/list" component={Content}></Route>
                  <Route path="/view/detail" component={Detail}></Route>
              </Route>
              <Route path="/signIn" component={SignIn}></Route>
           </Router>
        </div>
    </Provider>
  );
}

export default App;
