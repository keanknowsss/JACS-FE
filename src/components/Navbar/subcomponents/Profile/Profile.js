import { Link } from "react-router-dom";
import styles from "./Profile.module.scss"


const Profile = ({ setProfileActive }) => {
	return (
		<section aria-label="profile dropdown" className={styles.profileSection} onMouseEnter={(e) => setProfileActive(true)} onMouseLeave={(e) => setProfileActive(false)}>
			<div className="flex justify-between">
				<div>
					<h1>No Account Signed In</h1>
					{/* <img src={ProfilePicture} alt="My Profile" className={styles.profilePicture} /> */}
				</div>
			</div>

			<hr />

			<div className="flex justify-between mt-1.5">
				<Link className={styles.login} to="/login">
					Login
				</Link>
				<Link className={styles.register} to="/register">
					Register
				</Link>
			</div>
		</section>
	);
};

export default Profile;
