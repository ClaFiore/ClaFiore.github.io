import React from 'react'
import './about.css'
import cla from '../images/cla.jpeg'

const About = (props) => {
    return(
        <div id='about'>

            <div id='innerAbout'>

                <div id='claimgDiv'>
                    <img src={cla} id='claImg'/>
                </div>
                <div id='contentAboutDiv'>
                    <h1>ABOUT</h1>
                    <p>Hi there! I'm Claudia, a software engineer based in Boston, MA and Washington, DC.</p>
                    <p>I was born and raised in Milan, Italy. Since I was a little girl I have been fascinated by technological advancement
                    and innovation and I grew a desire of, one day, being a part of it. </p>
                    <p>Today, a few years and 3 degrees later, I'm proud to be a Software Engineer, and a Flatiron School graduate.
                    </p>
                </div>
                
            </div>

            <div id='facts'>
                FACTS
            </div>
        </div>
    )
}
export default About 