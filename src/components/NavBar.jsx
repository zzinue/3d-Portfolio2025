import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] =useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <header className={`navbar ${scrolled ?'scrolled':'not-scrolled'}`}>
            <div className="inner">
                    <a className="logo" href="#hero">
                        Victor | zzinue
                    </a>
                <nav className="desktop"
                    >
                    <ul >{navLinks.map(({link, name})=>(
                        <li key={name} className="group">
                            <a href={link} >
                                <span >{name}</span>
                                <span className="underline"></span>
                            </a>
                        </li>
                    ))}</ul>
                </nav>
                <a href="#contact" className="contact-btn group:">
                    <div className="inner">
                        <span >Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
