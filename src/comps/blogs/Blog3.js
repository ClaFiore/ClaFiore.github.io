import React from 'react'

const Blog3 = props => {

    return(
        <div className='cardDiv'>
            <h3 className='cardTitle'>JavaScript: Add and Remove an Event Listener</h3>
            <p className='publishedDate' >Sep 3 2020</p>
            <div className='blogContent' >
                <p>As a Software Engineering student at Flatiron School, I am now studying JavaScript, and I’m having a lot of fun exploring all the cool things I can do with it, especially with the .addEventListener function.</p>
                <h4>Mouseover</h4>
                <p>As shown in the example below, we can make things happen when we hover onto something with our cursor, for example we can change the color of a particular word, or section.</p>
                <h4>Mouseout</h4>
                <p>However, when we move away from that particular word or section, its style doesn’t automatically change to what it was before, unless we tell it to.</p>
                <p>HTML:</p>
                <code> &lt;h1&gt; Let's try some mouse events in Javascript &lt;/h1&gt;</code>
                <p>JAVASCRIPT:</p>
                <code>{'let h1 = document.querySelector("h1")'}</code>
                <code>{'h1.addEventListener("mouseover", function(){'}</code>
                <code>h1.style.color = "blue"</code>
                <code>{'})'}</code>
                <code>h1.addEventListener('mouseout', {'function(){'}</code>
                <code>{'h1.style.color = "black"'}</code>
                <code>{'})'}</code>
                <p>The HTML of this webpage has an h1 tag with the title of this blog as innerText.</p>
                <p>Copy and Paste the JavaScript code in your console to see how it looks like!</p>
                <p>Click below to continue reading this article . . . </p>
            </div>
            <a rel="noopener noreferrer" href='https://claborghini.medium.com/javascript-add-and-remove-an-event-listener-mouseover-mouseout-9adc7ac1c20' className='readMoreBtn'>Continue reading on Medium</a>
        </div>
    )
}

export default Blog3


