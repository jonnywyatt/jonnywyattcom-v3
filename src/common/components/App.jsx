import React, { Component, PropTypes } from 'react';
import NavBar from '../containers/NavBar';
import Articles from '../containers/Articles';
import Article from '../containers/Article';
import NewArticle from './NewArticle/NewArticle';

class App extends Component {
  componentDidMount() {
    this.props.listenForRouteChanges();

    if (window.performance && window.performance.mark) {
      window.performance.mark('app-interactive');
    }
  }

  render() {
    return (
      <div data-view={this.props.routeName}>
        <NavBar />
        <main className="views">
          <div className="view articles">Articles
            <Articles />
          </div>
          <div className="view article">Article
            <Article />
          </div>
          <div className="view about">About</div>
          <div className="view contact">Contact</div>
          <div className="view article-new">New article
            <NewArticle />
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
