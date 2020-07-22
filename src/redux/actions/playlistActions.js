import axios from "axios";
import keys from "../../config";
import {SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING} from "../actionTypes";

export const playlistFetching = (pageToken = "") => async (
	dispatch,
	getState,
) => {
	const accessToken = getState().userState.user.access_token;
	try {
		dispatch({
			type: SET_PLAYLIST,
			payload: null,
		});
		dispatch({type: TOGGLE_PLAYLIST_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/playlists?part=snippet&maxResults=20&mine=true&key=${keys.API_KEY}${pageToken.length !==
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
		// console.log(response.data);
		dispatch({
			type: SET_PLAYLIST,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_PLAYLIST_FETCHING});
	}
};

export const createPlaylist = playlist => async (dispatch, getState) => {
	const accessToken = getState().userState.user.access_token;
	try {
		// dispatch({
		// 	type: SET_PLAYLIST,
		// 	payload: null,
		// });
		dispatch({type: TOGGLE_PLAYLIST_FETCHING});
		const response = await axios.post(
			`${keys.BASE_URL}/playlists?part=snippet,status&key=${keys.API_KEY}`,
			playlist,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			},
		);
		const playlistObj = getState().playlistState.playlist;
		playlistObj.items.push(response.data);
		return dispatch({type: SET_PLAYLIST, payload: {...playlistObj}});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_PLAYLIST_FETCHING});
	}
};
