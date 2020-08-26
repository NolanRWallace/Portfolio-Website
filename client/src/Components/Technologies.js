import React from 'react'
import './CSS/Technologies.css'
import {Animated} from'react-animated-css'
import { useState } from 'react'
import Arrow from './CSS/img/arrow.png'
import HTML5 from './CSS/img/html5.png'
import CSS from './CSS/img/CSS.png'
import JQuery from './CSS/img/jquery.png'
import Python from './CSS/img/python.png'
import Django from './CSS/img/django.png'
import MySQL from './CSS/img/mysql.png'
import CSharp from './CSS/img/csharp.jpg'
import NetCore from './CSS/img/netcore.png'
import EC2Ubuntu from './CSS/img/ec2Ubuntu.png'
import Nginx from './CSS/img/nginx.png'
import MongoDB from './CSS/img/mongodb.png'
import Express from './CSS/img/express.png'
import imgReact from './CSS/img/react.png'
import NodeJS from './CSS/img/nodejs.png'
import Gears from './Navbar/icons/gears.png'
import NavBar from './Navbar/NavBar'

const Technologies = () => {
    const [display, setDipslay] = useState(false)
    const [animationSwitch1_3, setAnimationSwitch1_3] = useState(true)
    const [animationSwitch4_6, setAnimationSwitch4_6] = useState(false)



    const switchTech = () => {
        if(animationSwitch1_3){
            setAnimationSwitch1_3(false)
        }
            else if(!animationSwitch1_3){
                setAnimationSwitch1_3(true)
            }
        if(!animationSwitch4_6){
            setAnimationSwitch4_6(true)
        }
            else if(animationSwitch4_6){
                setAnimationSwitch4_6(false)
            }
        if(!display){
            setDipslay(true)
        }
            else if(display){
                setDipslay(false)
            }
    }

    return (
        <div className='container'>
            <Animated animationIn="bounceIn" animationOut="bounceOut" isVisible={true}>
            <div className="titleHead">
                <img src={Gears} alt="" className='imgHead' />
                <h1 className="pageTitle">Technologies</h1>
            <div style={{position: "relative", top: "0px"}}>
                <NavBar />
            </div>
            </div>
            </Animated>
            <Animated animationIn='slideInDown' animationOut='slideOutDown' isVisible={animationSwitch1_3}>
            {
                !display?
                <div className="colContainer">
                <div className="columns">
                    <h2 className="colHead" style={{backgroundColor: "#e34c26"}}>Web Fundamentals</h2>
                    <ul>
                        <h1 className="listHead">Languages/Framworks</h1>
                        <li>
                            HTML5
                            <img src={HTML5} alt="" className="icon" style={{position: "relative", top: "7px" }}/>
                        </li>
                        <li>
                            Cascading Style Sheets(CSS)
                            <img src={CSS} alt="" className="icon" style={{position: "relative", top: "7px"}}/>
                        </li>
                        <li>
                            JQuery
                            <img src={JQuery} alt="" className="icon" style={{position: "relative", top: "7px"}}/>
                        </li>
                    </ul>
                </div>
                <div className="columns">
                    <h2 className="colHead" style={{backgroundColor: "#386e9d", color: "#fece3e"}}>Python Stack</h2>
                    <ul>
                        <h1 className='listHead'>Languages/Framworks</h1>
                        <li>
                            Python
                            <img src={Python} alt="" className="icon" 
                            style={{position: "relative", top: "10px"}}/>
                        </li>
                        <li>
                            Django
                            <img src={Django} alt="" className="icon" 
                            style={{position: "relative", top: "10px", width: "60px"}}/>
                        </li>
                    </ul>
                </div>
                <div className="columns">
                    <h2 className="colHead" style={{backgroundColor: "#631f76"}}>C# Stack</h2>
                    <ul>
                        <h1 className="listHead">Languages/Framworks</h1>
                        <li>
                            C#
                            <img src={CSharp} alt="" className="icon" 
                            style={{position: "relative", top: "10px"}}/>
                        </li>
                        <li>
                            ASP.NET Core
                            <img src={NetCore} alt="" className="icon" 
                            style={{position: "relative", top: "10px"}}/>
                        </li>
                        <li>
                            MySQL
                            <img src={MySQL} alt="" className="icon" 
                            style={{position: "relative", top: "2px", marginLeft: "10px", width:"60px"}}/>
                        </li>
                    </ul>
                </div>
                </div>
                :
                ""
            }
            </Animated>
            <Animated animationIn='slideInDown' animationOut='slideOutDown' isVisible={animationSwitch4_6}>
            {
                display?
                <div className="colContainer">
                <div className="columns">
                <h2 className='colHead' style={{backgroundColor: "#333333"}} >
                    <span style={{color: "#279e3c"}}>M</span>
                    <span style={{color: "#c47670"}}>E</span>
                    <span style={{color: "#1f5e8e"}}>R</span>
                    <span style={{color: "#9abe55"}}>N</span>
                </h2>
                <ul>
                    <li>
                        <img src={MongoDB} alt="" className="icon" 
                        style={{position: "relative", top: "10px", left: "-5px" ,width:"110px", height: "35px"}}/>
                    </li>
                    <li>
                        <img src={Express} alt="" className="icon" 
                        style={{position: "relative", top: "10px", left: "-10px", width:"110px", height: "35px"}}/>
                    </li>
                    <li style={{position: "relative", top: "-20px"}}>
                        <img src={imgReact} alt="" className="icon" 
                        style={{position: "relative", top: "22px", left: "-10px", width:"105px", height: "55px"}}/>
                    </li>
                    <li style={{position: "relative", top: "-35px"}}>
                        <img src={NodeJS} alt="" className="icon" 
                        style={{position: "relative", top: "19px", width:"105px", height: "55px"}}/>
                    </li>
                </ul>
                </div>
                <div className="columns">
                <h2 className='colHead' style={{backgroundColor: "#f1941c"}} >Amazon Web Services</h2>
                <ul>
                    <li>
                        EC2 Instance
                    </li>
                    <li>
                        Ubuntu 18.04
                    </li>
                        <img src={EC2Ubuntu} alt="" className="icon" 
                        style={{position: "relative",  marginLeft: "10px", width:"115px", height: "50x"}}/>
                    <li>
                        Nginx
                        <img src={Nginx} alt="" className="icon" 
                        style={{position: "relative", position: "relative", top:"10px", marginLeft: "10px", width:"35px", height: "40x"}}/>
                    </li>
                </ul>
                </div>
                </div>
                :
                ""
            }
            </Animated>
            <button className='Morelink-button' onClick={ switchTech }>Click For More</button>
        </div>
    )
}

export default Technologies
