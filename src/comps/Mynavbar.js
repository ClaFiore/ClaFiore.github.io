import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Spring} from 'react-spring/renderprops'
import './mynav.css'


const Mynavbar = (props) => {

    const handleClickProjects = () => {
        props.setMenu('projects')
        props.setProjectDisplay('all')
    }


    return(
        <div id='greaterNavbarContainer'>
            <Navbar id='nav'>

                <Spring             //social media icons
                    from={{opacity: 0, marginLeft: -500}}
                    to={{opacity:1, marginLeft: 0}}
                    config={{duration: 1500}}
                    >
                    { cssprops => (
                            <div id='menuDiv'>
                                <button style={cssprops} className='menu-btn' onClick={() => props.setMenu('home')}>home</button>
                                <button style={cssprops} className='menu-btn' onClick={() => props.setMenu('about')}>about</button>
                                <button style={cssprops} className='menu-btn' onClick={() => handleClickProjects()}>projects</button>
                                <button style={cssprops} className='menu-btn' onClick={() => props.setMenu('blogs')}>articles</button>
                            </div>
                            )}
                </Spring>
                <Spring             //social media icons
                    from={{opacity: 0, marginRight: -500}}
                    to={{opacity:1, marginRight: 0}}
                    config={{duration: 1500}}
                    >
                    { cssprops => (
                    <div id='socialIconsDiv'>
                    <a style={cssprops} target="_blank" rel="noopener noreferrer" href="mailto:claborghini@gmail.com" className="fa fa-envelope"></a>  
                    <a style={cssprops} target="_blank" rel="noopener noreferrer" href="https://github.com/clafiore" className="fa fa-github"></a>  
                    <a style={cssprops} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/claudia-borghini/" className="fa fa-linkedin"></a>
                    <a style={cssprops} target="_blank" rel="noopener noreferrer" href="https://claborghini.medium.com/" className="fa fa-medium"></a>
                    </div>
                    )}
                </Spring>

            </Navbar>
            <Spring             //social media icons
            from={{opacity: 0, marginLeft: -500}}
            to={{opacity:1, marginLeft: 0}}
            config={{duration: 1500}}
            >
            { cssprops => (
                <div id='backbuttonProj'>
                 {props.projectDisplay !== 'all' && props.menu === 'projects' ? <button style={cssprops} className='menu-btn backBtn' onClick={() => handleClickProjects()}>Back to all projects</button> : null}
                 </div>
            )}
            </Spring>
        </div>
    )
}

export default Mynavbar