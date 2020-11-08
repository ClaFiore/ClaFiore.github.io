import React, {useState} from 'react'
import Projects from './Projects'
import './projhome.css'
import Tasker from './projects/Tasker'
import Tablefinder from './projects/Tablefinder'
import Blist from './projects/Blist'

const ProjHome = props => {

// const [projectDisplay, setProjectDisplay] = useState('all')

    return(
        <div id='projhome'>
            {props.projectDisplay === 'all' ? <Projects setProjectDisplay={props.setProjectDisplay}/> : null}
            {props.projectDisplay === 'tasker' ? <Tasker /> : null}
            {props.projectDisplay === 'tablefinder' ? <Tablefinder /> : null}
            {props.projectDisplay === 'blist' ? <Blist /> : null}
        </div>
    )
}

export default ProjHome