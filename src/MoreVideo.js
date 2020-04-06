import React , {Component} from 'react'
import Video from './Video'

export default class MoreVideo extends Component {

    display_video = (videos) => {
        return videos.map(video => <Video video = {video} class_name = {"more_video_item"} pickDiffrentVideo = {this.props.pickDiffrentVideo}/>)
    }
    render(){
        let videos = this.props.moreVideos 
        return (
            <div className="more_video">
                {this.display_video(videos)}
            </div>
        )
    }
}