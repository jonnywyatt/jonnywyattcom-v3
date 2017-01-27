import React, { Component, PropTypes } from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NavBar from '../containers/NavBar';
import Articles from '../containers/Articles';

class App extends Component {
  componentDidMount() {
    this.props.listenForRouteChanges();

    if (window.performance && window.performance.mark) {
      window.performance.mark('app-interactive');
    }
  }

  render() {
    let viewIndex = 0;
    if (this.props.routeName === 'articles') viewIndex = 1;
    else if (this.props.routeName === 'about') viewIndex = 2;

    return (
      <div className="container margin-top-ml" data-view={this.props.routeName}>
        <NavBar />
        <main className="views" style={{ transform: `translateX(-${viewIndex * (100/3)}%)` }}>
          <Home />
          <Articles />
          <About />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  listenForRouteChanges: PropTypes.func.isRequired
};

export default App;
