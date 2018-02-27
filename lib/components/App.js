import React, { Component } from 'react';

import ArticleList from './ArticleList';

export default class App extends Component {
    state = this.props.store.getState();
    // articleActions = { //use a different to get author details for abstraction
    //     lookupAuthor: (authorId) => this.state.authors[authorId]
    // }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                store={this.props.store}
            />
        );
  }
}
