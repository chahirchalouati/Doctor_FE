import React from 'react'
import headerImage from "../../Assets/pexels-artem-podrez-5752850.mp4";

function Header() {
    return (
        <div className='header' >

            <div className="header_content">
                <span>Your health is our priority</span>
                <p>Providing leading healthcare for the people of Melbourne and Victoria.</p>
            </div>
            <div className="header_image">
                <video src={headerImage} alt="" muted={true} loop={true} autoPlay={true} />

            </div>

        </div>
    )
}

export default Header
