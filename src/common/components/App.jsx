import React, { Component, PropTypes } from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Articles from '../containers/Articles';
import NewArticle from './NewArticle/NewArticle';

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
    else if (this.props.routeName === 'about') viewIndex = 2;

    return (
      <div data-view={this.props.routeName}>
        <Header />
        <NavBar />
        <main className="views container-fluid-max">
          {
            this.props.routeName === 'article-new' ?
              <NewArticle />
              :
              <div
                className="views__inner"
                style={{ transform: `translateX(-${viewIndex * (100 / 3)}%)` }}>
                <Home />
                <Articles />
                <About />
              </div>
          }
        </main>
      </div>
    );
  }
}

App.propTypes = {
  listenForRouteChanges: PropTypes.func.isRequired
};

export default App;
