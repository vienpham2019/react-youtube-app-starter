import React, {Component} from 'react'
import VideoTile from './VideoTile'

export default class VideoList extends Component{
    render(){
        return(<div>
            {this.props.videos.map(video =>  <VideoTile video={video} onChangeVideo={this.props.onChangeVideo}/>)}
           
        </div>)
    }
}