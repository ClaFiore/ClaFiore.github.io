import React from 'react'

import About from './About'
import Projects from './Projects'
import Blog from './Blog'
import Resume from './Resume'
import Contacts from './Contacts'

const Display = () => {
    return(
        <div>
            <About/>
            <Projects />
            <Blog />
            <Resume />
            <Contacts />
        </div>
    )
}

export default Display