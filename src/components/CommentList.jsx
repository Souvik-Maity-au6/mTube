import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Comment.css';
import Reply from './Reply';

class CommentList extends Component {
    state = {
        viewReply: false
    };
    render() {
        return (
            <div className="top-comment">
                <Link to={`/channel/${this.props.comment.snippet.topLevelComment.snippet.authorChannelId.value}`}>
                    <img src={this.props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=37"; }}
                        style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="author" />
                    <span className="mx-3">{this.props.comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                    <span>{new Date(Date.parse(this.props.comment.snippet.topLevelComment.snippet.publishedAt)).toDateString()}</span>
                </Link>
                <p className="mx-5 px-3">{this.props.comment.snippet.topLevelComment.snippet.textOriginal}</p>
                <p className="mx-5 px-3"><i className="fa fa-thumbs-up" aria-hidden="true"></i> {this.props.comment.snippet.topLevelComment.snippet.likeCount}</p>
                {this.props.comment.replies ?
                    <>
                        <p className="mx-5 px-3" onClick={() => this.setState({ viewReply: !this.state.viewReply })}>
                            <a href="#viewReply" data-toggle="collapse">{!this.state.viewReply ? `View ${this.props.comment.replies.comments.length} replis` : `Hide ${this.props.comment.replies.comments.length} replis`}</a>
                        </p>
                        <p id="viewReply" className="collapse mx-5 px-5">
                            {this.props.comment.replies.comments.map(reply => <Reply key={reply.id} reply={reply} />)}

                        </p>
                    </> : null
                }

            </div>
        );
    }

};

export default CommentList;
