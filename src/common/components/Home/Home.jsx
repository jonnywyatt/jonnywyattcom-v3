import React from 'react';
import MobileAnim from '../MobileAnim/MobileAnim';

const Home = () => (
  <div className="view home">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-8">
          <p><strong>I have a very strong track record of rapidly delivering quality
            software.</strong></p>
          <p>The core of my skillset is front end and I’ve added over 2 years’ solid experience in
            Node.js and React. I have a good handle on the array of developments in the Javascript
            space, plus the experience to know which of them to benefit from. I’m passionate about
            web performance and know how to measure and achieve it.</p>
          <p>I understand every angle of a successful agile team including cross-disciplinary
            collaboration, user-centred testing and design, lean UX, early & continuous delivery,
            TDD, test automation, pairing and how to funnel business requirements through user
            stories.</p>
          <div className="margin-bottom-ml">I have skills in:</div>
          <div className="row">
            <div className="col-6">
              <p className="heading heading--4">page load performance</p>
              <p className="heading heading--4">React / Redux</p>
              <p className="heading heading--4">scalable CSS</p>
              <p className="heading heading--4">Node.js</p>
              <p className="heading heading--4">accessibility</p>
              <p className="heading heading--4">Javascript</p>
              <p className="heading heading--4">microservices</p>
            </div>
            <div className="col-6">
              <p className="heading heading--4">progressive enhancement</p>
              <p className="heading heading--4">TDD & automated tests</p>
              <p className="heading heading--4">responsive</p>
              <p className="heading heading--4">CI / CD</p>
              <p className="heading heading--4">agile</p>
              <p className="heading heading--4">mobile</p>
              <p className="heading heading--4">SVG</p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <MobileAnim />
        </div>
      </div>
    </div>
  </div>);

export default Home;
