import {
	SET_PLAY_VIDEO,
	TOGGLE_PLAY_VIDEO_FETCHING,
	SET_COMMENTS,
} from "../actionTypes";

const initialState = {
	playVideo: null,
	comments: null,
	isPlayVedeoFetching: false,
};

const videoPlayReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_PLAY_VIDEO:
			return {...state, playVideo: payload};
		case TOGGLE_PLAY_VIDEO_FETCHING:
			return {...state, isVideosFetching: !state.isPlayVedeoFetching};
		case SET_COMMENTS:
			return {...state, comments: payload};
		default:
			return state;
	}
};

export default videoPlayReducer;
