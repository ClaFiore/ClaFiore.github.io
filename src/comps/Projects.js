import React from 'react'
import Card from 'react-bootstrap/Card'
import tasker from '../images/tasker.png'
import tablefinder from '../images/tablefinder.png'
import blist from '../images/rentabag.png'
import './projects.css'

const Projects = (props) => {
    return(
        <div id='projects'>
            <h1 style={{textAlign: 'center'}}>
                PROJECTS
            </h1>
        <div id='innerProjects'>
            <Card className='projCards'>
                <div className='singleProjImgDiv'>
                <Card.Img className='cardImg' variant="top" src={tasker} />
                    <div className="overlay">
                        <a href="https://www.youtube.com/watch?v=YKjEj7KHwyA&feature=youtu.be" target="_blank" rel="noopener noreferrer"  className='icon'>
                            <i className="fa fa-youtube fa-4x"></i>
                        </a>
                    </div>
                </div>
                <Card.Body>
                <Card.Text>
                    Tasker description
                </Card.Text>
                </Card.Body>
            </Card>


            <Card className='projCards'>
                <div className='singleProjImgDiv'>
                <Card.Img className='cardImg' variant="top" src={tablefinder} />
                    <div className="overlay">
                        <a href="https://www.youtube.com/watch?v=3jys7rMQ0io&feature=youtu.be" target="_blank" rel="noopener noreferrer"  className='icon'>
                            <i className="fa fa-youtube fa-4x"></i>
                        </a>
                    </div>
                </div>
                <Card.Body>
                <Card.Text>
                    TableFinder
                </Card.Text>
                </Card.Body>
            </Card>


            <Card className='projCards'>
                <div className='singleProjImgDiv'>
                <Card.Img className='cardImg' variant="top" src={blist} />
                    <div className="overlay">
                        <a href="https://www.youtube.com/watch?v=SXgqQyT7wz8&feature=youtu.be" target="_blank" rel="noopener noreferrer"  className='icon'>
                            <i className="fa fa-youtube fa-4x"></i>
                        </a>
                    </div>
                </div>
                <Card.Body>
                <Card.Text>
                    The B List
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
    )
}
export default Projects