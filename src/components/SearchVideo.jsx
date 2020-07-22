import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import keys from "../config";

const limitTitle = (title, letterCount) => {
    return title.length <= letterCount ? title : `${title.slice(0, letterCount)}...`;
};

class SearchVideo extends Component {
    // console.log(video);
    // console.log(video.channel);
    state = {
        channel: null,
    };

    async componentDidMount() {
        try {
            const response = await axios.get(
                `${keys.BASE_URL}/channels?part=snippet,contentDetails,statistics&id=${this.props.video
                    .snippet.channelId}&key=${keys.API_KEY}`,
            );
            this.setState({ channel: response.data });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { video } = this.props;

        return (
            <>
                <div className="card mx-3 my-5" style={{ width: "18rem", fontWeight: "bold", height: "28rem" }}>
                    <Link to={`/play_video/${video.id.videoId}/${video.snippet.channelId}`}>
                        <img src={video.snippet.thumbnails.high.url} className="card-img-top" alt="video thumbnail" width="100%" height="200px" /></Link>
                    <div className="card-body video-body">
                        {this.state.channel ?
                            <Link to={`/channel/${video.snippet.channelId}`}>
                                <img src={this.state.channel.items[0].snippet.thumbnails.default.url}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=37"; }}
                                    alt="channel thumbnails" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></Link>
                            : null}
                        <Link to={`/play_video/${video.id.videoId}/${video.snippet.channelId}`}>
                            <h6 className="card-text ml-3">{limitTitle(video.snippet.title, 50)}</h6></Link>
                    </div>
                    <div className="video-footer pb-3">
                        <Link to={`/channel/${video.snippet.channelId}`}><p>{video.snippet.channelTitle}</p></Link>
                        <span>{new Date(Date.parse(video.snippet.publishedAt)).toDateString()}</span>
                    </div>
                </div>
            </>
        );
    }


};

export default SearchVideo;

