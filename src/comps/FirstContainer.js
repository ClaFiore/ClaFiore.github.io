import React, {useState} from 'react'
import './first.css'
import Mynavbar from './Mynavbar'
import Main from './Main'
import Myfooter from './Myfooter'


const FirstContainer = (props) => {
    const [menu, setMenu] = useState('home')
    const [projectDisplay, setProjectDisplay] = useState('all')
    const [readblog, setReadblog] = useState('all')

    return(
        <div id='one'>
            <Mynavbar setMenu={setMenu} menu={menu} setProjectDisplay={setProjectDisplay} setReadblog={setReadblog}/>
            <Main menu={menu} projectDisplay={projectDisplay} setProjectDisplay={setProjectDisplay} readblog={readblog} setReadblog={setReadblog}/>
            <Myfooter />
        </div>
    )
}


export default FirstContainer