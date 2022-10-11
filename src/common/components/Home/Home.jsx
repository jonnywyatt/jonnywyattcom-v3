import React from 'react';
import MobileAnim from '../MobileAnim/MobileAnim';

class Home extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="view home">
        <MobileAnim />
        <p className="margin-top-none"><a className="icon-text icon-text--sm" href="/articles/agile-for-new-devs" onClick={this.props.startRouteChange}><i className="icon-chevron-right-blue padding-right-xs" />New post - <span className="text-bold">'An intro to agile for new devs'</span></a></p>
        <p>The core of my skillset is front end, including expertise in React, page load performance, accessibility and authoring UI component libraries. I also have 8 years’ solid experience of Node.js.</p>
        <p>I understand every angle of a successful agile team including user-centred research and design, continuous delivery, TDD, test automation & strategy, pairing and shared ownership of quality and dev-ops.</p>
        <div className="margin-bottom-ml">I have skills in:</div>
        <div className="columns columns--2">
          <p className="heading heading--4">React</p>
          <p className="heading heading--4">scalable CSS including CSS-in-JS</p>
          <p className="heading heading--4">Node.js</p>
          <p className="heading heading--4">Javascript</p>
          <p className="heading heading--4">Typescript</p>
          <p className="heading heading--4">page load performance</p>
          <p className="heading heading--4">accessibility</p>
          <p className="heading heading--4">micro-services</p>
          <p className="heading heading--4">micro-frontends</p>
          <p className="heading heading--4">progressive enhancement</p>
          <p className="heading heading--4">TDD & unit tests</p>
          <p className="heading heading--4">BDD & end-to-end tests</p>
          <p className="heading heading--4">responsive / mobile web</p>
          <p className="heading heading--4">CI / CD</p>
          <p className="heading heading--4">agile</p>
          <p className="heading heading--4">rapid prototyping</p>
        </div>
      </div>
    );
  }
}

export default Home;
