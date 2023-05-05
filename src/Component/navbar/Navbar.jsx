import React, { useState } from 'react'
import './Navbar.scss';
import logo from '../../Image/logo.png'
import profile from '../../Image/profile1.jpg'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
const Navbar = () => {

    const [isScrolled,setIsScrolled]=useState(false);
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src={logo}/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src={profile}/>
                <div className='profile'>
                    <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <span>Setting</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
