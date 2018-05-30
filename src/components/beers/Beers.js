import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "./Beers.css"

class Beers extends Component {
    constructor(){
      super();
    }
  render(){
    return(
      <div>
      <Navbar />
      <div className="jumbotron jumbo2">
        <h1 className='head'>THE ARMORY</h1>
        </div>
        <div className='container'>
        <h3>Year Around</h3>
          <div className="beerCase row">
          <div className="col-md-2">
            <img src={"https://static.wixstatic.com/media/57d5d7_b3728c15779f4310982bfce68b22688e.png/v1/fill/w_61,h_225,al_c,usm_0.66_1.00_0.01/57d5d7_b3728c15779f4310982bfce68b22688e.png"}/>
          </div>
            <div className='col-md-2 info'>
              <h5>Alamo Golden Ale</h5>
              <p>description</p>
              <p>details</p>
            </div>
            <div className="col-md-2">
              <img src={"https://static.wixstatic.com/media/e65a0e_359059f5478f43159fa144abe2ceef23~mv2.png/v1/fill/w_60,h_225,al_c,usm_0.66_1.00_0.01/e65a0e_359059f5478f43159fa144abe2ceef23~mv2.png"}/>
            </div>
            <div className='col-md-2 info'>
              <h5>Alamo White</h5>
              <p>description</p>
              <p>details</p>
            </div>
            <div className="col-md-2">
              <img src={"https://static.wixstatic.com/media/57d5d7_bfc179c445dc48349c2c09397e80daf6.png/v1/fill/w_60,h_225,al_c,usm_0.66_1.00_0.01/57d5d7_bfc179c445dc48349c2c09397e80daf6.png"}/>
            </div>
            <div className='col-md-2 info'>
              <h5>Alamo Pilsner</h5>
              <p>description</p>
              <p>details</p>
            </div>
          </div>
          <div className="beerCase row">
          <div className="col-md-2">
            <img src={"https://static.wixstatic.com/media/57d5d7_446f0c149de54f708876569cfb38d25a.png/v1/fill/w_61,h_225,al_c,usm_0.66_1.00_0.01/57d5d7_446f0c149de54f708876569cfb38d25a.png"}/>
            </div>
            <div className='col-md-2 info'>
              <h5>Alamo German Pale Ale</h5>
              <p>description</p>
              <p>details</p>
            </div>
            <div className="col-md-2">
            <img src={"https://static.wixstatic.com/media/57d5d7_c606c751504d4bcca0794e4c03668e6a.png/v1/fill/w_61,h_230,al_c,usm_0.66_1.00_0.01/57d5d7_c606c751504d4bcca0794e4c03668e6a.png"}/>
            </div>
            <div className='col-md-2 info'>
              <h5>Alamo Amber Lager</h5>
              <p>description</p>
              <p>details</p>
            </div>
            <div className="col-md-2">
              <img src={"https://static.wixstatic.com/media/e65a0e_9f731fc44245403691932b597ef362f0~mv2.png/v1/fill/w_60,h_225,al_c,usm_0.66_1.00_0.01/e65a0e_9f731fc44245403691932b597ef362f0~mv2.png"}/>
              </div>
              <div className='col-md-2 info'>
                <h5>Alamo IPA</h5>
                <p>description</p>
                <p>details</p>
              </div>
          </div>
          </div>
          <Footer />
      </div>
    );
  }
}
export default Beers;
