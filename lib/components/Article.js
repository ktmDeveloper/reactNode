import React from 'react';
import propTypes from 'prop-types';


const dateDisplay = (dateString) => (
    new Date(dateString).toDateString()
);

const Article = (props) => {
    const {article, store} = props;
    const author = store.lookupAuthor(article.authorId); //use this action to remove dependency from author component
  return (
    <div className="card">
        <div className="article card-block">
            <h1 className="card-title">{article.title}</h1>
            <span className="card-subtitle mb-2 text-muted">{dateDisplay(article.date)}</span>
            <p className="card-test">{article.body}</p>
            <a className="card-link" href={author.website}>{author.firstName} {author.lastName}</a>
        </div>
    </div>
  );
};

Article.propTypes = { //propTypes is used for type checking : string, number, date
    article: propTypes.shape({
        title: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
        date: propTypes.string.isRequired
    })
};

export default Article;
