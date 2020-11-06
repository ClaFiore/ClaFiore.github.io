import React from 'react'
import Tasker from './Tasker'
import TableFinder from './TableFinder'
import BList from './BList'

const Projects = () => {
    return (
        <div>
            <h1>PROJECTS</h1>
            <div className='projectsContainerDiv'>
                <Tasker />
                <TableFinder />
                <BList />
            </div>
        </div>
    )
}

export default Projects 