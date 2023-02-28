import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import { DefaultProfilePicture } from "../../../../assets/placeholder";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/slice/userAccessSlice";
import { logOut } from "../../../../features/slice/userAccessSlice";
import { forwardRef, useRef } from "react";

const Profile = forwardRef(({ setProfileActive, name, className }, ref) => {
	const token = useSelector(selectCurrentToken);
	const dispatch = useDispatch();
	
	const logOutHandler = () => {
		dispatch(logOut());
	};

	return (
		<section
			aria-label="profile dropdown"
			className={`${styles.profileSection} ${className}`}
			onMouseEnter={(e) => setProfileActive && setProfileActive(true)}
			onMouseLeave={(e) => setProfileActive && setProfileActive(false)}
			ref={ref}
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
								<Link to="/profile/orders">MY ORDERS</Link>
							</li>
							<li>
								<Link to="/profile/settings">SETTINGS</Link>
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
});

export default Profile;
