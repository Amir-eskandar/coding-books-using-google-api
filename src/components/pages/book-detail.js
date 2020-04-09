import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BookDetail from '../book-detail/book-detail';
import axios from 'axios';


class BookDetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {},
            isLoading: true,
        }
    }
    componentDidMount(){
        axios.get('https://www.googleapis.com/books/v1/volumes/' + this.props.bookId)
        .then( res => {
            console.log(res)
            this.setState({
                book: res.data,
                isLoading: false,
            })
            })
    }
    render() {
        return(
            <div className="has-fixed-footer">
                <Header />
                {this.state.isLoading ? 
                <p>is loading...</p> : 
                <BookDetail book={this.state.book} />
                }
                <Footer />
            </div>
        );
    }
}

export default BookDetailPage;