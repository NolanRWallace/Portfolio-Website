import React from 'react'
import profilePic from './Images/me.jpg'
import './CSS/homeStyle.css'
import {Animated} from 'react-animated-css'
import NavBar from './Navbar/NavBar'

const Home = () => {
    return (
        <div className="homecontainer">
            <div className="introContainer">
            <Animated animationIn="fadeInDown" animationOut='fadeOutUp' isVisible={true}>
            <div className="profilePic">
                <img src={profilePic} alt=""  style={{height: "100px", width: "100px", borderRadius: "25%"}} />
            </div>
            <div className="nameTitle">
                <h3 className="name">Nolan Wallace</h3>
                <h4 className="title">Junior Web Developer</h4>
            </div>
                <div>
                <p className="info">Got into the Manufacturing industry out of High School, where I self-taught myself how to program
                    CNC mills. I developed those skills for 8 years before deciding I wanted to learn computer
                    programming. I Just recently graduated from Coding Dojo boot-camp with a triple black belt, the
                    highest level of achievement in the program. At the Dojo I learned 3 stacks of programming
                    languages C#, Python, and MERN. I am now looking for a job in the industry as a junior web
                    developer while I continue to develop my newfound skills
                </p>
                </div>
            </Animated>
            </div>
            <NavBar />
        </div>
        
    )
}

export default Home
