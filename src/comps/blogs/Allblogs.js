import React from 'react'
import Blogcard from './Blogcard'
import './blogs.css'

const Allblogs = props => {

    return(
        <div id='cardsContainer'>
            {props.articles.map(blogcard => <Blogcard blogcard={blogcard} key={blogcard.title}/>)}
        </div>
    )
}

export default Allblogs