import React from 'react'
import Tasker from './Tasker'
import TableFinder from './TableFinder'
import BList from './BList'

const Projects = () => {
    return (
        <div>
            <h1>PROJECTS</h1>
            <ul>
                <li><Tasker /></li>
                <li><TableFinder /></li>
                <li><BList /></li>
            </ul>
        </div>
    )
}

export default Projects 