import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="margin-bottom-ml">
          <a
            className="text-sm icon-text icon-text--sm"
            href="/articles"
            onClick={this.props.startRouteChange}>
            <i className="icon-chevron-left-blue padding-right-xs" /> All posts</a>
        </div>
        <h1 className="heading heading--2 margin-bottom-md">{ this.props.title }</h1>
        <div className="margin-bottom-ml">
          <time dateTime={this.props.createdDate}>{ this.props.createdDateDisplay }</time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.contents }} />
      </div>
    );
  }
}

Article.propTypes = {
  startRouteChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  contents: PropTypes.string,
  createdDateDisplay: PropTypes.string,
  createdDate: PropTypes.string
};

Article.defaultProps = {
  title: ''
};

export default Article;
