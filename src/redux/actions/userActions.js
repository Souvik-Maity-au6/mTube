import {SET_USER, TOGGLE_AUTHENTICATING, LOGOUT_USER} from "../actionTypes";

export const setUser = user => {
	return {
		type: SET_USER,
		payload: user,
	};
};

export const toggleAuthenticating = () => {
	return {
		type: TOGGLE_AUTHENTICATING,
	};
};

export const logoutUser = () => {
	return {
		type: LOGOUT_USER,
	};
};
