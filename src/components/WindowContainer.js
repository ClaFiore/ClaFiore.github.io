import React, {useState, useRef} from 'react'
import './windowContainer.css'
import './intro.css'
import './menu.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Blog from './Blog'
import Resume from './Resume'
import Contacts from './Contacts'
import Footer from './Footer'
import {Spring} from 'react-spring/renderprops'


const WindowContainer = () => {
    const aboutRef = useRef()
    const skillsRef = useRef()
    const projectsRef = useRef()
    const blogRef = useRef()
    const resumeRef = useRef()
    const contactsRef = useRef()


    return(
        <div id='containerDiv'>
            <div id='windowDiv'>
            <Spring
                from={{opacity: 0, marginLeft: -500}}
                to={{opacity:1, marginLeft: 0}}
                config={{duration: 1500}}
            >
            { props => (
                <div id='menuDiv'>
                    <button style={props} className='menu-btn' onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>about</button>
                    <button style={props} className='menu-btn' onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>skills</button>
                    <button style={props} className='menu-btn' onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>projects</button>
                    <button style={props} className='menu-btn' onClick={() => blogRef.current.scrollIntoView({ behavior: 'smooth' })}>blog</button>
                    <button style={props} className='menu-btn' onClick={() => resumeRef.current.scrollIntoView({ behavior: 'smooth' })}>resume</button>
                    <button style={props} className='menu-btn' onClick={() => contactsRef.current.scrollIntoView({ behavior: 'smooth' })}>contacts</button>
                </div>
            )}
            </Spring>
                <div id='contentDiv'>
                    <div id='introDiv'>
                    <Spring
                        from={{opacity: 0, marginRight: -500}}
                        to={{opacity:1, marginRight: 0}}
                        config={{duration: 1500}}
                    >
                    { props => (
                        <div id='socialIconsDiv'>
                        <a style={props} target="_blank" rel="noopener noreferrer" href="https://github.com/clafiore" class="fa fa-github"></a>  
                        <a style={props} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/claudia-borghini/" class="fa fa-linkedin"></a>
                        <a style={props} target="_blank" rel="noopener noreferrer" href="https://claborghini.medium.com/" class="fa fa-medium"></a>
                        </div>
                        )}
                        </Spring>
                        <div>
                            <h1 id='claudiaborghiniTitle'>CLAUDIA BORGHINI</h1>
                            <p className='textP anim-typewriter'>I'm a passionate software engineer, specialized in building websites, applications, and everything in between.</p>
                        </div>
                    </div>
                    <div  id='displayDiv'>   
                        <div ref={aboutRef}><About /></div>
                        <div ref={skillsRef}><Skills /></div>
                        <div ref={projectsRef}><Projects /></div>
                        <div ref={blogRef}><Blog /></div>
                        <div ref={resumeRef}><Resume /></div>
                        <div ref={contactsRef}><Contacts /></div>
                    </div>
                </div>
            </div>
            <div id='footerDiv'>
                    <Footer />
            </div>
        </div>
    )
}

export default WindowContainer