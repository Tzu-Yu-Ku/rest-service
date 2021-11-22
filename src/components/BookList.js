import React from 'react'
import Card from "./Card"

const BookList = ({books, title}) => {
    return (
        <div className="book-list">
            <h1>{ title }</h1>
            {books.map(book => (
            <Card title={ book.title} author={book.author} isbn={book.isbn} img={book.img} key={book.id} />
        ))}
        </div>
    )
}

export default BookList
