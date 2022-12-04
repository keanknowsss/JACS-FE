import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import { ProfilePicture } from "../../../../assets/placeholder";

const Profile = ({ setProfileActive, LOGGED_IN }) => {
	return (
		<section
			aria-label="profile dropdown"
			className={styles.profileSection}
			onMouseEnter={(e) => setProfileActive(true)}
			onMouseLeave={(e) => setProfileActive(false)}
		>
			<div className={styles.heading}>
				{LOGGED_IN ? (
					<>
						<img
							src={ProfilePicture}
							alt="Display Profile"
							className={styles.profilePicture}
						/>
						<div className="flex flex-col">
							<h1 className={styles.name}>Lorem, ipsum</h1>
							<p className={styles.type}>Standard JACS User</p>
						</div>
					</>
				) : (
					<h1 className={styles.noAcc}>No Account Signed In</h1>
				)}
			</div>

			<hr />

			{LOGGED_IN ? (
				<>
					<div className="flex flex-col">
						<ul>
							<li>
								<Link to="/">MY PROFILE</Link>
							</li>
							<li>
								<Link to="/">MY ORDERS</Link>
							</li>
							<li>
								<Link to="/">SETTINGS</Link>
							</li>
							<li>
								<Link to="/">LOG OUT</Link>
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
