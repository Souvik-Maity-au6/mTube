import {
	SET_RELATED_VIDEOS,
	TOGGLE_RELATED_VIDEOS_FETCHING,
	SET_TRENDING_VIDEOS,
	TOGGLE_TRENDING_VIDEOS_FETCHING,
	SET_SEARCH_RESULTS,
	TOGGLE_SEARCH_RESULTS,
	SET_RECOMENDED_VIDEO,
	TOGGLE_RECOMENDED_VIDEO_FETCHING,
} from "../actionTypes";

const initialState = {
	recomendedVideos: null,
	isRecomendedVideosFetching: false,
	searchResults: null,
	isSearching: false,
	relatedVideos: null,
	isRelatedVedeosFetching: false,
	trendingVideos: null,
	isTrendingVideosFetching: false,
};

const videoReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_RELATED_VIDEOS:
			return {...state, relatedVideos: payload};
		case TOGGLE_RELATED_VIDEOS_FETCHING:
			return {
				...state,
				isRelatedVedeosFetching: !state.isRelatedVedeosFetching,
			};
		case SET_TRENDING_VIDEOS:
			return {...state, trendingVideos: payload};
		case TOGGLE_TRENDING_VIDEOS_FETCHING:
			return {
				...state,
				isTrendingVideosFetching: !state.isTrendingVideosFetching,
			};
		case SET_SEARCH_RESULTS:
			return {...state, searchResults: payload};
		case TOGGLE_SEARCH_RESULTS:
			return {...state, isSearching: !state.isSearching};
		case SET_RECOMENDED_VIDEO:
			return {...state, recomendedVideos: payload};
		case TOGGLE_RECOMENDED_VIDEO_FETCHING:
			return {
				...state,
				isRecomendedVideoFetching: !state.isRecomendedVideoFetching,
			};
		default:
			return state;
	}
};

export default videoReducer;
