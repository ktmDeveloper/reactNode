import React, { PureComponent } from 'react';

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


export class SearchBar extends PureComponent { //pureCompenent helps with performance

    state = {
        searchTerm: ''
    }
    doSearch = debounce(() => {
        this.props.doSearch(this.state.searchTerm);
    }, 300)

    handleSearch = (event) =>{
        this.setState({searchTerm: event.target.value}, () => {
            this.doSearch();
        });
    }

  render() {
    return (
        <div className="input-group search">
            <input 
              value={this.state.searchTerm} 
              onChange={this.handleSearch}
              type="search" 
              className="form-control" 
              placeholder="Search for..." />
        </div>

    );
  }
}

export default SearchBar;
