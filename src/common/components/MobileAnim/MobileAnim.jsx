import React, { Component } from 'react';

class MobileAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ loading: typeof window !== 'undefined' });
    const paths = this.svg.querySelectorAll('path');
    [].forEach.call(paths, (path) => {
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
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 1400);
    });
  }

  render() {
    return (<div className={`mobile-anim ${this.state.loaded ? ' mobile-anim--loaded' : ''} ${this.state.loading ? ' mobile-anim--loading' : ''}`}>
      <svg
        className="mobile-anim__svg"
        ref={(el) => {
          this.svg = el;
        }}
        width="100%" height="100%" viewBox="0 0 300 510" preserveAspectRatio="xMidYMid meet" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-2" transform="translate(26.000000, 6.000000)">
            <path d="M0,29.9996385 C0,13.4312957 13.433624,0 29.9958231,0 L215.004177,0 C231.570413,0 245,13.4323806 245,29.9996385 L245,465.000361 C245,481.568704 231.566376,495 215.004177,495 L29.9958231,495 C13.4295874,495 0,481.567619 0,465.000361 L0,29.9996385 Z" id="Path" stroke="#414141" />
            <path d="M78,20 C78,17.790861 79.7979208,16 81.9970451,16 L163.002955,16 C165.210462,16 167,17.7953562 167,20 C167,22.209139 165.202079,24 163.002955,24 L81.9970451,24 C79.789538,24 78,22.2046438 78,20 Z" id="Path" stroke="#414141" />
            <path d="M78,475 C78,472.790861 79.7979208,471 81.9970451,471 L163.002955,471 C165.210462,471 167,472.795356 167,475 C167,477.209139 165.202079,479 163.002955,479 L81.9970451,479 C79.789538,479 78,477.204644 78,475 Z" id="Path" stroke="#414141" />
            <polygon id="Path" stroke="#414141" points="10 43 236 43 236 444 10 444" />
            <path d="M11.5,71.5 L235.5,71.5" id="Line" stroke="#414141" strokeLinecap="square" />
            <path d="M15,421.994202 C15,420.34055 16.3449454,419 17.9982652,419 L227.001735,419 C228.657631,419 230,420.343312 230,421.994202 L230,436.005798 C230,437.65945 228.655055,439 227.001735,439 L17.9982652,439 C16.3423691,439 15,437.656688 15,436.005798 L15,421.994202 Z" id="Path" stroke="#414141" />
            <path d="M11.5,141.5 L235.5,141.5" id="Line" stroke="#414141" strokeLinecap="square" />
            <path d="M11.5,391.5 L235.5,391.5" id="Line" stroke="#414141" strokeLinecap="square" />
            <path d="M235.5,91.5 L11.5,91.5" id="Line" stroke="#414141" strokeLinecap="square" />
            <path d="M235.5,235.5 L11.5,235.5" id="Line" stroke="#414141" strokeLinecap="square" />
            <polygon id="Line" fill="#414141" fillRule="nonzero" points="236 414 11 414 11 415 236 415" />
            <path d="M20.716014,60.7313137 C18.416014,59.0313137 18.216014,51.3313137 20.416014,50.5313137 C23.016014,49.5313137 23.416014,50.5313137 22.916014,56.3313137 C22.416014,61.5313137 22.316014,61.8313137 20.716014,60.7313137 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(20.987932, 55.720602) scale(-1, 1) rotate(-180.000000) translate(-20.987932, -55.720602) " />
            <path d="M27.716014,60.138631 C25.516014,57.938631 25.416014,54.238631 27.416014,52.538631 C29.616014,50.738631 30.116014,51.638631 29.716014,57.138631 C29.416014,61.738631 29.316014,61.838631 27.716014,60.138631 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(27.914551, 56.424260) scale(-1, 1) rotate(-180.000000) translate(-27.914551, -56.424260) " />
            <path d="M31.716014,53.8690434 C31.916014,52.4690434 32.816014,51.3690434 33.516014,51.3690434 C35.216014,51.3690434 35.316014,53.5690434 33.716014,55.1690434 C31.816014,57.0690434 31.116014,56.5690434 31.716014,53.8690434 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(33.181573, 53.839467) scale(-1, 1) rotate(-180.000000) translate(-33.181573, -53.839467) " />
            <path d="M37.616014,60.5687037 C37.316014,60.0687037 36.816014,57.8687037 36.416014,55.5687037 C35.816014,51.9687037 36.016014,51.2687037 37.316014,51.2687037 C38.716014,51.2687037 38.816014,51.6687037 37.916014,53.2687037 C36.716014,55.5687037 36.816014,55.6687037 40.416014,54.2687037 C41.816014,53.7687037 42.716014,52.8687037 42.416014,52.2687037 C42.116014,51.7687037 42.316014,51.2687037 42.916014,51.2687037 C44.616014,51.2687037 45.316014,54.3687037 44.116014,56.3687037 C43.316014,57.5687037 43.316014,58.3687037 43.916014,58.7687037 C45.116014,59.4687037 44.316014,61.2687037 42.816014,61.2687037 C42.316014,61.2687037 41.916014,60.5687037 41.916014,59.7687037 C41.916014,58.9687037 41.516014,58.2687037 40.916014,58.2687037 C40.416014,58.2687037 39.916014,58.9687037 39.916014,59.7687037 C39.916014,61.3687037 38.316014,61.8687037 37.616014,60.5687037 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(40.404702, 56.289297) scale(-1, 1) rotate(-180.000000) translate(-40.404702, -56.289297) " />
            <path d="M31.916014,58.80989 C31.916014,58.00989 32.616014,57.30989 33.416014,57.30989 C34.216014,57.30989 34.916014,58.00989 34.916014,58.80989 C34.916014,59.60989 34.216014,60.30989 33.416014,60.30989 C32.616014,60.30989 31.916014,59.60989 31.916014,58.80989 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(33.416014, 58.809890) scale(-1, 1) rotate(-180.000000) translate(-33.416014, -58.809890) " />
            <path d="M72.916014,116.40989 L72.916014,107.40989 L81.816014,107.40989 L90.716014,107.40989 L90.616014,116.10989 L90.416014,124.90989 L87.116014,124.90989 C83.016014,124.90989 82.016014,123.80989 85.316014,123.00989 C88.116014,122.30989 90.216014,117.40989 89.316014,113.80989 C88.616014,111.10989 84.916014,108.40989 81.716014,108.40989 C78.216014,108.50989 74.916014,111.60989 74.316014,115.50989 C73.816014,118.60989 74.116014,119.40989 76.816014,121.70989 C78.516014,123.10989 79.916014,124.50989 79.916014,124.70989 C79.916014,124.90989 78.316014,125.10989 76.416014,125.20989 L72.916014,125.30989 L72.916014,116.40989 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(81.816014, 116.359890) scale(-1, 1) rotate(-180.000000) translate(-81.816014, -116.359890) " />
            <path d="M77.416014,118.644557 C76.616014,117.744557 75.916014,115.544557 75.916014,113.744557 C75.916014,111.044557 76.216014,110.444557 77.516014,110.944557 C78.516014,111.344557 78.916014,112.344557 78.616014,113.844557 C78.416014,115.144557 78.816014,116.344557 79.516014,116.644557 C81.316014,117.344557 82.016014,116.044557 80.816014,114.244557 C79.616014,112.144557 79.716014,111.544557 81.416014,111.544557 C82.216014,111.544557 82.916014,112.144557 82.916014,112.944557 C82.916014,113.644557 83.416014,114.244557 83.916014,114.244557 C84.516014,114.244557 84.916014,113.544557 84.916014,112.744557 C84.916014,111.944557 85.516014,111.244557 86.216014,111.244557 C88.016014,111.244557 88.216014,116.744557 86.416014,118.244557 C84.216014,120.044557 79.116014,120.344557 77.416014,118.644557 Z" id="Shape" stroke="#000000" fillRule="nonzero" transform="translate(81.793093, 115.277224) scale(-1, 1) rotate(-180.000000) translate(-81.793093, -115.277224) " />
            <path d="M138.216014,92.10989 C137.516014,92.60989 137.316014,93.40989 137.916014,94.20989 C138.316014,95.00989 138.216014,96.90989 137.616014,98.70989 C136.516014,102.10989 133.916014,106.30989 133.916014,104.80989 C133.916014,104.20989 132.816014,103.80989 131.416014,103.80989 C129.116014,103.80989 128.716014,104.10989 129.016014,105.90989 C129.116014,106.70989 126.816014,108.30989 125.716014,108.30989 C125.216014,108.30989 124.916014,107.30989 124.916014,106.20989 C124.916014,105.00989 124.116014,103.40989 123.216014,102.60989 C118.916014,99.20989 116.716014,98.00989 114.616014,97.90989 C112.916014,97.80989 112.416014,97.20989 112.416014,95.00989 C112.516014,92.50989 112.216014,92.30989 108.216014,92.30989 L103.916014,92.30989 L103.916014,98.20989 C103.916014,106.00989 103.116014,109.70989 100.816014,112.20989 C98.416014,114.80989 98.416014,115.30989 100.916014,115.30989 C102.716014,115.30989 102.916014,116.00989 102.916014,121.40989 C102.916014,125.10989 102.516014,127.20989 101.916014,126.80989 C101.416014,126.50989 100.916014,127.00989 100.816014,128.00989 C100.816014,129.60989 100.716014,129.60989 100.016014,127.80989 C99.316014,126.20989 99.116014,126.40989 98.616014,129.20989 C98.216014,131.10989 97.916014,134.50989 97.916014,136.90989 L97.916014,141.30989 L160.016014,141.30989 C194.116014,141.30989 223.216014,141.00989 224.516014,140.70989 C225.816014,140.40989 226.916014,139.70989 226.916014,139.10989 C226.916014,138.60989 226.516014,138.50989 225.916014,138.80989 C225.416014,139.10989 224.916014,138.90989 224.916014,138.40989 C224.916014,137.80989 225.316014,137.30989 225.816014,137.30989 C228.616014,137.30989 229.116014,124.60989 226.316014,123.00989 C225.516014,122.50989 225.216014,121.70989 225.516014,121.10989 C224.416014,121.10989 223.916014,120.90989 223.916014,120.30989 C223.916014,119.70989 223.416014,119.50989 222.816014,119.80989 C221.016014,121.00989 216.716014,119.40989 217.316014,117.80989 C217.616014,117.00989 217.416014,116.30989 216.916014,116.30989 C216.316014,116.30989 215.916014,117.20989 215.916014,118.20989 C215.916014,121.00989 212.516014,124.70989 210.616014,124.00989 C209.116014,123.50989 209.216014,123.00989 211.416014,120.90989 C213.016014,119.30989 213.616014,117.80989 213.216014,116.80989 C212.916014,115.80989 213.216014,114.70989 214.016014,114.20989 C214.916014,113.70989 215.416014,111.70989 215.316014,108.70989 C215.216014,104.70989 214.716014,103.60989 212.316014,101.60989 C208.516014,98.60989 206.316014,98.70989 202.816014,102.20989 C199.416014,105.70989 199.116014,109.20989 201.816014,114.80989 C202.816014,117.00989 203.516014,119.30989 203.216014,119.90989 C203.016014,120.60989 203.716014,121.40989 204.816014,121.80989 C206.116014,122.20989 206.616014,123.00989 206.216014,123.90989 C205.716014,125.20989 205.316014,125.10989 203.516014,123.40989 L201.316014,121.40989 L197.416014,123.70989 C194.716014,125.40989 192.916014,125.90989 191.416014,125.30989 C190.316014,124.90989 188.816014,124.80989 188.216014,125.00989 C186.816014,125.50989 186.316014,118.90989 187.516014,115.90989 C188.016014,114.60989 188.316014,114.60989 189.516014,115.70989 C190.916014,117.20989 195.316014,116.70989 194.316014,115.20989 C193.416014,113.60989 195.016014,111.90989 196.116014,113.40989 C196.416014,112.50989 195.216014,111.70989 193.916014,111.70989 C192.616014,111.60989 191.316014,111.00989 191.116014,110.40989 C190.816014,109.60989 190.216014,109.60989 188.816014,110.30989 C187.016014,111.30989 186.916014,110.90989 186.916014,101.90989 C186.916014,95.30989 186.516014,92.30989 185.716014,92.00989 C185.016014,91.70989 138.916014,91.70989 138.216014,92.10989 Z" id="Shape" stroke="#000000" fillRule="nonzero" />
          </g>
        </g>
      </svg>
      <div className="mobile-anim__bitmap">
        <img src="/img/amp.jpg" srcSet="/img/amp-2x.jpg 2x" width="100%" />
      </div>
    </div>);
  }
}

export default MobileAnim;
