import React, { Component } from "react";
import Header from './Header'
import Container from './Container'
import './style.css'

const APIKey = "AIzaSyC1lY5LyqHwYzANIvbrnL9IcEy50eLTJuQ"

class App extends Component {
  constructor(){
    super()
    this.state = {
      videos: []
    }
  }

  searchVideo = (e) => {
    e.preventDefault()
    let value = e.target[0].value
    value = value.split(" ").join("-")
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${APIKey}&q=${value}&type=video`)
    .then(res => res.json())
    .then(videos => this.setState({videos: videos.items}))
    e.target.reset()
  }

  pickDiffrentVideo = (video) => {
    let videos = this.state.videos
    let index =  videos.indexOf(video)
    videos[index] = videos[0]
    videos[0] = video
    this.setState({videos})
  }

  render() {
    return (
      <div>
        <Header searchVideo = {this.searchVideo}/>
        <Container videos = {this.state.videos} pickDiffrentVideo = {this.pickDiffrentVideo}/> 
        <footer>Footer</footer>
      </div>
    )
  }
}

export default App;
