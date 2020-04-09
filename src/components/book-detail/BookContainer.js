import React from 'react';
import BookInfo from './BookInfo';
import BookReview from './BookReview';


let BookContainer = (props) => {
let bookInfo = {
    image: props.book.volumeInfo.imageLinks.large,
    title: props.book.volumeInfo.title,
    author: props.book.volumeInfo.authors[0],
    description: props.book.volumeInfo.description,
    ratings: {
        averageRating: props.book.volumeInfo.averageRating,
        ratingsCount: props.book.volumeInfo.ratingsCount
    }
}

    return(
        <div className="book-container">
                        <div className="book-img">
                        <img src={bookInfo.image} alt={bookInfo.title} />
                        </div>

                        <BookInfo title={bookInfo.title} author={bookInfo.author} description={bookInfo.description} />

                        {bookInfo.ratings ? 
                        <BookReview averageRating={bookInfo.ratings.averageRating} ratingsCount={bookInfo.ratings.ratingsCount}/> :
                        null

                        }
                    </div>
    );
}
export default BookContainer;