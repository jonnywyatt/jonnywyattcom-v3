import React from 'react';

const Article = props => (
  <div className="article">
    <div className="margin-bottom-ml">
      <a
        className="text-sm icon-text icon-text--sm"
        href="/articles"
        onClick={props.startRouteChange}><i className="icon-chevron-left-mid-gray padding-right-xs" /> Back
        to list</a>
    </div>
    <h1 className="heading heading--2 margin-bottom-md">{ props.title }</h1>
    <div className="margin-bottom-ml"><time dateTime={props.createdDate}>{ props.createdDateDisplay }</time></div>
    <div dangerouslySetInnerHTML={{ __html: props.contents }} />
  </div>);

Article.defaultProps = {
  title: ''
};

export default Article;
