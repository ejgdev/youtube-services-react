import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as YTSearch from 'youtube-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const { API_KEY } = process.env;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('');
  }

  videoSearch(term) {
    const opts = {
      maxResults: 6,
      key: API_KEY,
    };

    YTSearch(term, opts, (err, results) => {
      this.setState({
        videos: results,
        selectedVideo: results[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    const { selectedVideo, videos } = this.state;

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={(selected) => this.setState({ selectedVideo: selected })}
          videos={videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
