import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import { OutlineButton } from "./components/Buttons";
import Table from "./components/Table";
import Search from "./components/Search";
import RadGrid from "./components/RadGrid";
import GlobalStyle from "./globalStyle";

const DEFAULT_QUERY = "javascript";
const DEFAULT_HPP = "100";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

// const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

const Page = styled.div`
  margin: 20px;
`;

const Interactions = styled.div`
  text-align: center;
`;

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
      error: null
    };
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchSearchTopStories = async (searchTerm, page = 0) => {
    axios
      .get(
        `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
      )
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));
  };

  needsToSearchTopStories = searchTerm => {
    const { results } = this.state;
    return !results[searchTerm];
  };

  onSearchSubmit = e => {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    e.preventDefault();
  };

  setSearchTopStories = result => {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits =
      results && results[searchKey] ? results[searchKey].hits : [];
    const updatedHits = [...oldHits, ...hits];

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    });
  };

  onDismiss = id => {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;

    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: { ...results, [searchKey]: { hits: updatedHits, page } }
    });
  };

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, results, searchKey, error } = this.state;
    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;
    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div>
        <Page>
          <Interactions>
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            >
              Search
            </Search>
          </Interactions>
          {error ? (
            <Interactions>
              <p>Something went wrong.</p>
            </Interactions>
          ) : (
            <Table list={list} onDismiss={this.onDismiss} />
          )}

          <Interactions>
            <OutlineButton
              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
            >
              More
            </OutlineButton>
          </Interactions>
        </Page>
        {/* <RadGrid /> */}
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
