import ACTIONS from "../actions/";

const initialState = {
	user: [],
	isLogged: false,
	isAdmin: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.LOGIN:
			return {
				...state,
				isLogged: action.payload,
				// isLogged: true,
			};
		case ACTIONS.GET_USER:
			return {
				...state,
				user: action.payload.user,
				isAdmin: action.payload.isAdmin,
			};
		case ACTIONS.LOGOUT:
			return {
				...state,
				isLogged: false,
			};
		default:
			return state;
	}
};

export default authReducer;
