import axios from "axios";
import keys from "../../config";
import {SET_SUBSCRIPTION, TOGGLE_SUBSCRIPTION_FETCHING} from "../actionTypes";

export const subscriptionFetch = (pageToken = "") => async (
	dispatch,
	getState,
) => {
	const accessToken = getState().userState.user.access_token;
	try {
		dispatch({
			type: SET_SUBSCRIPTION,
			payload: null,
		});
		dispatch({type: TOGGLE_SUBSCRIPTION_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/subscriptions?part=snippet,contentDetails&maxResults=20&mine=true&key=${keys.API_KEY}${pageToken.length !==
			0
				? "&pageToken=" + pageToken
				: ""}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					Accept: "application/json",
				},
			},
		);
		console.log(response.data);
		dispatch({
			type: SET_SUBSCRIPTION,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_SUBSCRIPTION_FETCHING});
	}
};
