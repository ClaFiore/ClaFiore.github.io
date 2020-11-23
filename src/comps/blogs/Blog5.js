import React from 'react'
import './blogs.css'

const Blog5 = props => {

    return(
        <div className='cardDiv'>
            <h3 className='cardTitle'>JavaScript, a few main concepts</h3>
            <p className='publishedDate'><em>Claudia Borghini</em><span>Nov 23 2020</span></p>
            <div className='blogContent' >
                <p>During my Software Engineering bootcamp at Flatiron School I familiarized with Ruby, Rails, JavaScript, React, and everything in between. I had a lot of fun building projects with my peers, using the agile methodology, and, as a recent graduate, I’m now continuing to code to create web-applications on my own.</p>
                <p>While I agree that the only way to learn a language is by coding, coding and coding, I also believe it is important to know its fundamentals and core concepts definitions. So here are a few that I hope can be helpful for anyone approaching JavaScript.</p>
                <h4>JavaScript</h4>
                <p>JavaScript is an object oriented scripting language that adds dynamism, animation and interactivity to a web page on a browser.
                JavaScript is an interpreted language, it reads code line-by-line and it executes it line-by-line (interpreted vs compiled).
                For this reason, and despite its asynchronous nature, JavaScript is considered a single-threaded language, which differs by multi-threaded in that it executes code in order and it must finish executing a chunk of code before moving on to the next.</p>
               
                <p>Click below to continue reading this article . . . </p>
            </div>
            <a href='https://claborghini.medium.com/javascript-a-few-main-concepts-2c500f7e14bd' rel="noopener noreferrer" className='readMoreBtn'>Continue reading on Medium</a>
        </div>
    )
}
export default Blog5