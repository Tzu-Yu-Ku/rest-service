import React from 'react'

const Card = ({title, author, isbn, img, id}) => {
    return (
        <div className="book-preview" key={id}>
            <img src={ img } alt="" />
            <h2>{ title }</h2>
            <p>{ author }</p>
            <p>{ isbn }</p>
        </div>
    )
}

export default Card
