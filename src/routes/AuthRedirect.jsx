import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {
	selectCurrentToken,
	selectCurrentUserIsVerified,
} from "../features/slice/loginAuthSlice";

const AuthRedirect = () => {
	const token = useSelector(selectCurrentToken);
	const isVerified = useSelector(selectCurrentUserIsVerified);

	if (token && isVerified) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

export default AuthRedirect;
