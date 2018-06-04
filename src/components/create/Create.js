import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';

class Create extends Component {
  state = {
    test: [],
    events :{
      title: '',
      description:''
    }
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = _ => {
    fetch('http://localhost:4000/test')
    .then(response => response.json())
    .then(response => this.setState({ test: response.data}))
    .catch(err => console.error(err))
  }

  addEvents = _ => {
    const {events} = this.state;
    fetch(`http://localhost:4000/test/add?title=${events.title}&description=${events.description}`)
    .then(this.getProducts)
    .catch(err => console.error(err))
  }

renderEvents = ({id, title, description}) => <div><ul><li key={id}>{title}</li></ul></div>

  render(){
    const {events, test} = this.state;
    return(
      <div>
      <Navbar/>
      <div className='container'>
      <h1>Welcome Brew Master!</h1>
        <div className='row'>
          <div className='col-md-6 post-form'>
              <h1>create a new post</h1>
              <form>
              <input value={events.title} placeholder="sample title" onChange={e => this.setState({events: {...events, title: e.target.value}})}/>
              <br/>
              <input value={events.description} placeholder="sample description" onChange={e => this.setState({events: {...events, description: e.target.value}})}/>
              <br/>
              <button onClick={this.addEvents} className='btn btn-primary'>enter</button>
              </form>
            </div>
          <div className='col-md-6 list-of-events-created'>
                {test.map(this.renderEvents)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
