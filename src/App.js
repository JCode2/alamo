import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Beers from './components/beers/Beers';
import FAQ from './components/faq/FAQ';
import Events from './components/events/Events';
import Create from './components/create/Create';
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
        <Route path="/events" component={Events}/>
        <Route path="/create-post" component={Create}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
