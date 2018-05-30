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
          <div className='row featured-section'>
          <div className='col-md-6'>
            <img className="featured" src={'https://static.wixstatic.com/media/57d5d7_bc2dd46076864d77bd0f55a8304167e0~mv2_d_2992_2000_s_2.jpg'}/>
          </div>
            <div className='col-md-6'>
            <h2>Now Available: ALAMO Fiestaval</h2>
            <h4>The unofficial beer of Fiesta is specially crafted for backyard pachangas or downtown parades.
            </h4>
            <h4>
            Sessionable and approachable, FIESTAVAL is a seasonal blonde ale brewed with ground coriander and fresh ginger for a spicy taste that pairs well with traditional grilled meats, peppers and moles.
            </h4>
          </div>
          </div>
          <div className='row blurb-section'>
            <div className='col-md-6'>
              <h2>Fiercly Independent</h2>
              <h4>
                Proudly brewed in the heart of the Alamo City
              </h4>
              <h4>
                Serving the 1.5 million residents of San Antonio and the rest of the great state of Texas
              </h4>
              <p>
                Looking to book an event at the Beer Garden or the Tap Room?
              </p>
              <p>
                contact us at 210-872-5589 for more info
              </p>
            </div>
            <div className='col-md-6'>
              <img src={'https://static.wixstatic.com/media/57d5d7_8203fab2adc4458eb120957925999273.jpg/v1/fill/w_784,h_647,al_c,q_90,usm_0.66_1.00_0.01/57d5d7_8203fab2adc4458eb120957925999273.webp'}/>
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
}
export default Home;
