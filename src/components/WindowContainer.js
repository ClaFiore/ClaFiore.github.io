import React from 'react'
import './windowContainer.css'

const WindowContainer = () => {
    return(
        <div id='windowContainerDiv'>
            <div id='windowClaItemDiv'>
                <h1>CLAUDIA</h1>
                <h1>BORGHINI</h1>
                <h3>Software Engineer</h3>
            </div>
            <div id='windowMenuItemDiv'>
                <button className='menu-btn'>About</button>
                <button className='menu-btn'>Projects</button>
                <button className='menu-btn'>Blog</button>
                <button className='menu-btn'>Resume</button>
                <button className='menu-btn'>Contact Me</button>
            </div>
        </div>
    )
}

export default WindowContainer