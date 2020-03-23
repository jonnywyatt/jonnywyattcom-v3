import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  componentDidMount() {
    window.DISQUS && window.DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = this.props.slug;
        this.page.url = `https://jonnywyatt.com/articles/${this.props.slug}`;
      }
    });
  }
  render () {
    return (
      <div className="article">
        <div className="margin-bottom-ml">
          <a
            className="text-sm icon-text icon-text--sm"
            href="/articles"
            onClick={this.props.startRouteChange}>
            <i className="icon-chevron-left-blue padding-right-xs" /> All posts</a>
        </div>
        <h1 className="heading heading--2 margin-bottom-md">{this.props.title}</h1>
        <div className="margin-bottom-ml">
          <time dateTime={this.props.createdDate}>{this.props.createdDateDisplay}</time>
        </div>
        <div className="padding-bottom-lg margin-bottom-lg" dangerouslySetInnerHTML={{ __html: this.props.contents }} />
        <div id="disqus_thread"></div>
        <script src="https://jonnywyatt-com.disqus.com/embed.js" defer></script>
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
