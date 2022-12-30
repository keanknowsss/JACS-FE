import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
	logOut,
	selectCurrentUserIsVerified,
} from "../features/slice/loginAuthSlice";

const AuthReset = () => {
	const isVerified = useSelector(selectCurrentUserIsVerified);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!isVerified) {
			dispatch(logOut());
		}
	}, [dispatch, isVerified]);

	return <Outlet />;
};

export default AuthReset;
