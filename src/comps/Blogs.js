import React from 'react'
import Allblogs from './blogs/Allblogs'
import Oneblog from './blogs/Oneblog'

const Blogs = (props) => {

    
    return(
        <div>
            {props.readblog === 'all' ? <Allblogs />
            : <Oneblog />}
        </div>
    )
}
export default Blogs 