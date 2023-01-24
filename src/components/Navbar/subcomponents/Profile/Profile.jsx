import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import { DefaultProfilePicture } from "../../../../assets/placeholder";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUserId } from "../../../../features/slice/userAccessSlice";
import { logOut } from "../../../../features/slice/userAccessSlice";
import { getUserDetail } from "../../../../features/api/builders/userApi";
import { useState, useLayoutEffect } from "react";

const Profile = ({ setProfileActive }) => {
	const token = useSelector(selectCurrentToken);
	const id = useSelector(selectCurrentUserId);
	const dispatch = useDispatch();

	const [queryData] = getUserDetail.useLazyQuery();

	const [name, setName] = useState(null);
	
	const logOutHandler = () => {
		dispatch(logOut());
	};

	useLayoutEffect(() => {
		const getData = async () => {
			if (token && id) {
				const { data, error } = await queryData(id);
				if (!error) {
					setName(data?.result?.firstName)
				} else {
					console.log("error in profile name", error?.result);
				}
			}
		}
		getData();
	}, [token, id])



	return (
		<section
			aria-label="profile dropdown"
			className={styles.profileSection}
			onMouseEnter={(e) => setProfileActive(true)}
			onMouseLeave={(e) => setProfileActive(false)}
		>
			<div className={styles.heading}>
				{token ? (
					<>
						<img
							src={DefaultProfilePicture}
							alt="Display Profile"
							className={styles.profilePicture}
						/>
						<div className={styles.profileText}>
							<h1 className={styles.name}>{name}</h1>
							<p className={styles.type}>Standard JACS User</p>
						</div>
					</>
				) : (
					<h1 className={styles.noAcc}>No Account Signed In</h1>
				)}
			</div>

			<hr />

			{token ? (
				<>
					<div className="flex flex-col">
						<ul>
							<li>
								<Link to="/profile/">MY PROFILE</Link>
							</li>
							<li>
								<Link to="/">MY ORDERS</Link>
							</li>
							<li>
								<Link to="/">SETTINGS</Link>
							</li>
							<li>
								<button onClick={logOutHandler}>LOG OUT</button>
							</li>
						</ul>
					</div>
				</>
			) : (
				<div className="flex justify-between mt-1.5">
					<Link className={styles.login} to="/login">
						Login
					</Link>
					<Link className={styles.register} to="/register">
						Register
					</Link>
				</div>
			)}
		</section>
	);
};

export default Profile;
