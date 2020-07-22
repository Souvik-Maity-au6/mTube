import React, { Component } from 'react';
import { connect } from "react-redux";
import TrendingVideo from '../components/TrendingVideo';
import { fetchTrendingVideos } from "../redux/actions/videoActions";
import { mapToPropsVideos } from '../redux/mapStateToProps';
import '../styles/TrendingPage.css';


class TrendingPage extends Component {
    state = {
        pageToken: null,
    };


    componentDidMount() {
        this.props.fetchTrendingVideos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pageToken !== this.state.pageToken) {
            this.props.fetchTrendingVideos(this.state.pageToken);
        }
        // console.log(prevState);
    }

    handlePrev = (event) => {
        this.setState({ pageToken: event.target.value });
    };
    handleNext = (event) => {
        this.setState({ pageToken: event.target.value });
        // console.log(this.state.pageToken);
    };

    render() {

        return (
            <>  {this.props.allVideos.trendingVideos ?
                <div className="next-prev">
                    {this.props.allVideos.trendingVideos.prevPageToken
                        ? <button type="submit" onClick={this.handlePrev} className="previous div-style" value={this.props.allVideos.trendingVideos.prevPageToken}>&laquo; Previous</button>
                        : null}
                    <button type="submit" onClick={this.handleNext} className="next div-style" value={this.props.allVideos.trendingVideos.nextPageToken}>Next &raquo;</button>
                </div> : null}
                <div className="trending-page-container">
                    {this.props.allVideos.trendingVideos ?
                        <>
                            {this.props.allVideos.trendingVideos.items.map(video => <TrendingVideo key={video.id} video={video} />)}

                        </> : <h1>Loading...</h1>
                    }

                </div>
            </>
        );
    }
}

export default connect(mapToPropsVideos, { fetchTrendingVideos })(TrendingPage);