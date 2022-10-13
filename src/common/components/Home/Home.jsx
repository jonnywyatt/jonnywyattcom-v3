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
          <p className="heading heading--4 text-bold">React</p>
          <p className="heading heading--4 text-bold">scalable CSS including CSS-in-JS</p>
          <p className="heading heading--4 text-bold">Node.js</p>
          <p className="heading heading--4 text-bold">Javascript</p>
          <p className="heading heading--4 text-bold">Typescript</p>
          <p className="heading heading--4 text-bold">page load performance</p>
          <p className="heading heading--4 text-bold">accessibility</p>
          <p className="heading heading--4 text-bold">micro-services</p>
          <p className="heading heading--4 text-bold">micro-frontends</p>
          <p className="heading heading--4 text-bold">progressive enhancement</p>
          <p className="heading heading--4 text-bold">TDD & unit tests</p>
          <p className="heading heading--4 text-bold">BDD & end-to-end tests</p>
          <p className="heading heading--4 text-bold">responsive / mobile web</p>
          <p className="heading heading--4 text-bold">CI / CD</p>
          <p className="heading heading--4 text-bold">agile</p>
          <p className="heading heading--4 text-bold">rapid prototyping</p>
        </div>
      </div>
    );
  }
}

export default Home;
