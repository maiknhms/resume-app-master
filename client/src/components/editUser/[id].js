import React from "react";
import NotFound from "../utils/NotFound/NotFound";
import EditUser from "../profile/EditUser";

function id() {
	const auth = useSelector((state) => state.auth);
	const { isAdmin } = auth;
	return isAdmin ? <EditUser /> : <NotFound />;
}

export default id;
