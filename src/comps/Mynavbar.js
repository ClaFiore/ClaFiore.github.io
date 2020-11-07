import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Spring} from 'react-spring/renderprops'
import './mynav.css'


const Mynavbar = (props) => {
    return(
        <div>
            <Navbar id='nav'>

                <Spring             //social media icons
                    from={{opacity: 0, marginLeft: -500}}
                    to={{opacity:1, marginLeft: 0}}
                    config={{duration: 1500}}
                    >
                    { props => (
                            <div id='menuDiv'>
                                <button style={props} className='menu-btn' onClick={null}>about</button>
                                <button style={props} className='menu-btn' onClick={null}>projects</button>
                                <button style={props} className='menu-btn' onClick={null}>blog</button>
                            </div>
                            )}
                </Spring>
                <Spring             //social media icons
                    from={{opacity: 0, marginRight: -500}}
                    to={{opacity:1, marginRight: 0}}
                    config={{duration: 1500}}
                    >
                    { props => (
                    <div id='socialIconsDiv'>
                    <a style={props} target="_blank" rel="noopener noreferrer" href="mailto:claborghini@gmail.com" className="fa fa-envelope"></a>  
                    <a style={props} target="_blank" rel="noopener noreferrer" href="https://github.com/clafiore" className="fa fa-github"></a>  
                    <a style={props} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/claudia-borghini/" className="fa fa-linkedin"></a>
                    <a style={props} target="_blank" rel="noopener noreferrer" href="https://claborghini.medium.com/" className="fa fa-medium"></a>
                    </div>
                    )}
                </Spring>

            </Navbar>
        </div>
    )
}

export default Mynavbar