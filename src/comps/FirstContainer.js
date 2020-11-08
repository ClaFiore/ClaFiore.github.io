import React, {useState, useEffect} from 'react'
import './first.css'
import Mynavbar from './Mynavbar'
import Main from './Main'
import Myfooter from './Myfooter'


const FirstContainer = (props) => {
    const [menu, setMenu] = useState('home')
    const [projectDisplay, setProjectDisplay] = useState('all')
    const [readblog, setReadblog] = useState('all')

    const [fetchedBlogs, setFetchedBlogs] = useState(false)
    const [articles, setArticles] = useState('')

    useEffect(()=> {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@claborghini')
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'ok'){
                setFetchedBlogs(true)}
            setArticles(data.items)
        })
    }, [])

    return(
        <div id='one'>
            <Mynavbar setMenu={setMenu} menu={menu} setProjectDisplay={setProjectDisplay} setReadblog={setReadblog}/>
            <Main menu={menu} projectDisplay={projectDisplay} setProjectDisplay={setProjectDisplay} readblog={readblog} setReadblog={setReadblog} fetchedBlogs={fetchedBlogs} articles={articles}/>
            <Myfooter />
        </div>
    )
}


export default FirstContainer