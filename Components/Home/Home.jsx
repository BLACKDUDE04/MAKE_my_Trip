import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { TbApps } from "react-icons/tb";


const Home = () =>   {
    return(
<section className='home'>
    <div className="overlay"></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>
    <div className="homeContent container">
        <div className="textDiv">
            <span className="smallText">
              Holiday Packages  
            </span>
            <h1 className="homeTitle">
                Search Your Holiday
            </h1>
        </div>

        <div className="cardDiv">
            <div className="destinationInput">
                <label htmlFor="city">Serach your Destination:</label>
                <div className="input flex">
                    <input type="text" placeholder="Enter city name" />
                    <GrLocation className='icon' />

                </div>
            </div>

            <div className="dateInput">
                <label htmlFor="date">Select your date:</label>
                <div className="input flex">
                    <input type="date" />

                </div>
            </div>

            
            <div className="priceInput">
                <div className="label_total flex">
                    <label htmlFor="price">Max price:</label>
                    <h3 className="total">Rs.500000</h3>
                </div>
                <div className="input flex">
                    <input type="range" max="5000000" min="1000" />
                </div>
            </div>

            <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
            </div>
        </div>
       
        <div className="homeFooterIcons">
            
            <div className="rightIcons">
            <FaFacebook className="icon"/>
            <FaInstagramSquare className="icon"/>
            </div>

            <div className="leftIcons">
            <FaList className="icon"/>
            <TbApps className="icon"/>
            </div>

        </div>
    </div>

</section>
    )
}

export default  Home