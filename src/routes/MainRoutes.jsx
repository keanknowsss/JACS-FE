import { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { useGetUserQuery } from "../features/api/builders/userApi";
import {
	logOut,
	selectCurrentToken,
	selectCurrentUserId,
	selectCurrentUserIsVerified,
	verifyUser,
} from "../features/slice/userAccessSlice";

const MainRoutes = () => {
	const token = useSelector(selectCurrentToken);
	const userId = useSelector(selectCurrentUserId);
	const { data } = useGetUserQuery(userId);
	const isVerifiedState = useSelector(selectCurrentUserIsVerified);

	const dispatch = useDispatch();

	const location = useLocation();

	// useLayoutEffect(() => {
	// 	if (!token) {
	// 		dispatch(logOut());
	// 	}
	// }, [dispatch, token]);

	useEffect(() => {
		if (data) {
			const { isVerified } = data?.result;
			if (isVerified !== isVerifiedState) {
				dispatch(verifyUser(isVerified));
			}
		}
	}, [dispatch, data, location]);

	return <Outlet />;
};

export default MainRoutes;
