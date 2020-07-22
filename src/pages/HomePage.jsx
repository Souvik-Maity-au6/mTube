import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeVideo from '../components/HomeVideo';
import { fetchRecomendedVideos } from "../redux/actions/videoActions";
import { mapToPropsVideos } from '../redux/mapStateToProps';
import '../styles/HomePage.css';

class HomePage extends Component {
    state = {
        pageToken: null,
    };


    componentDidMount() {
        this.props.fetchRecomendedVideos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pageToken !== this.state.pageToken) {
            this.props.fetchRecomendedVideos(this.state.pageToken);
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
            <>  {this.props.allVideos.recomendedVideos ?

                <div className="next-prev-home">
                    <h2 className="mr-auto">Recomended :</h2>
                    {this.props.allVideos.recomendedVideos.prevPageToken
                        ? <button type="submit" onClick={this.handlePrev} className="previous div-style" value={this.props.allVideos.recomendedVideos.prevPageToken}>&laquo; Previous</button>
                        : null}
                    <button type="submit" onClick={this.handleNext} className="next div-style" value={this.props.allVideos.recomendedVideos.nextPageToken}>Next &raquo;</button>
                </div> : null}
                <div className="trending-page-container">
                    {this.props.allVideos.recomendedVideos ?
                        <>
                            {this.props.allVideos.recomendedVideos.items.map(video => <HomeVideo key={video.id} video={video} />)}

                        </> : <h1>Loading...</h1>
                    }

                </div>
            </>
        );
    }
}


export default connect(mapToPropsVideos, { fetchRecomendedVideos })(HomePage); 