import React from 'react'
import '../Footer/footer.css'
const Footer = () => {
    return (
        <div className='footerpage'>
            <div className="footer_container">
                <div className="footer_section_one">
                    <h1 className='footer_section_one_heading'>BANKER DAD</h1>
                    <p className='footer_section_one_heading_content'>© RankerDao. All Rights Reserved 2022</p>
                </div>
                <div className="footer_aection_two">
                    <a href="#" className='footer_aection_two_heading'>TELEGRAM</a>
                    <a href="#" className='footer_aection_two_heading'>TWITTER</a>
                    <a href="#" className='footer_aection_two_heading'>DISCORD</a>
                    <a href="#" className='footer_aection_two_heading'>INSTAGRAM</a>
                    <a href="#" className='footer_aection_two_heading'>INSTAGRAM</a>
                </div>
                <div className="footer_aection_two">
                    <a href="#" className='footer_aection_two_heading'>INVENTORY</a>
                    <a href="#" className='footer_aection_two_heading'>$RANKER</a>
                    <a href="#" className='footer_aection_two_heading'>MINI BADGE</a>
                    <a href="#" className='footer_aection_two_heading'>LITEPAPER</a>
                </div>
            </div>
        </div>
    )
}

export default Footer