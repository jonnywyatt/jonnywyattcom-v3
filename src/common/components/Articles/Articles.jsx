import React, { PropTypes } from 'react';
import Article from '../../containers/Article';

class Articles extends React.Component {
  render() {
    return (
      <div className="view articles">
        {
          (
            this.props.activeRouteName === 'articles'
            && this.props.articles
            && this.props.articles.map((article, idx) => (
              <div className="margin-bottom-sm" key={idx}>
                <h2 className="heading heading--3 margin-right-md"><a
                  href={`/articles/${article.slug}`}
                  onClick={this.props.startRouteChange}>{article.title}</a></h2>
                <span
                  className="text-sm text-discreet text-light ">{article.createdDateDisplay}</span>
              </div>
            ))
          )
        }
        {
          (
            this.props.activeRouteName === 'article' && <Article />
          )
        }
      </div>);
  }
}

Articles.propTypes = {
  startRouteChange: PropTypes.func.isRequired
};

export default Articles;
