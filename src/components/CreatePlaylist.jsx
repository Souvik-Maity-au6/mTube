import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPlaylist } from '../redux/actions/playlistActions';
import '../styles/CreatePlaylist.css';
const initialState = {
    title: "",
    privacyStatus: "",
    description: "",
};

class CreatePlaylist extends Component {

    state = initialState;

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
    };

    handleSubmitCreatePlaylist = (event) => {
        event.preventDefault();
        const playlist = {
            status: {
                privacyStatus: this.state.privacyStatus
            },
            snippet: {
                description: this.state.description,
                title: this.state.title
            },
        };

        this.props.createPlaylist(playlist);
        this.setState(initialState);
        this.props.click();
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmitCreatePlaylist}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Playlist title :</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.handleChange} type="text" id="fname" name="title" value={this.state.title} placeholder="Your playlist title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="pStatus">Privacy status :</label>
                        </div>
                        <div className="col-75">
                            <select onChange={this.handleChange} name="privacyStatus" id="pStatus" value={this.state.privacyStatus}>
                                <option value="" disabled>Choose a status</option>
                                <option value="public">Public</option>
                                <option value="unlisted">Unlisted</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Description :</label>
                        </div>
                        <div className="col-75">
                            <textarea onChange={this.handleChange} id="subject" name="description" value={this.state.description} placeholder="Write something.." style={{ height: "200px" }}></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <input type="submit" value="Create" />
                        <button onClick={this.props.click} type="button" className="btn btn-danger mx-3">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { createPlaylist })(withRouter(CreatePlaylist)); 