import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchVideos } from '../redux/actions/videoActions';
import { mapToPropsVideos } from '../redux/mapStateToProps';
import SearchVideo from '../components/SearchVideo';
import '../styles/SearchResultPage.css';

class SearchResultPage extends Component {
    state = {
        pageToken: null,
    };
    componentDidMount() {
        this.props.fetchSearchVideos(this.props.match.params.searchQuery);
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps);
        // console.log(this.props.match.params.searchQuery);
        if (prevProps.match.params.searchQuery !== this.props.match.params.searchQuery) {
            this.props.fetchSearchVideos(this.props.match.params.searchQuery);
        } else if (prevState.pageToken !== this.state.pageToken) {
            this.props.fetchSearchVideos(this.props.match.params.searchQuery, this.state.pageToken);
        }
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
            <>
                {
                    this.props.allVideos.searchResults ?
                        <div className="next-prev">
                            {this.props.allVideos.searchResults.prevPageToken
                                ? <button type="submit" onClick={this.handlePrev} className="previous div-style" value={this.props.allVideos.searchResults.prevPageToken}>&laquo; Previous</button>
                                : null}
                            <button type="submit" onClick={this.handleNext} className="next div-style" value={this.props.allVideos.searchResults.nextPageToken}>Next &raquo;</button>
                        </div> : null
                }
                <div className="search-result-container">
                    {this.props.allVideos.searchResults ?
                        this.props.allVideos.searchResults.items.map(video => <SearchVideo key={video.id.videoId} video={video} />)
                        : <h1>Loading...</h1>}
                </div>
            </>
        );
    }
}

export default connect(mapToPropsVideos, { fetchSearchVideos })(SearchResultPage);