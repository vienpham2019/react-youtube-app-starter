import React, { Component } from "react";
import key from './key'
import SearchBar from './SearchBar'
import MainVideo from './MainVideo'
import VideoList from './VideoList'
import _ from 'lodash'

const URL = (key, searchTerm) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${searchTerm}&type=video`
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      videos: [],
      selectedVideo: null,
      isLoading: true,
      searchTerm: 'dogs'
    }
  }

  componentDidMount(){
    this.fetchVideos()
  }


  fetchVideos = () => {
    fetch(URL(key.API_KEY,this.state.searchTerm))
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items.slice(1,5),
        selectedVideo: data.items[0],
        isLoading: false
      })
    })
  }

  changeVideo = (video) => {
    let arr = this.state.videos.filter(v => v.id.videoId !== video.id.videoId )

    arr.push(this.state.selectedVideo)

    this.setState({
      videos: arr,
      selectedVideo: video
    })
  }

  search = (term) => {
    this.setState({
      searchTerm: term 
    })
    this.fetchVideos()
  }


  render() {


  const videoSearch = _.debounce(term => {
          this.search(term);
        }, 1000);


    return (<div>
      {this.state.isLoading 
        ? 'Loading.....' 
        :<div> 
        <SearchBar onSearch={videoSearch} /> 
        <MainVideo video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onChangeVideo={this.changeVideo}/>
        </div>
        }
     

    </div>);
  }
}

export default App;
