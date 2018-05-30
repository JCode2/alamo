import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "./About.css"

class About extends Component {
  render(){
    return(
      <div>
      <Navbar/>
      <div className="jumbotron">
        <h1 className="head">THE STORY</h1>
        </div>
        <div className='container'>
          <div className="row">
            <div className='col-md-6'>
                <h3>The ALAMO beer short story….</h3>
                <p>Once upon a time, a long, long, time ago, there was a beer called “Alamo”.   The year was 1884 and the brewery was Lone Star Brewing Company.  The good citizens of San Antonio loved this locally brewed beer made with the best barley malt, saazer hops and Texas rice.  Then in 1918 came prohibition and the supply of “Alamo” dried up along with all the other beers across this nation.  In 1933 prohibition ended and the nation was drinking legal beer again, but not “Alamo”.  Seems that the dry spell caused people to forget the “Alamo” brand and the trade name went dormant.</p>
            </div>
            <div className='col-md-6'>
                <h3>Your Beer is From Where?</h3>

                <p>Now skip ahead to the mid 1990’s and the San Antonio arrival of Eugene Simor from his home town of Santa Ana, California (no relation to General Santa Anna of Mexico but it does make for an interesting side story and gets even better with the mention of Eugene’s brother who actually lives in a small town called Alamo, California).  Eugene’s legendary thirst for local brews was satisfied by the likes of Frio, Yellow Rose, and if nothing else, Lone Star… all brewed right here in San Antonio.  Well you might be able to guess the next part of the story.  Frio did not last.  Yellow Rose did not make it.  And the coup d’état and last straw was the closing of Lone Star Brewery and the layoff of over 600 hard working San Antonians.
                </p>
            </div>
        </div>
        <div className="row">
          <div className='col-md-12'>
            <h3 className='real-tx-beer-title'>An Idea For a Real Texas Beer Is Born</h3>
          </div>
          <div className='col-md-6'>
              <p>
              This slap in the face was Eugene’s rally cry to follow thru with his earlier idea of brewing a beer called ALAMO.  The concept actually entered his mind 1994 when snacking from a box of Alamo Crackers (think animal crackers but Texas theme shaped) which he usually brought to his nieces and nephews on visits back to California.  The sugar buzz combined with a beer bender lead him to research the ALAMO trademark.  Surprise, surprise, surprise.  The ALAMO trademark for beer was not currently taken.  It did not take long for a history lesson to tell Eugene to “Come and Take It” which he did by starting the legal process to secure the brand.
              </p>
              <img className='alamoLogo' src={"https://i2.wp.com/www.twentysomethingsa.com/wp-content/uploads/2015/03/alamobeer-2164.jpg?resize=940%2C627"}/>
              </div>
              <div className='col-md-6'>
              <p>
              He actually brewed and sold his first ALAMO with the help of Frio Brewing Company that was still around at the time in 1997.  Armed with nothing more than a trademark he was ready to fight in the beer war.  Unfortunately, Frio and Yellow Rose quickly became casualties and left nowhere local for ALAMO to be brewed.  That is until 2002 when he discovered Real Ale Brewing Company in Blanco Texas via a story in the San Antonio Business Journal.  Real Ale was not selling their craft brews in San Antonio at that time and was brewing only a few thousand barrels of beer each year out of the confines of a small basement just off Blanco town’s square.
             </p>
              <p>
              Eugene made the 50 mile trek up 281 to visit the brewery and brew some beer with the guys.  Brewing started at 6 in the morning and Eugene was there and ready help and learn.  It didn’t take too long for the owner of Real Ale, Brad Farbstein, to realize that this guy and his catchy trademark weren’t going to give up the fight.  So after a few months of working out contract details, the two entered into a special licensing agreement for the brewing of ALAMO Golden Ale. In October of 2003, ALAMO Golden Ale was flowing on tap in San Antonio.
              </p>
          </div>
            <div className='col-md-6'>
              <h3>Taking ALAMO to the World…Well Just Texas…For Now</h3>
              <p>
              In July of 2009 ALAMO got its third big break, a statewide distribution deal with Ben E. Keith Specialty Beverages (BEK).  The first lucky break was when Real Ale said yes to brew it and the second was when HEB grocery stores said they wanted to put it in their San Antonio stores.  BEK doubled ALAMO sales in only a few short months and is continuing to focus on increasing distribution throughout Texas.  BEK has even wrapped one delivery van with the ALAMO logo.  BEK’s fleet of delivery trucks are a real upgrade from the days of Eugene delivering beer from the back of his wife’s minivan (note:  whenever Eugene was driving the minivan it was called by the more macho term ‘beer wagon’).
              </p>
            </div>
            <div className='col-md-6'>
              <img className='alamoLogo' src={"http://www.texasbeerspot.com/wp-content/uploads/2016/01/alamo-beer-co.png"}/>
            </div>
          </div>
          </div>
          <Footer/>
          </div>
    );
  }
}

export default About;
