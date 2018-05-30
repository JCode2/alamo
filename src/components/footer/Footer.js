import React, {Component} from 'react';

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className='footer'>
        <div className='col-md-4'>
          <ul className='footerList'>
            <li><p>follow us</p></li>
            <li>
            <h2 className='fab fa-twitter fa-3x'></h2>
            <h2 className='fab fa-facebook-square fa-3x'></h2>
            <h2 className='fab fa-instagram fa-3x'></h2>
            </li>
          </ul>
          </div>
          <div className='col-md-4'>
            <h4>CONTACT US</h4>
            <p>ADDRESS</p>
            <h2>415 Burnet Street San Antonio, TX 78202</h2>
            <p>PHONE</p>
            <h2>210-872-5589</h2>
            <p>EMAIL</p>
            <h2>email[@]email.com</h2>
            <p></p>
          </div>
          <div className='col-md-4'>
            <h4>BREWERY HOURS</h4>
            <h2>3pm - 9pm MON. - THURS.</h2>
            <h2>3pm - 12am FRIDAY</h2>
            <h2>12pm - 12am SATURDAY</h2>
            <h2>12pm - 9pm SUNDAY</h2>

            <h4 className='tours'>BREWERY TOURS</h4>
            <h2>6pm THURSDAYS</h2>
            <h2>1pm SATURDAYS.</h2>
                <p className="copyright">&#169; {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
