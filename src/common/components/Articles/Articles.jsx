import React, { PropTypes } from 'react';
import Article from '../../containers/Article';

const Articles = props => (
  <div className="view articles">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          {
            (
              props.activeRouteName === 'articles'
              && props.articles
              && props.articles.map((article, idx) => (
                <div className="margin-bottom-sm" key={idx}>
                  <h2 className="heading heading--3 heading--inline margin-right-md"><a
                    href={`/articles/${article.slug}`}
                    onClick={props.startRouteChange}>{article.title}</a></h2>
                  <span className="text-sm text-discreet text-light ">{article.createdDateDisplay}</span>
                </div>
              ))
            )
          }
          {
            (
              props.activeRouteName === 'article' && <Article />
            )
          }
        </div>
      </div>
    </div>
  </div>);

Articles.propTypes = {
  startRouteChange: PropTypes.func.isRequired
};

export default Articles;
