import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

class FAQ extends Component {
  render(){
    return(
      <div>
        <Navbar/>
        <div className="jumbotron jumbo2">
          <h1 className='head'>QUESTIONS?</h1>
          </div>
        <div className='row container'>
          <div className='col-md-12'>
            <h2>How do I book an event?</h2>
            <p>Our beer hall is a great setting for your next
            event with space inside and outside. The beer hall is
            equipped with a big-screen TV, games, and mostly importantly
            — ALAMO beer on tap! We can host your next fundraiser,
            company event, or party
            </p>
            <p>contact us at 210-872-5589 for more info</p>
            <h2>I want to sell your beer in my establishment.
            How do I go about this?
            </h2>
            <p>please contact Ben E. Keith Beverage at 512-444-2337.</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default FAQ;
