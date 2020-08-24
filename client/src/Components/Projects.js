import React from 'react'
import NavBar from './Navbar/NavBar'
import './CSS/Projects.css'
import Folder from './Navbar/icons/project.png'
import { useState } from 'react'
import {Animated} from 'react-animated-css'
import Arrow from './CSS/img/arrow.png'
import dropDown from './Images/dropdown.png'
import shelterPage from './Images/shelterpage.png'
import volPage from './Images/volpage.png'
import githubLogo from './Navbar/icons/github.png'
import regLogin from './Images/regLogin.png'
import userHome from './Images/userHome.png'
import friendPage from './Images/friendPage.png'
import socket from './Images/socketIO.png'

const Projects = () => {
    const [projectOne, setprojectOne] = useState(true)
    const [projectTwo, setprojectTwo] = useState(false)
    const [slideOne, setslideOne] = useState(true)
    const [slideTwo, setslideTwo] = useState(false)
    const [slideThree, setslideThree] = useState(false)
    const [slideFour, setslideFour] = useState(false)
    const [viewCount, setViewCount] = useState(0)
    // const [projectThreeBool, setProjectThreeBool] = useState(false)


    const LeftArrowHandler = () => {
            if(viewCount === 3){
                setViewCount(2)
                setslideFour(false)
                setslideThree(true)
            }
            else if(viewCount === 2){
                setViewCount(1)
                setslideThree(false)
                setslideTwo(true)
            }
            else if(viewCount === 1){
                setViewCount(0)
                setslideTwo(false)
                setslideOne(true)
            }
            else if(viewCount === 0){
                setViewCount(3)
                setslideOne(false)
                setslideFour(true)
            }
        }
    
    const RightArrowHandler = () => {
            if(viewCount === 0){
                setViewCount(1)
                setslideTwo(true)
                setslideOne(false)
            }
            else if(viewCount === 1){
                setViewCount(2)
                setslideTwo(false)
                setslideThree(true)
            }
            else if(viewCount === 2){
                setViewCount(3)
                setslideThree(false)
                setslideFour(true)
            }
            else if(viewCount === 3){
                setViewCount(0)
                setslideFour(false)
                setslideOne(true)
            }
            
        }
    
        const petPartyHandler = () => {
            setprojectOne(true)
            setprojectTwo(false)
            setslideOne(true)
            setslideThree(false)
            setslideTwo(false)
            setslideFour(false)
        }

        const facebookCloneHandler = () => {
            setprojectOne(false)
            setprojectTwo(true)
            setslideOne(true)
            setslideThree(false)
            setslideTwo(false)
            setslideFour(false)
        }

    return (
        <div className='projectcontainer'>
            <Animated animationIn="bounceIn" animationOut="bounceOut" isVisible={true}>
                <img src={Folder} alt='folder'
                style={{height: "120px", width: '120px',
                position: 'relative', right: '20px',}} 
                />
                <h1 className='pageTitle'>Projects</h1>
                <NavBar />
                <button onClick={ petPartyHandler } className='link-button'>Pet Party</button>
                <p className='seperator'> | </p>
                <button onClick={ facebookCloneHandler } className='link-button'>Facebook Clone</button>
            </Animated>
            <div className='LeftArrow'>
            <Animated animationIn="bounceIn" animationOut="bounceOut" isVisible={true}>
                    <img src={Arrow} alt='arrow' onClick={ LeftArrowHandler } className="LArrow"/>
                    <p>Prev</p>
            </Animated>
            </div>
            <div className="project">
            {
                projectOne?slideOne?
                    <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <div className='projectDesc'>
                            <h1 className='projTitle'>Pet Party</h1>
                            <p>Pet Shelter and Volunteer Database</p>
                            <h4 className='WIP'>Current Work In Progress</h4>
                            <p className='Desc'>
                                Website for pet shelters and volunteer's alike. 
                                Helps Sheter to be able to easily search for volunteer's available in their city
                                in case they need more help.
                                in the long term it will have file-uploading for applications 
                                as well as a list of registred volunteer's that have been approved to help per shelter
                            </p>
                            <div className='col4'>
                            <ul>
                                <h4 className='listHead'>Languages Used</h4>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    HTML5
                                </li>
                                <li>
                                    Cascading Style Sheets (CSS)
                                </li>
                            </ul>
                            </div>
                            <div className='col4'>
                                <ul>
                                    <h4 className='listHead'>Frameworks and Library's</h4>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Express
                                    </li>
                                </ul>
                            </div>
                            <div className='col4'>
                                <ul>
                                    <h4 className='listHead'>Database</h4>
                                    <li>
                                        MongoDB
                                    </li>
                                    <li>
                                        Mongoose
                                    </li>
                                </ul>
                            </div>
                            <div className='col4'>
                                <ul>
                                    <h4 className='listHead'>Other Technologies Used</h4>
                                    <li>
                                        Google Maps(Geocoded address api calls for lat and lng)
                                    </li>
                                    <li>
                                        Node.Js
                                    </li>
                                    <li>
                                        Axios
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectOne?slideTwo?
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <img src={dropDown} alt="" className='webPageimg'/>
                        <div className='infoCol'>
                            <ul>
                                <h3 style={{marginBottom: '10px'}}>Features and Technologies</h3>
                                <li>
                                    Api generated state and city dropdown using JQuery and Ajax
                                </li>
                                <li>
                                    Styling done with CSS
                                </li>
                                <li>
                                    Can toggle form with the use of volunteer and shelter tabs
                                </li>
                                <li>
                                    hyperlink styled button swtiches between login and registration
                                </li>
                                <li>
                                    http only cookie created upon login or registration using JWT-Web-Tokens
                                </li>
                            </ul>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectOne?slideThree?
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <img src={shelterPage} alt="" className='webPageimg'/>
                        <div className='infoCol'>
                            <ul>
                                <h3 style={{marginBottom: '10px'}}>Features and Technologies</h3>
                                <li>
                                    Google Map Integration
                                </li>
                                <li>
                                    Map latitude and longitude generated from google api call from user's registered address
                                </li>
                                <li>
                                    Use of Http Only Cookies to verify website access
                                </li>
                                <li>
                                    Log out link to clear logged in cookie
                                </li>
                            </ul>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectOne?slideFour?
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <img src={volPage} alt="" className='webPageimg'/>
                        <div className='infoCol'>
                            <ul>
                                <h3 style={{marginBottom: '10px'}}>Features and Technologies</h3>
                                <li>
                                    Use of Http Only Cookies to verify website access
                                </li>
                                <li>
                                    displays volunteers contact info 
                                </li>
                                <li>
                                    ability to log out
                                </li>
                            </ul>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectTwo?slideOne?
                    <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <div className='projectDesc'>
                            <h1 className='projTitle'>Your Face</h1>
                            <p>Facebook Clone Coding Dojo Group Project</p>
                            <h4 className='WIP'>3 person Project for 5 days</h4>
                            <p className='Desc'>
                                I had the pleasure of working with two others for out project week during out MERN stack for coding dojo. 
                                We chose to make a facebook clone, still not complete as we had 5 days to work on it. 
                                Has working Login Regisration as well as the ability to post and make comments. 
                                You are able to search for friends and them to your friends list.
                                File upload for profile pics using amazon S3. 
                                There were plans for a socket IO chat but it only was half completed as it dosen't have a second connection for a client at the moment
                            </p>
                            <div className='col4'>
                            <ul>
                                <h4 className='listHead'>Languages Used</h4>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    HTML5
                                </li>
                                <li>
                                    Cascading Style Sheets (CSS)
                                </li>
                                <li>
                                    Minor BootStrap
                                </li>
                            </ul>
                            </div>
                            <div className='col4'>
                                <ul>
                                    <h4 className='listHead'>Frameworks and Library's</h4>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Express
                                    </li>
                                </ul>
                            </div>
                            <div className='col4'>
                                <ul>
                                    <h4 className='listHead'>Database</h4>
                                    <li>
                                        MongoDB
                                    </li>
                                    <li>
                                        Mongoose
                                    </li>
                                    <li>
                                        Amazon s3
                                    </li>
                                </ul>
                            </div>
                            <div className='col4'>
                                <ul>
                                    <h4 className='listHead'>Other Technologies Used</h4>
                                    <li>
                                        Socket IO
                                    </li>
                                    <li>
                                        Node.Js
                                    </li>
                                    <li>
                                        Axios
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectTwo?slideTwo?
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <img src={regLogin} alt="" className='webPageimg'/>
                        <div className='infoCol'>
                            <ul>
                                <h3 style={{marginBottom: '10px'}}>Features and Technologies</h3>
                                <li>
                                    Styling done with CSS and BootStrap
                                </li>
                                <li>
                                    http cookie created upon login or registration using JWT-Web-Tokens
                                </li>
                            </ul>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectTwo?slideThree?
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <img src={userHome} alt="" className='webPageimg'/>
                        <div className='infoCol'>
                            <ul>
                                <h3 style={{marginBottom: '10px'}}>Features and Technologies</h3>
                                <li>
                                    Use of Http Cookies to verify website access
                                </li>
                                <li>
                                    Log out link to clear logged in cookie
                                </li>
                                <li>
                                    ability to post and make comments
                                </li>
                                <li>
                                    ability to upload a profile picture
                                </li>
                            </ul>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            {
                projectTwo?slideFour?
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" isVisible={true}>
                        <img src={friendPage} alt="" className='webPageimg'/>
                        <div className='infoCol'>
                            <ul>
                                <h3 style={{marginBottom: '10px'}}>Features and Technologies</h3>
                                <li>
                                    Ability to search for friends by name
                                </li>
                                <li>
                                    can add or remove friends from results of search
                                </li>
                                <li>
                                    Use of Http Only Cookies to verify website access
                                </li>
                            </ul>
                        </div>
                    </Animated>
                :
                ""
                :
                ""
            }
            </div>
            <div className='RightArrow'>
            <Animated animationIn="bounceIn" animationOut="bounceOut" isVisible={true}>
                    <img src={Arrow} alt="arrow" onClick={ RightArrowHandler } className="RArrow"/>
                    <p>Next</p>
            </Animated>
            </div>
            {
                projectOne?
                <div className='githubLink'>
                <img src={githubLogo} alt="" style={{width: "30px", height: "30px" , marginRight: "15px", position:"relative", top:"4px"}}/>
                <a href="https://github.com/NolanRWallace/Pet-Party" style={{fontSize: '30px', color: 'black', fontWeight:'bold'}}>GitHub Repository</a>
                </div>
                :
                <div className='githubLink'>
                <img src={githubLogo} alt="" style={{width: "30px", height: "30px" , marginRight: "15px", position:"relative", top:"4px"}}/>
                <a href="https://github.com/DilunArtemis/Project-Obsidian" style={{fontSize: '30px', color: 'black', fontWeight:'bold'}}>GitHub Repository</a>
                </div>
            }
            {/* <div className='footer'>
            <h3 style={{ backgroundColor:'white', width:'300px', margin: 'auto' }}>Click Arrow for next project</h3>
            <img src={Arrow} alt="" className="Darrow" />
        </div> */}
        </div>
    )
}

export default Projects
