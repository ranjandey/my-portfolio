import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>RANJAN DEY</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/ranjan-dey/"><BsLinkedin/></a>
          <a href="https://github.com/ranjandey"><BsGithub/></a>
          {/* <a href="https://medium.com/@thakshiladb2000"><BsMedium/></a> */}
        </div>

        <div className="footer__copyright">
            <small>&copy; Ranjan Dey. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer