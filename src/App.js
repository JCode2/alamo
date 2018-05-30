import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Beers from './components/beers/Beers';
import FAQ from './components/faq/FAQ';
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/beers" component={Beers}/>
        <Route path="/faq" component={FAQ}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
