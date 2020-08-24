import React, { useState } from 'react'
import {Link} from '@reach/router'
import githubLogo from './icons/github.png'
import LinkedInLogo from './icons/LinkedInLogo.jpg'
import ProjectsLogo from './icons/project.png'
import TechLogo from './icons/gears.png'
import '../CSS/navBarStyle.css'
import {Animated} from 'react-animated-css'


    const NavBar = () => {
    const [animationSwitch, setAnimationSwitch] = useState(true)
        
    const SwitchBool = () => {
        setAnimationSwitch(false)
    }

    return (
        <Animated animationIn="fadeInDown" animationOut="bounceOut" isVisible={animationSwitch}>
        <div className="HeaderContainer">
            <Animated animationIn="bounceIn" animationOut="bounceOut"  isVisible={animationSwitch}>
            <div className="navBarContainer">
                <nav>
                    <Link to="/" className="navbarText">Home</Link> |&nbsp;
                    <Link to="/technologies" className="navbarText" >
                        <img src={TechLogo} alt="" style={{width: "20px", height: "20px" , marginRight: "5px", position:"relative", top:"4px"}}/>
                        Technologies
                    </Link> |&nbsp;
                    <Link to="/projects" className="navbarText">
                        <img src={ProjectsLogo} alt="" style={{width: "20px", height: "20px" , marginRight: "5px", position:"relative", top:"4px"}}/>
                        Projects
                    </Link> |&nbsp;
                    <img src={githubLogo} alt="" style={{width: "20px", height: "20px" , marginRight: "5px", position:"relative", top:"4px"}}/>
                    <a href="https://github.com/NolanRWallace" className="navbarText">
                        GitHub
                    </a> |&nbsp;
                    <img src={LinkedInLogo} alt="" style={{width: "22px", height: "22px", marginRight: "4px" , position:"relative", top:"6px"}}/>
                    <a href="https://www.linkedin.com/in/nolan-wallace-b03aa81a6/" className="navbarText">LinkedIn</a>
                </nav>
            </div>
            </Animated>
        </div>
        </Animated>
    )
}

export default NavBar
