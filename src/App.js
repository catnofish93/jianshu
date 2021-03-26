import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store/index"
import HeaderC from "./common/header/headerC"
import Content from "./components/content";
import Detail from "./common/detail/detail"
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
function App() {
  return (
    <Provider className="App" store={store}>
        <div>
           <Router history={hashHistory}>
                <HeaderC path="/view" component={HeaderC}>
                    <Route path="/view/list" component={Content}></Route>
                    <Route path="/view/detail" component={Detail}></Route>
                </HeaderC>

           </Router>
        </div>
    </Provider>
  );
}

export default App;
