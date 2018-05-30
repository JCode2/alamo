import React, {Component} from 'react';
import './Home.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />

          <div id="carouselWithIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselWithIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselWithIndicators" data-slide-to="1"></li>
              <li data-target="#carouselWithIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src={'https://upload.wikimedia.org/wikipedia/commons/3/33/Alamo_Beer_Brewery_from_Hays_Street_Bridge_%282015-03-26_18.56.11_by_Nan_Palmer%29.jpg'} alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
            </div>
            </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={"https://therivardreport.com/wp-content/uploads/2015/03/scottball_alamobrewgrandopen2.jpg"} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={'https://media1.fdncms.com/sacurrent/imager/u/original/2459235/11780061_464819940366350_581608010969211115_o.jpg'} alt="Third slide" />
              </div>
            </div>
            <Link className="carousel-control-prev" to="/" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="/" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
          <Footer/>
      </div>
    );
  }
}
export default Home;
