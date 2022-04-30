import React from 'react'
import './homepage.css';
import Homepage_one from './Homepage_one/Homepage_one';
import Homepage_two from './Homepage_two/Homepage_two';
import Homepage_three from './Homepage_three/Homepage_three';
import Homepage_four from './Homepage_four/Homepage_four';
import Homepage_five from './Homepage_five/Homepage_five';
import Homepage_six from './Homepage_six/Homepage_six';
import Homepage_seven from './Homepage_seven/Homepage_seven';
import Homepage_eight from './Homepage_eight/Homepage_eight';
import Buttompage from './buttompage/Buttompage';
import Footer from '../Footer/Footer';
import Homepage_nine from './Homepage_nine/Homepage_nine';
import Homepage_ten from './Homepage_ten/Homepage_ten';


const Homepage = () => {
  return (
    <div className="homepage_containers">
      <div className='homepages'>
        <div className="homepage_container">
          <div className="homepage_container_heading">
            <h1 className='get_heading'>GET</h1>
            <h1 className='set_heading'>SET,</h1>
          </div>
          <div className="homepage_container_heading">
            <h1 className='get_heading'>PLAY,</h1>
            <h1 className='set_heading'>EARN,</h1>
          </div>
          <div className="homepage_container_heading">
            <p className='lorem_content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum accusantium facilis consectetur ipsa cupiditate? Enim optio aliquid assumenda expedita ipsum minima, laudantium aperiam impedit corrupti repellendus atque quia at omnis, vel quo ex officia quisquam, vero molestias. Consequuntur, illum rem?</p>
          </div>
          <div className="homepage_container_heading_btn">
            <button className='homepage_container_btn'>JOIN OUR GUILD NOW</button>
          </div>
        </div>
      </div>
      
      {/* All Components */}
      <div className="homepages_container">
        <Homepage_one />
        <Homepage_two />
      </div>
      <div className="homepages_container">
        <Homepage_three />
        <Homepage_four />
      </div>
      <div className="homepages_container">
        <Homepage_five />
        <Homepage_six />
      </div>
      <div className="homepages_container">
        <Homepage_seven />
        <Homepage_eight />
      </div>
      <div className="homepages_container">
        <Homepage_nine />
        <Homepage_ten />
      </div>
      <Buttompage />
      <Footer />
    </div>
  )
}

export default Homepage