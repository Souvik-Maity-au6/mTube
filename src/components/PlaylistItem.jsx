import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mapToPropsUser } from '../redux/mapStateToProps';

const PlaylistItem = ({ playlist, userObj }) => {
    return (
        <>
            <div className="card" style={{ width: "18rem", fontWeight: "bold", margin: "5px" }}>
                <img src={playlist.snippet.thumbnails.high.url} className="card-img-top"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80"; }}
                    alt="video thumbnail" width="100%" height="200px" />
                <div className="card-body playlist-body">
                    <h4 className="card-text ml-3">{playlist.snippet.title}</h4>
                    <p className="card-text ml-3">Created on : {new Date(Date.parse(playlist.snippet.publishedAt)).toDateString()}</p>
                    {playlist.snippet.description.length ?
                        <p className="card-text ml-3">{playlist.snippet.description}</p>
                        : <p className="card-text ml-3">No description provided</p>}
                </div>
                <div className="pb-3 playlist-footer">
                    <Link to={`/channel/${playlist.snippet.channelId}`}>
                        <img src={userObj.user.imageUrl}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=37"; }}
                            alt="user thumbnail" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    </Link>
                    <Link to={`/channel/${playlist.snippet.channelId}`}>
                        <p className="card-text ml-3">{playlist.snippet.channelTitle}</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default connect(mapToPropsUser)(PlaylistItem);
