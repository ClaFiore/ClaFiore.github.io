import React, {useState} from 'react'
import './first.css'
import Mynavbar from './Mynavbar'
import Main from './Main'
import Myfooter from './Myfooter'


const FirstContainer = () => {
    return(
        <div id='one'>
            <Mynavbar />
            <Main />
            <Myfooter />
        </div>
    )
}


export default FirstContainer