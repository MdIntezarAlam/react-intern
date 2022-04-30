import React from 'react'
import '../Homepage_two/homepage_two.css';
import box_1 from '../../../assets/jpg_logo/box_1.jpg'
import box_3 from '../../../assets/jpg_logo/box_3.jpg'
const Homepage_two = () => {
    return (
        <div className='homepage_two'>
            <div className="home_two_container">
                <div className="home_two_container_one">YOUR</div>
                <div className="home_two_container_two">ADVENTURE</div>
                <div className="home_two_container_three">STARTS NOW</div>
                <div className="home_two_container_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem voluptatibus quo odit culpa esse fuga! Corporis iste voluptates accusamus ipsa aperiam, eos iure rem reprehenderit</p>
                </div>
                <div className="home_two_container_content_second">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem voluptatibus quo odit culpa esse fuga! Corporis iste voluptates accusamus ipsa aperiam, eos iure rem reprehenderit</p>
                </div>
                <div className="home_two_container_box">
                <div className="one_box_img"><img src={box_1}/></div>
                <div className="one_box_img"><img src={box_3}/></div>
                <div className="one_box_img"><img src={box_1}/></div>
                <div className="one_box_img"><img src={box_3}/></div>
                </div>
            </div>
        </div>
    )
}

export default Homepage_two