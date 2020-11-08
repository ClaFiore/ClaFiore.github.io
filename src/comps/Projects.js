import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import taskerpng from '../images/tasker.png'
import tablefinderpng from '../images/tablefinder.png'
import blistpng from '../images/rentabag.png'
import './projects.css'

const Projects = () => {

    const [tasker, setTasker] = useState(false)
    const [tablefinder, setTablefinder] = useState(false)
    const [blist, setBlist] = useState(false)

    return(
        <div id='projects'>
            <h1 style={{textAlign: 'center'}}>
                PROJECTS
            </h1>
        <div id='innerProjects'>
            <Card className='projCards'>
                <div className='singleProjImgDiv'>
                <Card.Img className='cardImg' src={taskerpng} />
                        <div className="middle">
                            <p className="titleonimage">TASKER</p>
                        </div>
                </div>
                <Card.Body>
                    <Card.Title>Tasker</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">React, Hooks, Redux, Ruby on Rails</Card.Subtitle>
                    <Card.Link href="https://www.youtube.com/watch?v=YKjEj7KHwyA&feature=youtu.be" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-3x"></i></Card.Link>
                    <Card.Link><i className="fa fa-github fa-3x"></i></Card.Link>

                </Card.Body>
            </Card>


            <Card className='projCards'>
                <div className='singleProjImgDiv'>
                <Card.Img className='cardImg' variant="top" src={tablefinderpng} />
                        <div className="middle">
                            <p className="titleonimage">TABLEFINDER</p>
                        </div>
                </div>
                <Card.Body>
                    <Card.Title>TableFinder</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">React, Hooks, Redux, Ruby on Rails</Card.Subtitle>
                    
                    <Card.Link href="https://www.youtube.com/watch?v=3jys7rMQ0io&feature=youtu.be" target="_blank" rel="noopener noreferrer" ><i className="fa fa-youtube fa-3x"></i></Card.Link>
                    <Card.Link><i className="fa fa-github fa-3x"></i></Card.Link>

                </Card.Body>
            </Card>


            <Card className='projCards'>
                <div className='singleProjImgDiv'>
                <Card.Img className='cardImg' variant="top" src={blistpng} />
                        <div className="middle">
                            <p className="titleonimage">THE B LIST</p>
                        </div>
                </div>
                <Card.Body>
                    <Card.Title>The B List</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Vanilla Javascript, Ruby on Rails</Card.Subtitle>
                    <Card.Link href="https://www.youtube.com/watch?v=SXgqQyT7wz8&feature=youtu.be" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-3x"></i></Card.Link>
                    <Card.Link><i className="fa fa-github fa-3x"></i></Card.Link>

                </Card.Body>
            </Card>
        </div>
    </div>
    )
}
export default Projects


/* <p>Tasker is a work-management platform designed for teams to manage their work.</p> */
//  <p>TableFinder is a web application that allows users to browse restaurants in the location of their choice, and make reservations. They can filter restaurants by cuisine, and sort the results by price or rating.</p>
// <p>With 'The B List' users can browse and sort all the handbags available, they can select and rent them from other users. Additionally, a user can list their own bags.</p>
// <p>The user's balance reflects the transactions, and can be incremented by the user. Developed full CRUD actions on bags, users, and rented items.</p>
