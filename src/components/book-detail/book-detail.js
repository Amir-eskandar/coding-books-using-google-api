import React from 'react';
import BookContainer from './BookContainer';



let BookDetail = (props) => {
    return (
        <section id="book-detail">
                <div className="container">
                <BookContainer book={props.book}/>
                </div>
            </section>
    );
}

export default BookDetail;