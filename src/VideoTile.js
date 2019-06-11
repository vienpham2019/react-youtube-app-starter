import React, {Component} from 'react'

export default class VideoTile extends Component{
    render(){
        return(<div onClick={() => this.props.onChangeVideo(this.props.video)}>
            <h4>
            {this.props.video.snippet.title}
            </h4>
            <img src={this.props.video.snippet.thumbnails.default.url} />


        </div>)
    }
}