import React from 'react';
import { Link } from 'react-router-dom';

const Reply = ({ reply }) => {
    return (
        <>
            <div className="top-reply">
                <Link to={`/channel/${reply.snippet.authorChannelId.value}`}>
                    <img src={reply.snippet.authorProfileImageUrl}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=37"; }}
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }} alt="author" />
                    <span className="mx-3">{reply.snippet.authorDisplayName}</span>
                    <span>{new Date(Date.parse(reply.snippet.publishedAt)).toDateString()}</span>
                </Link>
                <p className="mx-5 px-3">{reply.snippet.textOriginal}</p>
                <p className="mx-5 px-3"><i className="fa fa-thumbs-up" aria-hidden="true"></i> {reply.snippet.likeCount}</p>
            </div>
        </>
    );
};

export default Reply;
