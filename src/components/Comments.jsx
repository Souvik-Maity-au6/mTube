import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayVideoComment } from '../redux/actions/videoPlayAction';
import { mapToPropsVideoPlay } from '../redux/mapStateToProps';
import CommentList from './CommentList';

class Comments extends Component {

    componentDidMount() {
        this.props.fetchPlayVideoComment(this.props.videoId);

    }

    render() {
        return (
            <>
                {this.props.video.comments ?
                    <>
                        <h5 className="mb-3">{this.props.video.comments.items.length} Top comments</h5>
                        {this.props.video.comments.items.map(comment => <CommentList key={comment.id} comment={comment} />)}
                    </>
                    : <p>Loading comments...</p>
                }
            </>
        );
    }


};

export default connect(mapToPropsVideoPlay, { fetchPlayVideoComment })(Comments);
