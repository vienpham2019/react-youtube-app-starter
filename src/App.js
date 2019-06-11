import React, { Component } from "react";
import SearchBar from './SearchBar'
import MainVideo from './MainVideo'
import VideoList from './VideoList'
import keys from './keys'
import _ from 'lodash'

const URL = (key,term) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${term}&type=video`
}

class App extends Component {

  constructor(){
    super()
    this.state = {
      videos: [],
      searchTerm: 'dogs',
      mainVideo: null,
      isLoading: true
    }
  }

  componentDidMount(){
      this.fetchVideos()
  }

  fetchVideos = () => {
    fetch(URL(keys.API_KEY,this.state.searchTerm))
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items.slice(1,5),
        mainVideo: data.items[0],
        isLoading: false
      })
    })
  }

  search = (term) => {

    this.setState({
      searchTerm: term
    }, () => this.fetchVideos())
  }

  changeVideo = (video) => {
    let arr = this.state.videos.filter(v => v.id.videoId !== video.id.videoId)

    arr.push(this.state.mainVideo)

   this.setState({
     videos: arr,
     mainVideo: video
   })

  }


  render() {
    const videoSearch = _.debounce(term => {
      this.search(term);
    }, 1000);


    return (
    <div>
      {this.state.isLoading
      ? 'Loading......'
      :<div>
      <SearchBar search={videoSearch} />
      <MainVideo video={this.state.mainVideo} />
      <VideoList videos={this.state.videos} onChangeVideo={this.changeVideo}/>
      </div>
    }
      
    </div>);
  }
}

export default App;
