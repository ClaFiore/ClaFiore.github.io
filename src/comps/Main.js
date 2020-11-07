import React from 'react'
import './main.css'
import About from './About'
import Blogs from './Blogs'
import Projects from './Projects'
import Home from './Home'

const Main = (props) => {
    return(
        <div id='main'>
            {props.menu === 'about' ? <About /> : props.menu === 'projects' ? <Projects /> : props.menu === 'blogs' ? <Blogs /> : <Home />}
            
            
            
        </div>
    )
}

export default Main