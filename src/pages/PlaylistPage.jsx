import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapToPropsPlaylist } from '../redux/mapStateToProps';
import { playlistFetching } from '../redux/actions/playlistActions';
import PlaylistItem from '../components/PlaylistItem';
import CreatePlaylist from '../components/CreatePlaylist';
import '../styles/PlaylistPage.css';

class PlaylistPage extends Component {
    state = {
        createPlaylist: "none",
    };
    componentDidMount() {
        this.props.playlistFetching();
    }

    handleClickPlaylistOpen = () => {
        this.setState({ createPlaylist: "block" });
    };
    handleClickPlaylistClose = () => {
        this.setState({ createPlaylist: "none" });
    };
    render() {
        return (
            <>
                {this.state.createPlaylist === "none" ?
                    <button onClick={this.handleClickPlaylistOpen} type="button" className="btn btn-success float-right m-5">Create Playlist</button>
                    : null}
                <div className="show-create-playlist-form" style={{ display: this.state.createPlaylist }}>
                    <CreatePlaylist click={this.handleClickPlaylistClose} />
                </div>
                <div className="playlist-page-container">
                    {this.props.playlist.playlist ?
                        this.props.playlist.playlist.items.map(item => <PlaylistItem key={item.id} playlist={item} />)
                        : <h1>Loading...</h1>}
                </div>
            </>
        );
    }
}

export default connect(mapToPropsPlaylist, { playlistFetching })(PlaylistPage);