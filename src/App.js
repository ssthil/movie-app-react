import React, { Component } from 'react';
import Select from 'react-select';

import {
  API_URL,
  API_IMG_URL,
  IMG_SIZE_LARGE,
  API_DISCOVER_URI,
  API_KEY_PARAM,
  API_KEY
} from './config/api';

/** components */
// import Dropdown from './Dropdown';
import MovieList from './MovieList';

const tvShowGenres = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 16, name: 'Animation'},
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime'},
  { id: 99, name: 'Documentary'},
  { id: 18, name: 'Drama'},
  { id: 10751, name: 'Family'},
  { id: 10762, name: 'Kids'},
  { id: 9648, name: 'Mystery'},
  { id: 10763, name: 'News'},
  { id: 10764, name: 'Reality'},
  { id: 10765, name: 'Sci-Fi & Fantasy'},
  { id: 10766, name: 'Soap'},
  { id: 10767, name: 'Talk'},
  { id: 10768, name: 'War & Politics'},
  { id: 37, name: 'Western'}
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'TV Shows',
      results: [],
      img_url: API_IMG_URL,
      img_size_large: IMG_SIZE_LARGE,
      expanded: false,
      dropDownTitle: 'Genre',
      tvShowGenres: [],
      genre:[]
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
      tvShowGenres: convertJson
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

  // handleExpandClick = () => {
  //   this.setState(prevState => ({ expanded: !prevState.expanded }));
  // };

  render() {
    const {
      results,
      img_url,
      img_size_large,
      expanded,
      // dropDownTitle,
      tvShowGenres
    } = this.state;
    // console.log(results);
    // console.log(tvShowGenres);
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="hooq-header-bg">
            <div className="top-menu">
              <a href="#!" className="hooq-logo">
                <img
                  src="https://www.rapidtvnews.com/images/2017/09/hooq-logo-11_Sept_2017.png"
                  alt="hooqtv"
                  width={80}
                />
              </a>
              <ul>
                <li>
                  <a href="#!">Browse</a>
                </li>
                <li>
                  <a href="#!">Rent</a>
                </li>
              </ul>
            </div>
            <div className="container margin-top-none">
              <div className="row">
                <div className="col s12 m12">
                  <div className="title">All TV Shows</div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-content padding-none">
                      <Select
                        options={tvShowGenres}
                        styles={customStyles}
                      />
                    </div>
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
                // handleExpandClick={this.handleExpandClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0px dotted pink',
    color: state.isSelected ? '#000' : '#345',
    padding: 20,
    boxShadow: '0 0 0 0px #2684FF',
    lineHeight: '14px',
    borderRadius: 0
  })
};

export default App;
