import React from 'react'
import Card from 'react-bootstrap/Card'
import './blogs.css'

const Blogcard = props => {

    let date = new Date(props.blogcard.pubDate)
    let published = date.toDateString()

    return(
        <div className='cardDiv'>
            <h3 className='cardTitle'>{props.blogcard.title}</h3>
            <p className='publishedDate' >{published}</p>
            <p className='blogContent' >{props.blogcard.content}</p>
            <button className='readMoreBtn' >read post</button>
        </div>
    )
}
export default Blogcard