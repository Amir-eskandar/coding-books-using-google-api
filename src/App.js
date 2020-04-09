import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BooksSectionPage from './components/pages/books-section';
import BookDetailPage from './components/pages/book-detail';
import PageNotFound from './components/pages/page-not-found';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage} />
          <Route path="/books/category/:categoryName" exact render={(props) => {
            let {categoryName} = props.match.params;
            return <BooksSectionPage categoryName={categoryName + ' '} />
          }} />
          <Route path="/book/:bookId" render={(props) => {
            let {bookId} = props.match.params;
            return(
              <BookDetailPage bookId={bookId} />
            ) 
          }} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
