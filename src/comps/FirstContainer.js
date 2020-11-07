import React, {useState} from 'react'
import './first.css'
import Mynavbar from './Mynavbar'
import Main from './Main'
import Myfooter from './Myfooter'


const FirstContainer = (props) => {
    const [menu, setMenu] = useState('home')

    return(
        <div id='one'>
            <Mynavbar setMenu={setMenu} menu={menu}/>
            <Main menu={menu}/>
            <Myfooter />
        </div>
    )
}


export default FirstContainer