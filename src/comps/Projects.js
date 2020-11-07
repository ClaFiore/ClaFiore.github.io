import React from 'react'
import Card from 'react-bootstrap/Card'
import tasker from '../images/tasker.png'
import tablefinder from '../images/tablefinder.png'
import blist from '../images/rentabag.png'
import './projects.css'

const Projects = (props) => {
    return(
        <div id='projects'>

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
                <Card.Img className='cardImg' variant="top" src={blist} />
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

        </div>
    )
}
export default Projects