import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import keys from "../config";

const limitTitle = (title, letterCount) => {
    return title.length <= letterCount ? title : `${title.slice(0, letterCount)}...`;
};

class HomeVideo extends Component {
    // console.log(video);
    // console.log(video.channel);
    state = {
        channel: null,
    };

    componentDidMount() {
        let channel;
        (async () => {
            let variable = await axios.get(
                `${keys.BASE_URL}/channels?part=snippet,contentDetails,statistics&id=${this.props.video
                    .snippet.channelId}&key=${keys.API_KEY}`,
            );
            channel = variable.data;

            this.setState({ channel: channel });
        })();


    }

    render() {
        const { video } = this.props;

        return (
            <>
                <div className="card mx-3 my-3" style={{ width: "18rem" }}>
                    <Link to={`/play_video/${video.id}/${video.snippet.channelId}`}>
                        <img src={video.snippet.thumbnails.high.url} className="card-img-top" alt="video thumbnail" width="100%" height="200px" /></Link>
                    <div className="card-body video-body">
                        {this.state.channel ?
                            <Link to={`/channel/${video.snippet.channelId}`}>
                                <img src={this.state.channel.items[0].snippet.thumbnails.default.url}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=37"; }}
                                    alt="channel thumbnails" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></Link>
                            : null}
                        <Link to={`/play_video/${video.id}/${video.snippet.channelId}`}>
                            <p className="card-text ml-3">{limitTitle(video.snippet.title, 50)}</p></Link>
                    </div>
                    <div className="video-footer-home pb-3">
                        <Link to={`/channel/${video.snippet.channelId}`}><p className="ml-5 pl-4">{video.snippet.channelTitle}</p></Link>
                        <span className="ml-5 mr-3">{video.statistics.viewCount} views</span>
                        <span>{new Date(Date.parse(video.snippet.publishedAt)).toDateString()}</span>
                    </div>
                </div>
            </>
        );
    }


};

export default HomeVideo;
