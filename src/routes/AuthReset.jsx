import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
	logOut,
	selectCurrentToken,
} from "../features/slice/userAccessSlice";

const AuthReset = () => {
	const token = useSelector(selectCurrentToken);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) {
			dispatch(logOut());
		}
	}, [dispatch, token]);

	return <Outlet />;
};

export default AuthReset;
