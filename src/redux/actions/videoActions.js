import axios from "axios";
import keys from "../../config";

import {
	SET_SEARCH_RESULTS,
	TOGGLE_SEARCH_RESULTS,
	SET_RELATED_VIDEOS,
	TOGGLE_RELATED_VIDEOS_FETCHING,
	SET_TRENDING_VIDEOS,
	TOGGLE_TRENDING_VIDEOS_FETCHING,
	SET_RECOMENDED_VIDEO,
	TOGGLE_RECOMENDED_VIDEO_FETCHING,
} from "../actionTypes";

export const fetchTrendingVideos = (pageToken = "") => async dispatch => {
	try {
		dispatch({type: TOGGLE_TRENDING_VIDEOS_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/videos?part=snippet,statistics&regionCode=IN&chart=mostPopular&maxResults=28&key=${keys.API_KEY}${pageToken.length !==
			0
				? "&pageToken=" + pageToken
				: ""}`,
		);
		dispatch({
			type: SET_TRENDING_VIDEOS,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_TRENDING_VIDEOS_FETCHING});
	}
};

export const fetchRecomendedVideos = (pageToken = "") => async dispatch => {
	try {
		dispatch({type: TOGGLE_RECOMENDED_VIDEO_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/videos?part=snippet,statistics&regionCode=US&chart=mostPopular&maxResults=28&key=${keys.API_KEY}${pageToken.length !==
			0
				? "&pageToken=" + pageToken
				: ""}`,
		);
		dispatch({
			type: SET_RECOMENDED_VIDEO,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_RECOMENDED_VIDEO_FETCHING});
	}
};

export const fetchRelatedVideos = (
	videoId,
	pageToken = "",
) => async dispatch => {
	try {
		dispatch({type: TOGGLE_RELATED_VIDEOS_FETCHING});
		const response = await axios.get(
			`${keys.BASE_URL}/search?part=snippet&maxResults=20&type=video&relatedToVideoId=${videoId}&key=${keys.API_KEY}${pageToken.length !==
			0
				? "&pageToken=" + pageToken
				: ""}`,
		);
		// console.log(response.data);
		dispatch({
			type: SET_RELATED_VIDEOS,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_RELATED_VIDEOS_FETCHING});
	}
};

export const fetchSearchVideos = (query, pageToken = "") => async dispatch => {
	try {
		dispatch({
			type: SET_SEARCH_RESULTS,
			payload: null,
		});
		dispatch({type: TOGGLE_SEARCH_RESULTS});
		const response = await axios.get(
			`${keys.BASE_URL}/search?part=snippet&maxResults=28&type=video&q=${query}&key=${keys.API_KEY}${pageToken.length !==
			0
				? "&pageToken=" + pageToken
				: ""}`,
		);
		// console.log(response.data);
		dispatch({
			type: SET_SEARCH_RESULTS,
			payload: response.data,
		});
	} catch (err) {
		console.error(err);
	} finally {
		dispatch({type: TOGGLE_SEARCH_RESULTS});
	}
};
