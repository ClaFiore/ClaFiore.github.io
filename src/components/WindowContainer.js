import React from 'react'
import './windowContainer.css'
import Display from './Display'
import Footer from './Footer'

const WindowContainer = () => {
    return(
        <div id='windowDiv'>
            <div id='upperWindowContainerDiv'>
                <div id='windowClaItemDiv'>
                    <h1 className='name'>Claudia</h1>
                    <h1 className='name'>Borghini</h1>
                    <h3>Software Engineer</h3>
                </div>
                <div id='windowMenuItemDiv'>
                    <button className='menu-btn'>about</button>
                    <button className='menu-btn'>projects</button>
                    <button className='menu-btn'>blog</button>
                    <button className='menu-btn'>resume</button>
                    <button className='menu-btn'>contacts</button>
                </div>
            </div>
            <div id='displayDiv'>   
                <Display />
            </div>
            <div id='footerDiv'>
                <Footer />
            </div>
        </div>
    )
}

export default WindowContainer