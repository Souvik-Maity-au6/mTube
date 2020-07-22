import {SET_CHANNLE, TOGGLE_CHANNEL_FETCHING} from "../actionTypes";

const initialState = {
	channel: null,
	isChannelFetching: false,
};

const channelReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_CHANNLE:
			return {...state, channel: payload};
		case TOGGLE_CHANNEL_FETCHING:
			return {...state, isChannelFetching: !state.isChannelFetching};
		default:
			return state;
	}
};

export default channelReducer;
