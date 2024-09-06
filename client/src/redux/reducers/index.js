import { combineReducers } from "redux";
import auth from "./authReducer";
import token from "./tokenReducer";
import users from "./usersReducer";
import resumeTemplateReducer from "./resumeTemplatesReducer";
import selectedTemplateReducer from "./selectedTemplateReducer";

export default combineReducers({
	auth,
	token,
	users,
	resumeTemplateReducer,
	selectedTemplateReducer,
});
