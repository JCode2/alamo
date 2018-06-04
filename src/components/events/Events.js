import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

class Events extends Component {
  state = {
    events:[]
  }

  componentDidMount(){
    this.getEvents();
  }

  getEvents = _ => {
    fetch('http://localhost:4000/test')
    .then(response => response.json())
    .then(response => this.setState({ events: response.data}))
    .catch(err => console.error(err))
  }

  // .then(({data}) => {
  //   console.log(data);
  // })

  renderEvents = ({id, title, description}) => <div key={id}><h2>{title}</h2><p>{description}</p></div>

  render(){
    const { events } = this.state;
    return(
      <div>
      <Navbar/>
      <div className="jumbotron">
        <h2 className="head">EVENTS @ THE BREWERY</h2>
      </div>
      <div className='container'>
        {events.map(this.renderEvents)}
        </div>
        <Footer/>
        </div>
      );
    }
  }
  export default Events;
