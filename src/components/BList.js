import React, {useState} from 'react'
import './projects.css'
import rentabag from '../images/rentabag.png'

const BList = () => {

    const [show, setShow] = useState(false)

    return(
        <div className='singleProjOuterDiv'>
            <div className='singleProjUpperDiv'>
                    <div className='singleProjTitleDiv'>
                            <h3 onClick={() => setShow(!show)} className='projectTitle'>THE B LIST</h3>
                            <p>With 'The B List' users can browse and sort all the handbags available, they can select and rent them from other users. Additionally, a user can list their own bags.</p>    
                    </div>
                    
                    <div className='singleProjImgDiv'>
                        <img src={rentabag} className='singleProjImg'/>
                        <div className="overlay">
                            <a href="https://www.youtube.com/watch?v=SXgqQyT7wz8&feature=youtu.be" target="_blank" rel="noopener noreferrer"  className='icon'>
                                <i className="fa fa-youtube fa-4x"></i>
                            </a>
                        </div>
                    </div>
            </div>
            
            {show ? 
                <div>
                    <p>The user's balance reflects the transactions, and can be incremented by the user.
                    Developed full CRUD actions on bags, users, and rented items.</p>
                    <ul>
                        <li>One Page Web Application - Ruby on Rails, vanilla Javascript, vanilla CSS.</li>
                        <li>Github Backend: https://github.com/ClaFiore/rent-a-bag</li>
                        <li>Github Frontend: https://github.com/ClaFiore/rent-a-bag-frontend</li>
                        <li>Demo: https://www.youtube.com/watch?v=SXgqQyT7wz8&feature=youtu.be</li>
                    </ul>
                </div>
            :
            null}
        </div>
    )
}

export default BList