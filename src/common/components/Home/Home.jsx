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
        <p className="margin-top-none"><a className="icon-text icon-text--sm" href="/articles/react-native-first-impressions" onClick={this.props.startRouteChange}><i className="icon-chevron-right-blue padding-right-xs" />New article - <span className="text-bold">'First impressions of React Native'</span></a></p>
        <p>The core of my skillset is front end and I’ve added almost 3 years’ solid experience in
          Node.js and React. I have a good handle on the array of developments in the Javascript
          space, plus the experience to know which of them to benefit from. I’m passionate about
          web performance and know how to measure and achieve it.</p>
        <p>I understand every angle of a successful agile team including cross-disciplinary
          collaboration, user-centred testing and design, lean UX, early & continuous delivery,
          TDD, test automation and how to funnel business requirements through user
          stories.</p>
        <div className="margin-bottom-ml">I have skills in:</div>
        <div className="columns columns--2">
          <p className="heading heading--4">React / Redux</p>
          <p className="heading heading--4">scalable CSS</p>
          <p className="heading heading--4">Node.js</p>
          <p className="heading heading--4">page load performance</p>
          <p className="heading heading--4">accessibility</p>
          <p className="heading heading--4">Javascript</p>
          <p className="heading heading--4">microservices</p>
          <p className="heading heading--4">progressive enhancement</p>
          <p className="heading heading--4">TDD & automated tests</p>
          <p className="heading heading--4">responsive</p>
          <p className="heading heading--4">CI / CD</p>
          <p className="heading heading--4">agile</p>
          <p className="heading heading--4">mobile</p>
          <p className="heading heading--4">rapid prototyping</p>
          <p className="heading heading--4">React Native</p>
        </div>
      </div>
    );
  }
}

export default Home;
