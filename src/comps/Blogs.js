import React from 'react'
import Allblogs from './blogs/Allblogs'
import Oneblog from './blogs/Oneblog'
import Opsblog from './blogs/Opsblog'

const Blogs = (props) => {


    return(
        <div>
            {props.fetchedBlogs && props.readblog === 'all' ? <Allblogs readblog={props.readblog} setReadblog={props.setReadblog} articles={props.articles}/>
            : props.fetchedBlogs ? <Oneblog />
            : <Opsblog />
            }
        </div>
    )
}
export default Blogs 

