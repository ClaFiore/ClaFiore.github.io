import React, {useState} from 'react'
import Projects from './Projects'
import './projhome.css'
import Tasker from './projects/Tasker'
import Tablefinder from './projects/Tablefinder'
import Blist from './projects/Blist'

const ProjHome = props => {

const [projectDisplay, setProjectDisplay] = useState('all')

    return(
        <div id='projhome'>
            {projectDisplay === 'all' ? <Projects setProjectDisplay={setProjectDisplay}/> : null}
            {projectDisplay === 'tasker' ? <Tasker /> : null}
            {projectDisplay === 'tablefinder' ? <Tablefinder /> : null}
            {projectDisplay === 'blist' ? <Blist /> : null}
        </div>
    )
}

export default ProjHome