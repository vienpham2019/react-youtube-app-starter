import React , {Component} from 'react'
import Video from './Video'
import MoreVideo from './MoreVideo'

export default class Container extends Component {

    render(){
        let mainVideo = this.props.videos[0]
        let moreVideos = this.props.videos.slice(1,this.props.videos.length - 1)
        return (
            <div className="container">
                <Video 
                    video = {mainVideo}
                    class_name = {"video"}
                /> 
                <MoreVideo moreVideos = {moreVideos} pickDiffrentVideo = {this.props.pickDiffrentVideo}/> 
            </div>
        )
    }
}