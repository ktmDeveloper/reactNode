import React, { Component } from 'react';

import ArticleList from './ArticleList';

import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

export default class App extends Component {
    state = this.props.store.getState();

    onStoreChange = () => {
        this.setState(this.props.store.getState());
    }
    
    componentDidMount(){
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    }
    componentWillMount(){
        this.props.store.unsubscribe(this.subscriptionId);
    }
    
    render() {
        let {articles, searchTerm} = this.state;

        if (searchTerm){
            articles = pickBy(articles, (value) => {
                return value.title.match(searchTerm) || value.body.match(searchTerm);
            });
        }
        return (
            <div>

            <SearchBar doSearch={this.props.store.setSearchTerm} />
            <ArticleList
                articles={articles}
                store={this.props.store}
            />
            </div>
        );
  }
}
