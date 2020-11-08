import React from 'react'
import './main.css'
import About from './About'
import Blogs from './Blogs'
import ProjHome from './ProjHome'
import Home from './Home'

const Main = (props) => {


    return(
        <div id='main'>
            {props.menu === 'about' ? <About /> : props.menu === 'projects' ? <ProjHome projectDisplay={props.projectDisplay} setProjectDisplay={props.setProjectDisplay}/> : props.menu === 'blogs' ? <Blogs /> : <Home />}  
        </div>
    )
}

export default Main