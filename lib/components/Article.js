import React from 'react';

const dateDisplay = (dateString) => (
    new Date(dateString).toDateString()
);

const Article = (props) => {
    const {article, actions} = props;
    const author = actions.lookupAuthor(article.authorId); //use this action to remove dependency from author component
  return (
    <div className="card">
        <div className="article card-block">
            <h4 className="card-title">{article.title}</h4>
            <span className="card-subtitle mb-2 text-muted">{dateDisplay(article.date)}</span>
            <p className="card-test">{article.body}</p>
            <a className="card-link" href={author.website}>{author.firstName} {author.lastName}</a>
        </div>
    </div>
  );
};

export default Article;