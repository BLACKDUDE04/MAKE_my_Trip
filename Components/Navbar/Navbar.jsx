import React, {useState} from 'react'
import './navbar.css'
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import logo from '../../Assets/logo.png'

const Navbar = () =>   {
    const [active, setActive] = useState('navBar')

    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar = ()=>{
        setActive('navBar')
    }

    return(
       <section className='navBarSection'>
            <header className="header flex">
       
                <div className="logoDiv">
                     <a href='#' className="logo flex">
                        <h1 className="h1"><img className="logo1" src={logo} alt="logo"  /> with Pillai</h1>
                     </a>
                </div>
        
                <div className= {active}>
                    <ul className="navLists flex">
               
                         <li className="navItem">
                             <a href="#" className="navLink">HOME</a>
                        </li>

                        <li className="navItem">
                             <a href="#" className="navLink">PACKEGES</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">SHOP</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">ABOUT</a>
                        </li>     

                        <li className="navItem">
                            <a href="#" className="navLink">PAGES</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">NEWS</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">CONTACT</a>
                        </li>

                        <button className='btn'>
                          <a href="#">BOOK NOW</a>
                         </button>
                    </ul>

                    <div onClick = {removeNavbar} className="closeNavbar">
                        <IoCloseCircleSharp className= "icon" />
                    </div>
                </div>

                <div onClick = {showNav} className="toggleNavbar">
                      <TbGridDots className='icon' />
                </div>
        
            </header>
        </section>
    )
}

export default  Navbar