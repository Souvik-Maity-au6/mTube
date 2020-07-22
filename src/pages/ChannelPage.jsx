import React, { Component } from 'react';
import { connect } from 'react-redux';
import { channelFetching } from '../redux/actions/channelActions';
import { mapToPropsChannel } from '../redux/mapStateToProps';
import '../styles/ChannelPage.css';

class ChannelPage extends Component {

    componentDidMount() {
        this.props.channelFetching(this.props.match.params.channelId);
    }

    render() {
        return (
            <>
                {this.props.channel.channel ?
                    <div className="channel-page-container">
                        <div className="card mt-3 mb-3 channel-card" style={{ width: "700px", height: "100%" }}>
                            <img src={this.props.channel.channel.items[0].snippet.thumbnails.high.url}
                                className="card-img-top" alt="channel banner" width="100%" height="300" />
                            <div className="card-body">
                                <h5 className="card-title">Channel name : {this.props.channel.channel.items[0].snippet.title}</h5>
                                <span className="card-text">{this.props.channel.channel.items[0].statistics.subscriberCount} subscribers</span>
                                <span className="mx-3">{new Date(Date.parse(this.props.channel.channel.items[0].snippet.publishedAt)).toDateString()}</span>
                                <p className="card-text mt-3">Description : {this.props.channel.channel.items[0].snippet.description}</p>
                                <p className="card-text">Total videos : {this.props.channel.channel.items[0].statistics.videoCount}</p>
                                <p className="card-text">Total views : {this.props.channel.channel.items[0].statistics.viewCount}</p>
                            </div>
                        </div>
                    </div>
                    : <h1>Loading...</h1>}
            </>
        );
    }
}

export default connect(mapToPropsChannel, { channelFetching })(ChannelPage);