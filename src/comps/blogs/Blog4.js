import React from 'react'

const Blog4 = props => {

    return(
        <div className='cardDiv'>
            <h3 className='cardTitle'>Linear and Binary Search Algorithms in JavaScript and Ruby</h3>
            <p className='publishedDate' >Sep 24 2020</p>
            <div className='blogContent' >
                <p>Search Algorithms allow us to solve a specific search problem, and retrieve information from the database.</p>
                <p>There are many ways to do so, some are faster than others, some are better in some situations but not in others, so which search algorithm should we use?</p>
                <p>It depends on two values that describe the performance of the algorithms in terms of run time:</p>
                <p>Big O notation (O): how much time does it take to the program to run at max (in the worst possible scenario).</p>
                <p>Big Omega notation (Ω): in the best scenario, how many steps does it take to the program to find the searched item?</p>
                <p>LINEAR SEARCH:</p>
                <p>Searching from left to right in the memory grid, sequentially until a match is found or until all the elements have been asked without success, we are essentially following a line.</p>
                <p>Example: We have a set of 8 lockers in front of us, inside each one there is a card with a number written on it. All lockers are closed.
                    How do we find the locker with the card that has 2 written on?
                    With Linear Search, we open each locker (one locker at a time) until we find the card with the number 2.</p>
               
                <p>Click below to continue reading this article . . . </p>
            </div>
            <a rel="noopener noreferrer" href='https://claborghini.medium.com/linear-and-binary-search-algorithms-in-ruby-f2222997fa30' className='readMoreBtn'>Continue reading on Medium</a>
        </div>
    )
}

export default Blog4