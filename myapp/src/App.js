import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Caidan from './components/Caidan';
import NotFound from './components/NotFound';



class App extends Component {
  render() {
    return (
      <div className="container">
          <Router>
              <div>
                <Caidan/>
                <hr/>
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/chanpin" component={Product}/>
                  <Redirect from="/guanyu" to="/about"/>

                  <Route path="/about" component={About}/>
                  <Route component={NotFound}/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
