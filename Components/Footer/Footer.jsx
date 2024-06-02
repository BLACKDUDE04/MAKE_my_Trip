import React from 'react'
import './footer.css'
import video2 from "../../Assets/video2.mp4"
import { IoSend } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { ImTwitter } from "react-icons/im";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () =>   {
    return(
        <section className='footer'>
            <div className="videoDiv">
            <video src={video2} muted autoPlay loop type="video2/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with Us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>
                        SEND <IoSend className='icon'/>

                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                            <MdOutlineTravelExplore className='icon' /> Travel
                            </a>
                        </div>

                        <div className="footerParagrah">

                        </div>

                        <div className="footerSocials">
                        <ImTwitter className='icons'/>
                        <FaSquareYoutube className='icons'/>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  Footer