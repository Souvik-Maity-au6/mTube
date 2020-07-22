import React, { Component } from 'react';


class VideoPlayer extends Component {


    render() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"
                    title="video-player"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; 
            picture-in-picture" allowFullScreen>
                </iframe>
            </div>

        );
    }

};

export default VideoPlayer;

