import React from 'react'
import './footer.css'
import {Spring} from 'react-spring/renderprops'

const Myfooter = () => {
    return(
        <Spring             
            from={{opacity: 0}}
            to={{opacity:1}}
            config={{duration: 1700}}
            >
            { cssprops => (
            <div id='footer' >
                <span style={cssprops}>Built and Designed by Claudia Borghini</span>
                <span style={cssprops}><a target="_blank" rel="noopener noreferrer" href="mailto:claborghini@gmail.com" style={{color: 'white', textDecoration: 'none'}}>claborghini@gmail.com</a></span>
                <span style={cssprops}>Boston, MA - New York, NY - Washington, DC</span>
            </div>
            )}
            </Spring>
    )
}

export default Myfooter