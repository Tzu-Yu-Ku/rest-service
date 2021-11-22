import { useState } from "react";
import BookList from "./BookList";
import Card from "./Card";

const Home = () => {
    const [books, setBook] = useState([
        {title: 'Java für Dummies', isbn: '9783527710980', author: 'Davis', id: 1, img: "https://productimages.worldofbooks.com/0470087161.jpg"},
        {title: 'C++ für Dummies', isbn: '9783527710981', author: 'David', id: 2, img: "https://productimages.worldofbooks.com/0764570684.jpg"},
        {title: 'C für Dummies', isbn: '9783527710982', author: 'Dav', id: 3, img: "https://productimages.worldofbooks.com/0764570684.jpg"},
        {title: 'Java für Dummies', isbn: '9783527710980', author: 'Davis', id: 4, img: "https://productimages.worldofbooks.com/0764570684.jpg"},
        {title: 'C++ für Dummies', isbn: '9783527710981', author: 'David', id: 5, img: "https://productimages.worldofbooks.com/0764570684.jpg"},
        {title: 'C für Dummies', isbn: '9783527710982', author: 'Dav', id: 6, img: "https://productimages.worldofbooks.com/0764570684.jpg"},
    ]);

    return (
      <div className="home">   
        <BookList books={books} title="All Books"/>
        {/* <BookList books={books.filter(book => book.author === 'David')} title="David's Books"/> */}
      </div>
    );
  }
   
  export default Home;