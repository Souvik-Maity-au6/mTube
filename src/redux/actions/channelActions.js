import axios from "axios";
import keys from "../../config";
import {SET_CHANNLE, TOGGLE_CHANNEL_FETCHING} from "../actionTypes";

export const channelFetching = channelId => async dispatch => {
	try {
		dispatch({
			type: SET_CHANNLE,
			payload: null,
		});
		dispatch({type: TOGGLE_CHANNEL_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${keys.API_KEY}`,
		);
		// console.log(response.data);
		dispatch({
			type: SET_CHANNLE,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_CHANNEL_FETCHING});
	}
};
