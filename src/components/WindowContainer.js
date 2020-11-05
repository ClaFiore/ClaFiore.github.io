import React, {useState, useRef} from 'react'
import './windowContainer.css'
import './intro.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Blog from './Blog'
import Resume from './Resume'
import Contacts from './Contacts'
import Footer from './Footer'

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
                <div id='menuDiv'>
                    <button className='menu-btn' onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>about</button>
                    <button className='menu-btn' onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>skills</button>
                    <button className='menu-btn' onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>projects</button>
                    <button className='menu-btn' onClick={() => blogRef.current.scrollIntoView({ behavior: 'smooth' })}>blog</button>
                    <button className='menu-btn' onClick={() => resumeRef.current.scrollIntoView({ behavior: 'smooth' })}>resume</button>
                    <button className='menu-btn' onClick={() => contactsRef.current.scrollIntoView({ behavior: 'smooth' })}>contacts</button>
                </div>
                <div id='contentDiv'>
                    <div id='introDiv'>
                            <h1 id='claudiaborghiniTitle'>CLAUDIA BORGHINI</h1>
                            <p className='helloWorldP'>Welcome to my world!</p>
                            <h3>I'm a software engineer, specialized in building exceptional websites, applications, and everything in between.</h3>
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