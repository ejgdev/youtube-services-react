import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    const { onSearchTermChange } = this.props;
    this.setState({ term });
    onSearchTermChange(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar">
        <input
          placeholder="Search for..."
          value={term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
