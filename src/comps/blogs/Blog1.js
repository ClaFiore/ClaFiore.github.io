import React from 'react'
import './blogs.css'

const Blog1 = props => {

    return(
        <div className='cardDiv'>
            <h3 className='cardTitle'>The One-to-Many Relationship in Ruby</h3>
            <p className='publishedDate'><em>Claudia Borghini</em><span>Jul 23 2020</span></p>
            <div className='blogContent' >
                <p>During my first week at Flatiron as a Software Engineering student, I was introduced to Object Oriented Programming, a very important topic, that can be a bit complicated for beginners.</p>
                <p>I’d like to spend a few minutes explaining the One-to-Many relationship, with the hope that this article can help other new developers in the future.</p>
                <p>If we consider Objects in Ruby like things in real life, we can easily see how they are related and connected to one another, and I will illustrate this relationship with an example.</p>
                <p>A dog belongs to an owner: the dog has one owner, and the owner has a dog;<br></br>
                    Another dog belongs to the same owner: this dog has one owner, and this owner now has 2 dogs.</p>
                <p>Now, we can see how the owner is connected to many dogs: this is what we call a “One to Many Relationship”.</p>
                <p>An owner has many dogs, and each dog belongs to that one owner.</p>
                <p>In Ruby whatever belongs to something, is what it’s going to keep track of such relationship. So, when we say “A dog belongs to an owner” we know that the dog is what will keep track of the relationship with the owner.</p>
                <p>Think about it: if the owner is a breeder, he/she will have many dogs, and it may be difficult to keep track of all of them. Wouldn’t it be easier if the dog was to keep track of the owner? It’s just one! How does the dog keep track of the owner? We can write the owner’s name on the dog’s collar. Great, so now the dog is keeping track of its owner, and the owner doesn’t have to remember every dog he/she has.</p>
                <p>So what if the owner has a neighbor with as many dogs, and they all play together? How can an owner find his/her dogs? Well, it may sound long to do for a person (but it’s not for a computer!). The owner will check the collar of each dog, and will bring home just those dogs that have his/her name written on their collar.</p>
                <p>Click below to continue reading this article . . . </p>
            </div>
            <a href='https://claborghini.medium.com/the-one-to-many-relationship-in-ruby-my-first-week-at-flatiron-software-engineering-bootcamp-a84ea94160d3' rel="noopener noreferrer" className='readMoreBtn'>Continue reading on Medium</a>
        </div>
    )
}
export default Blog1