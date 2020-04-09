import React, {Component} from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import BooksSection from '../books-section/Books-section';
import axios from 'axios';

class BooksSectionPage extends Component {
    constructor(){
        super();
        this.state = {
            books: [],
            isLoading: true
        }
    }
    componentDidMount(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.props.categoryName)
        .then((res) => {
            this.setState({
                books: res.data.items,
                isLoading: false,

            })
        })
    }
    componentDidUpdate(previousProps){
        if(previousProps.categoryName !== this.props.categoryName){
            this.setState({
                isLoading: true,
            })
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.props.categoryName)
        .then((res) => {
            this.setState({
                books: res.data.items,
                isLoading: false,

            })
        })
    }
        }

    
    render(){
        return(
            <div className="has-fixed-footer">
            <Header />
            {this.state.isLoading ? 
            <p>Loading......</p> : 
            <BooksSection title={this.props.categoryName} books={this.state.books} />
        }
            
            <Footer />
        </div>
        ); 
    }
}

BooksSectionPage.defaultProps = {
    categoryName: "HTML",
} 
export default BooksSectionPage;