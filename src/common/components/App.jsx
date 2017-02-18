import React, { Component, PropTypes } from 'react';
import Home from '../components/Home/Home';
import Contact from './Contact/Contact';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Articles from '../containers/Articles';
import NewArticle from './NewArticle/NewArticle';
import Error from '../containers/Error';

class App extends Component {
  componentDidMount() {
    this.props.listenForRouteChanges();
    if (window.performance && window.performance.mark) {
      window.performance.mark('app-interactive');
    }
  }

  render() {
    let viewIndex = 0;
    if (['articles', 'article'].indexOf(this.props.routeName) > -1) viewIndex = 1;
    else if (this.props.routeName === 'contact') viewIndex = 2;

    return (
      <div className="app" data-view={this.props.routeName}>
        <Header />
        <NavBar />
        <main className="container-fluid-max">
          <div className="row">
            <div className="col-12 views">
              { this.props.error && <Error /> }
              {
                this.props.routeName === 'article-new' ?
                  <NewArticle />
                  :
                  <div
                    className="views__inner"
                    style={{ transform: `translateX(-${viewIndex * (100 / 3)}%)` }}>
                    <Home />
                    <Articles />
                    <Contact />
                  </div>
              }
            </div>
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  listenForRouteChanges: PropTypes.func.isRequired
};

export default App;
