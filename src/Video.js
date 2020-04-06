import React , {Component} from 'react'

export default class Video extends Component {

    displayVideo = (video,class_name) => {
        if(video){
            return(
                <div className={class_name} onClick = {() => this.props.pickDiffrentVideo ? this.props.pickDiffrentVideo(video) : null }>
                    {
                    class_name === "video" 
                        ?<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
                        : <img src={video.snippet.thumbnails.high.url} alt="img"/>
                    }
                    <h3>{video.snippet.title}</h3>
                    {class_name === "video" ? <p>{video.snippet.description}</p> : ""}
                </div>
            )
        }
    }
    render(){
        let video = this.props.video 
        let class_name = this.props.class_name
        return (
            <div>
                {this.displayVideo(video,class_name)}
            </div>
        )
    }
}