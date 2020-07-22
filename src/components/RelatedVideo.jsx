import React from 'react';
import { Link } from 'react-router-dom';



const limitTitle = (title, letterCount) => {
    return title.length <= letterCount ? title : `${title.slice(0, letterCount)}...`;
};


const RelatedVideo = ({ video }) => {

    return (
        <>
            <div className="card mb-3" style={{ width: "100%" }}>
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <Link to={`/play_video/${video.id.videoId}/${video.snippet.channelId}`}>
                            <img src={video.snippet.thumbnails.high.url} className="card-img" alt="Thumbnail" width="100%" height="200" />
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body related-video-card">
                            <div className="related-video-title">
                                <Link to={`/play_video/${video.id.videoId}/${video.snippet.channelId}`}>
                                    <h6 className="card-title">{limitTitle(video.snippet.title, 100)}</h6>
                                </Link>
                            </div>
                            <Link to={`/channel/${video.snippet.channelId}`}>
                                <p className="card-text">{video.snippet.channelTitle}</p>
                            </Link>
                            <span>{new Date(Date.parse(video.snippet.publishedAt)).toDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatedVideo;
