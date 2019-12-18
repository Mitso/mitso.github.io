import React, { Component } from 'react';
import './assets/Search.css';

class Search extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <input className="search-input" type="search"
          placeholder="Search here"/>
        </fieldset>
      </form>
    )
  }
}

export default Search;
