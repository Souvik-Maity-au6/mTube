import {SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING} from "../actionTypes";

const initialState = {
	playlist: null,
	isPlaylistFetching: false,
};

const playlistReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_PLAYLIST:
			return {...state, playlist: payload};
		case TOGGLE_PLAYLIST_FETCHING:
			return {...state, isPlaylistFetching: !state.isPlaylistFetching};
		default:
			return state;
	}
};

export default playlistReducer;
