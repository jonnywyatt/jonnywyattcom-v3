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
    return (
      <div className="container margin-top-ml" data-view={this.props.routeName}>
        <NavBar />
        <main className="views">
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
