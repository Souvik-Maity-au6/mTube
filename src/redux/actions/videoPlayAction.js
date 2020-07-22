import axios from "axios";
import keys from "../../config";

import {
	SET_PLAY_VIDEO,
	SET_COMMENTS,
	TOGGLE_PLAY_VIDEO_FETCHING,
} from "../actionTypes";

export const fetchPlayVideo = videoId => async dispatch => {
	try {
		dispatch({
			type: SET_PLAY_VIDEO,
			payload: null,
		});
		dispatch({type: TOGGLE_PLAY_VIDEO_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${keys.API_KEY}`,
		);
		console.log(response.data);
		dispatch({
			type: SET_PLAY_VIDEO,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_PLAY_VIDEO_FETCHING});
	}
};

export const fetchPlayVideoComment = videoId => async dispatch => {
	try {
		dispatch({
			type: SET_COMMENTS,
			payload: null,
		});
		dispatch({type: TOGGLE_PLAY_VIDEO_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/commentThreads?part=snippet,replies&videoId=${videoId}&key=${keys.API_KEY}`,
		);
		console.log(response.data);
		dispatch({
			type: SET_COMMENTS,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_PLAY_VIDEO_FETCHING});
	}
};
