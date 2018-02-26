import React, { Component } from 'react';
import DataApi from '../DataApi';
import {data} from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data); //expose global variable for API

export default class App extends Component {
    state = {
        articles: api.getArticles(),
        authors: api.getAuthors()
    }
    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId]
    }
  render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
  }
}