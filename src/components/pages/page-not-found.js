import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
let PageNotFound = (props) => {
    return(
      <div class="has-fixed-footer">
        <Header />
        <section id="page-not-found">
          <div className="container">
            <h1>Page not found.</h1>
          </div>
        </section>
        <Footer />
      </div>
        
 
    );
}
export default PageNotFound;