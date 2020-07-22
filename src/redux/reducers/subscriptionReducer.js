import {SET_SUBSCRIPTION, TOGGLE_SUBSCRIPTION_FETCHING} from "../actionTypes";

const initialState = {
	subscription: null,
	isSubcriptionFetching: false,
};

const subscriptionReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_SUBSCRIPTION:
			return {...state, subscription: payload};
		case TOGGLE_SUBSCRIPTION_FETCHING:
			return {...state, isSubcriptionFetching: !state.isSubcriptionFetching};
		default:
			return state;
	}
};

export default subscriptionReducer;
