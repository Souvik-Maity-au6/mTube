import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const descriptionLength = (description, letterCount) => {

    return description <= letterCount ? description : `${description.slice(0, letterCount)}...`;
};


class Subscription extends Component {
    render() {
        const { channel } = this.props;
        return (
            <>  <Link to={`/channel/${channel.snippet.resourceId.channelId}`}>
                <div className="card my-5 mx-3" style={{ width: "18rem", fontWeight: "bold", height: "30rem" }}>
                    <img src={channel.snippet.thumbnails.high.url} className="card-img-top"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80"; }}
                        alt="channel thumbnail" width="100%" height="200px" />
                    <div className="card-body">
                        <h4 className="card-text">{channel.snippet.title}</h4>
                        <span>{channel.contentDetails.totalItemCount} items</span>
                        <span className="mx-3">{new Date(Date.parse(channel.snippet.publishedAt)).toDateString()}</span>
                        <p className="my-3">{descriptionLength(channel.snippet.description, 100)}</p>
                    </div>
                </div>
            </Link>
            </>
        );
    }
}

export default Subscription;