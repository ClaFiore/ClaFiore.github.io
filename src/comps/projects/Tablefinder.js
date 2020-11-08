import React, {useState} from 'react'
import './eachproj.css'

const Tablefinder = (props) => {

  
  

  return(
    <div className='projContainer1'>
        <h3 className='projtitle'>TABLEFINDER</h3>

        <div className='projContent2'>
             <div className='projDescription3'>
                 <p>TableFinder is a web application that allows users to browse restaurants in their location, or the location of their choice. They can filter restaurants by cuisine, and sort the results by price range or rating.</p>
                 <p>With authentication and authorization, only users who are logged in can make a reservation, they can indicate their party size, and select a time. TableFinder will then show the user the available time slots for the selected restaurants, so the user can proceed with the reservation.</p>
                 <p>I built TableFinder with a partner, through pair-programming, during our time at Flatiron School. We used Ruby on Rails for our backend and React for the frontend.</p>
             </div>
             <div className='projFacts4'>
                 <div className='projTechnologies5'>
                     <p>Technologies/Libraries/Gems: </p>
                     <ul>
                     <li>CSS Framework: Semantic UI and vanilla css</li>
                     <li>API: Google Maps, and Zomato for restaurants data</li>
                     <li>CRUD actions on the user; read and destroy for reservations, read for restaurants info</li>
                     <li>React class and functional components, State and Hooks</li>
                     <li>Authentication and Authorization with bcrypt and password_digest, JWT Token</li>
                     </ul>
                 </div>
                 <div className='projLinks6'>
                     <p>Find my work here: </p>
                     <li>Github Backend: </li>
                     <li>Github Frontend: </li>
                     <li>Demo: </li>
                 </div>
             </div>
        </div>
    </div>
)
}

export default Tablefinder



