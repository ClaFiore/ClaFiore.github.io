import React from 'react'
import Blog1 from './blogs/Blog1'
import Blog2 from './blogs/Blog2'
import Blog3 from './blogs/Blog3'
import Blog4 from './blogs/Blog4'
import './blogs/blogs.css'

const Blogs = (props) => {


    return(
        <div id='blogsContainer'>
            <Blog4 />
            <Blog3 />
            <Blog2 />
            <Blog1 />
        </div>
    )
}
export default Blogs 

