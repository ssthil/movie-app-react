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
import SelectDropdown from './components/SelectDropdown';
import Header from './components/Header';
import MovieList from './components/MovieList';
import TopMenu from './components/TopMenu';
import tvShowGenres from './config/genre.config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'TV Shows',
      results: [],
      img_url: API_IMG_URL,
      img_size_large: IMG_SIZE_LARGE,
      genreLabel: 'Genre',
      subtitleLabel: 'Subtitles',
      shortbyLabel: 'Short by',
      genres: []
    };
  }

  componentDidMount() {
    this.fetchTvShows();
    this.genreArray();
  }

  genreArray() {
    var converStr = JSON.stringify(tvShowGenres);
    var replaceName = converStr.replace(/name/g, 'label');
    var result = replaceName.replace(/id/g, 'value');
    var convertJson = JSON.parse(result);
    this.setState({
      genres: convertJson
    });
  }

  fetchTvShows() {
    let urlTvDiscover = API_URL + API_DISCOVER_URI + API_KEY_PARAM + API_KEY;
    return fetch(urlTvDiscover)
      .then(response => response.json())
      .then(data => data.results)
      .then(results => this.setState({ results }))
      .catch(error => console.log(error));
  }

  render() {
    const {
      results,
      img_url,
      img_size_large,
      expanded,
      genreLabel,
      subtitleLabel,
      shortbyLabel,
      genres
    } = this.state;
    // console.log(results);
    // console.log(tvShowGenres);
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="hooq-header-bg">
            <TopMenu />
            <div className="container margin-top-none">
              <Header title="All TV Shows" />
              <div className="card">
                <div className="row">
                  <div className="col s4 m4">
                    <SelectDropdown option={genres} label={genreLabel} />
                  </div>
                  <div className="col s4 m4">
                    <SelectDropdown option={genres} label={subtitleLabel} />
                  </div>
                  <div className="col s4 m4">
                    <SelectDropdown option={genres} label={shortbyLabel} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            {results.map(item => (
              <MovieList
                key={item.id}
                item={item}
                imgUrl={img_url}
                imgSize={img_size_large}
                expanded={expanded}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
