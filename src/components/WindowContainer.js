import React from 'react'
import './windowContainer.css'

const WindowContainer = () => {
    return(
        <div id='windowContainerDiv'>
            <div id='windowClaItemDiv'>
                <h1>CLAUDIA BORGHINI</h1>
                <h3>Software Engineer</h3>
            </div>
            <div id='windowMenuItemDiv'>
                MENU
                <button>Projects</button>
                <button>Blog</button>
                <button>Resume</button>
                <button>Contact Me</button>
            </div>
        </div>
    )
}

export default WindowContainer