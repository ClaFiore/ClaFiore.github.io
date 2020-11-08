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

    const handleClickBlogs = () => {
        props.setMenu('blogs')
        props.setReadblog('all')
    }

    return(
        <div>
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
                                <button style={cssprops} className='menu-btn' onClick={() => handleClickBlogs()}>blog</button>
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
        </div>
    )
}

export default Mynavbar