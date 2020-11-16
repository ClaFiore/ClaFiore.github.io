import React, {useState} from 'react'
import './eachproj.css'

const Tablefinder = (props) => {

  
  

  return(
    <div className='projContainer1'>
        <h3 className='projtitle'>TABLEFINDER</h3>

        <div className='projContent2'>
             <div className='projDescription3'>
                 <p>TableFinder is a web application that allows users to browse restaurants in their location, or the location of their choice, and make reservations. They can filter restaurants by cuisine, and sort the results by price range or rating.</p>
                 <p>With authentication and authorization, only users who are logged in can make a reservation, they can indicate their party size, and select a day and time. TableFinder will then show the user the time slots available for the selected restaurants, so the user can proceed with the reservation.</p>
                 <p>I built TableFinder with a partner, through pair-programming with the agile methodology, during our time at Flatiron School. We used Ruby on Rails for our backend and React for the frontend.</p>
             </div>
             <div className='projFacts4'>
                 <div className='projTechnologies5'>
                 <h4>Technologies/Libraries/Gems: </h4>
                     
                     <p>CSS Framework: Semantic UI and vanilla css</p>
                     <p>APIs: Google Maps, and Zomato for restaurants data</p>
                     <p>React class and functional components, State and Hooks</p>
                     <p>Authentication and Authorization with bcrypt, password_digest, JWT Token and localStorage</p>
                     <p>CRUD actions on the user; read and destroy for reservations, read for restaurants info</p>
                     
                 </div>
                 <div className='projLinks6'>
                    <h4>Find my work here: </h4>
                     <p><a className='projLink' href="https://www.youtube.com/watch?v=3jys7rMQ0io&feature=youtu.be" target="_blank" rel="noopener noreferrer">Video Demo</a></p>
                     <p><a className='projLink' href='https://github.com/ClaFiore/Mod4BackEnd'>Github Backend</a></p>
                     <p><a className='projLink' href='https://github.com/ClaFiore/Mod4FrontEnd'>Github Frontend</a></p>
                 </div>
             </div>
        </div>
    </div>
)
}

export default Tablefinder



