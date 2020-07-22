import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlayVideo } from '../redux/actions/videoPlayAction';
import { channelFetching } from '../redux/actions/channelActions';
import { fetchRelatedVideos } from "../redux/actions/videoActions";
import VideoPlayer from "../components/VideoPlayer";
import Comments from '../components/Comments';
import RelatedVideo from '../components/RelatedVideo';
import '../styles/VideoDetailsPage.css';

const descriptionLength = (description, letterCount) => {

    return description <= letterCount ? description : `${description.slice(0, letterCount)}...`;
};

const showDescription = (description) => {
    return description.length > 250 ? `${description.slice(250)}...` : `No more description avilable`;
};

class VideoDetails extends Component {

    state = {
        moreDescription: false,
    };

    componentDidMount() {
        this.props.fetchPlayVideo(this.props.match.params.videoId);
        this.props.channelFetching(this.props.match.params.channelId);
        this.props.fetchRelatedVideos(this.props.match.params.videoId);

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.fetchRelatedVideos(this.props.match.params.videoId);
            this.props.fetchPlayVideo(this.props.match.params.videoId);
            this.props.channelFetching(this.props.match.params.channelId);
        }
        // console.log("did update");
    }

    render() {

        return (
            <>
                <div className="video-details-page-container container-fluid mt-5">
                    <div className="row">
                        <div className="video-player-container col-7">
                            {this.props.video.playVideo ?
                                <>
                                    <VideoPlayer videoId={this.props.video.playVideo.items[0].id} />
                                    <div className="video-description mt-3">
                                        <div className="border-bottom-description ">
                                            <h5>{this.props.video.playVideo.items[0].snippet.title}</h5>
                                            <div className="video-description-title">
                                                <p>{this.props.video.playVideo.items[0].statistics.viewCount} views</p>
                                                <p className="mr-auto px-3">{new Date(Date.parse(this.props.video.playVideo.items[0].snippet.publishedAt)).toDateString()}</p>
                                                <p><i className="fa fa-thumbs-up" aria-hidden="true"></i> {this.props.video.playVideo.items[0].statistics.likeCount}</p>
                                                <p className="px-3"> <i className="fa fa-thumbs-down" aria-hidden="true"></i> {this.props.video.playVideo.items[0].statistics.dislikeCount}</p>
                                            </div>
                                        </div>
                                        {this.props.channel.channel ?
                                            <div className="channel-details mt-3">
                                                <Link to={`/channel/${this.props.channel.channel.items[0].id}`}>
                                                    <img src={this.props.channel.channel.items[0].snippet.thumbnails.medium.url} alt="channel thumbnails"
                                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=37"; }}
                                                        style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
                                                </Link>
                                                <div className="channel-title">
                                                    <Link to={`/channel/${this.props.channel.channel.items[0].id}`}>
                                                        <h5 className="mx-3">{this.props.channel.channel.items[0].snippet.title}</h5></Link>
                                                    <p className="mx-3">{this.props.channel.channel.items[0].statistics.subscriberCount} subscribers</p>
                                                </div>

                                            </div>
                                            : null}
                                        <div className="description-details border-bottom-description">
                                            <p>{descriptionLength(this.props.video.playVideo.items[0].snippet.description, 250)}</p>
                                            {this.props.video.playVideo.items[0].snippet.description.length > 250 ?
                                                <>
                                                    <p id="moreDescription" className="collapse">
                                                        {showDescription(this.props.video.playVideo.items[0].snippet.description)}
                                                    </p>
                                                    <p onClick={() => this.setState({ moreDescription: !this.state.moreDescription })}>
                                                        <a href="#moreDescription" data-toggle="collapse">{!this.state.moreDescription ? "Show more" : "Show less"}</a>
                                                    </p>
                                                </> : null}
                                        </div>
                                    </div>
                                </> :
                                <h1>Loading...</h1>}
                            <div className="comment-container mt-3">
                                <Comments videoId={this.props.match.params.videoId} />
                            </div>
                        </div>
                        <div className="video-container col-5">
                            {this.props.allVideos.relatedVideos ?
                                this.props.allVideos.relatedVideos.items.map(video => <RelatedVideo key={video.id.videoId} video={video} />)
                                : <h1>Loading...</h1>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mergeProps = (reduxStore) => {
    return {
        video: { ...reduxStore.videoPlayState },
        channel: { ...reduxStore.channelState },
        allVideos: { ...reduxStore.videoState },
    };
};


export default connect(mergeProps, { fetchPlayVideo, channelFetching, fetchRelatedVideos })(VideoDetails);


