import React, {useState} from 'react'
import './projects.css'

const Tasker = () => {

    const [show, setShow] = useState(false)

    return(
        <div>
            <h3 onClick={() => setShow(!show)} className='projectTitle'>TASKER</h3>
            {show ? 
            <div>
                    <p>Tasker is a web application built on Ruby on Rails (backend) and React, Hooks and Redux (frontend).</p>
                    <p>Tasker is a work-management platform designed for teams to manage their work. This application is built around the idea of a standard management structure, where each team has one manager who oversees several team members. That manager is also part of another team as a member.</p>
                    <p>With Tasker employees can login and view their dashboard. They can organize their own work by creating tasks, edit the time, mark them as completed or still in progress. The employees can view the projects that their team has been assigned to. They can also view what their team members are currently working on. On their calendar they can filter their tasks by priority and by the projects they are associated with. Furthermore, they can review their information and update them.</p>
                    <p>Additionally, employees who are also managers can switch to the manager view and view the activities of the team members they manage. They can assign work to them and send notifications. They can also create new projects for the team they manage, mark them as complete, edit or delete them.</p>
                    <ul>
                        <li>CSS Framework: React Bootstrap + vanilla css</li>
                            <li>API: FullCalendar.io</li>
                            <li>Full CRUD on projects and tasks; read and update on user/employee</li>
                            <li>Technologies/Libraries/Gems: Redux, Hooks, bcrypt and password_digest, JWT Token, conditional rendering</li>
                            <li>Github Backend: https://github.com/ClaFiore/Tasker-Backend</li>
                            <li>Github Frontend: https://github.com/ClaFiore/Tasker-Frontend</li>
                            <li>Demo: https://www.youtube.com/watch?v=YKjEj7KHwyA&feature=youtu.be</li>
                    </ul>
            </div>
            :
            null}
        </div>
    )
}

export default Tasker