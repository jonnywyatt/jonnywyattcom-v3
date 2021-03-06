import React from 'react';
import nanoajax from 'nanoajax';

class MobileAnim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      svg: ''
    };
  }

  componentDidMount() {
    this.loadSVG();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return ((nextState.loaded !== this.state.loaded)  || (nextState.svg !== this.state.svg));
  }

  componentDidUpdate() {
    if (!this.animatedOnce) this.animatePaths();
  }

  loadSVG() {
    this.animatedOnce = false;
    nanoajax.ajax({
      url: '/public/svg/mobile-anim.svg'
    }, (code, res = '') => {
      this.setState({ loading: true });
      this.setState({ svg: res });
    });
  }

  animatePaths() {
    const paths = this.svgContainer.querySelectorAll('path');
    if (paths.length) {
      [].forEach.call(paths, this.animatePath);
      this.animatedOnce = true;
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 1400);
    }
  }

  animatePath(path) {
    const length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 1.5s ease-in-out';
    path.style.strokeDashoffset = '0';
  }

  render() {
    return (<div ref={(el) => { this.svgContainer = el; }} className={`mobile-anim ${this.state.loaded ? ' mobile-anim--loaded' : ''} ${this.state.loading ? ' mobile-anim--loading' : ''}`}>
      <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
      <div className="mobile-anim__bitmap">
        <img src="/public/img/amp.jpg" srcSet="/public/img/amp-2x.jpg 2x" width="100%" />
      </div>
    </div>);
  }
}

export default MobileAnim;
