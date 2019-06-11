import React, { Component } from "react";

export default class VideoTile extends Component{
    render(){
        const embedUrl = this.props.video.snippet.thumbnails.default.url
        return(<div onClick={() => {
                this.props.onClickVideo(this.props.video)
        }}>
             <img src={embedUrl} />
            <h4>{this.props.video.snippet.title}</h4>
            <p>{this.props.video.snippet.description}</p>
            
        </div>)
    }
}