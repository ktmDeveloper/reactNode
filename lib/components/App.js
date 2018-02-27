import React, { Component } from 'react';
import DataApi from '../DataApi';
import axios from 'axios';

import ArticleList from './ArticleList';

export default class App extends Component {
    state = {
        articles: this.props.initialData.articles, //used props so that server and client can have same initial state
        authors: this.props.initialData.authors
    }

    async componentWillMount() { //componentDidMount() is invoked immediately after a component is mounted. 
        const rawData = await axios.get('/data'); 
        const api = new DataApi(rawData.data);

        this.setState(()=>({
            articles:api.getArticles(),
            authors:api.getAuthors()
        }));
    }

    articleActions = { //use a different to get author details for abstraction
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
