import React from 'react'

import './blogs.css'

const Blog2 = props => {

    return(
        <div className='cardDiv'>
            <h3 className='cardTitle'>Rails Basic ActiveRecord Methods</h3>
            <p className='publishedDate' ><span><em>Claudia Borghini</em></span><span>Aug 13 2020</span></p>
            <div className='blogContent'>
                <p>ActiveRecord methods described in this article: create, new, assign_attributes, save, update, build, pluck, where, find_by, find.</p>
                <h4>create</h4>
                <p>Returns a new object and saves it to the database. The new object can be created from a hash, a block, or with attributes manually set after creation.</p>
                <code>lucy = Dog.create(name: "Lucy", age: 4, :breed "Dalmatian")</code>
                <p>When using a form to get the attributes’ values from the user, to create a new instance you can pass in those attributes using strong parameters, a hash of key, value pairs. Strong parameters permit the user to define just the given attributes, and nothing more.</p>
                <code>def strong_params</code>
                        <code>params.require(:dog).permit(:name, :age, :breed)</code>
                        <code>end</code>
                        <code>lucy = Dog.create(strong_params)</code>
                <h4>new</h4>
                <p>Initiates a new instance of a class, without assigning any attributes. It returns an empty skeleton, and it doesn’t save it to the database.</p>
                <code>snoopy = Dog.new</code>
                <h4>assign_attributes</h4>
                <p>
                It’s used when editing the attributes of an existing record. It assigns the edited attributes to the object, by passing in a hash of keys and value pairs. It doesn’t save the edited object to the database yet.
                If using a form to edit the attributes, you can use the strong_params method to assign these attributes to the object.</p>
                <p>Click below to continue reading this article . . . </p>
                </div>
            <a rel="noopener noreferrer" href='https://claborghini.medium.com/rails-basic-activerecord-methods-68ed6036a1ee' className='readMoreBtn'>Continue reading on Medium</a>
        </div>
    )
}

export default Blog2