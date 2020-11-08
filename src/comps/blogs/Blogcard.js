import React from 'react'
import Card from 'react-bootstrap/Card'
import './blogs.css'

const Blogcard = props => {

    let date = new Date(props.blogcard.pubDate)
    let published = date.toDateString()




    return(
        <div className='cardDiv'>
            <Card >
                <Card.Title className='cardTitle'>{props.blogcard.title}</Card.Title>
                <Card.Body className='cardBody'>
                    <Card.Subtitle className="published">{published}</Card.Subtitle>
                    <Card.Text>
                        Content here
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Blogcard