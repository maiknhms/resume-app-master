const initialState = {
	selectedTemplate: null,
};

function selectedTemplateReducer(state = initialState, action) {
	switch (action.type) {
		case "selectedTemplateChange":
			return { ...state, selectedTemplate: action.payload };
		default:
			return state;
	}
}

export default selectedTemplateReducer;
