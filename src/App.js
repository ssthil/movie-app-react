import React, { Component } from 'react';

import {
  API_URL,
  API_IMG_URL,
  IMG_SIZE_LARGE,
  API_DISCOVER_URI,
  API_KEY_PARAM,
  API_KEY
} from './config/api';

/** components */
import MovieList from './MovieList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'TV Shows',
      results: [],
      img_url: API_IMG_URL,
      img_size_large: IMG_SIZE_LARGE,
      expanded: false
    };
  }

  componentDidMount() {
    this.fetchTvShows();
  }

  fetchTvShows() {
    let urlTvDiscover = API_URL + API_DISCOVER_URI + API_KEY_PARAM + API_KEY;
    return fetch(urlTvDiscover)
      .then(response => response.json())
      .then(data => data.results)
      .then(results => this.setState({ results }))
      .catch(error => console.log(error));
  }

  // handleExpandClick = () => {
  //   this.setState(prevState => ({ expanded: !prevState.expanded }));
  // };

  render() {
    const { results, img_url, img_size_large, expanded } = this.state;
    // console.log(results);
    return (
      <div>
        <h1>{this.state.title}</h1>
        {results.map(item => (
          <MovieList
            key={item.id}
            item={item}
            imgUrl={img_url}
            imgSize={img_size_large}
            expanded={expanded}
            // handleExpandClick={this.handleExpandClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
