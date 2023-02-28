import styles from "./Profile.module.scss";
import { DefaultProfilePicture } from "../../../assets/placeholder";
import { BuildIcon, CartIcon, EditIcon } from "../../../assets/icons";
import CartCard from "./subcomponents/cartCard/CartCard";
import BuildCard from "./subcomponents/buildCard/BuildCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = ({ title }) => {
	document.title = title;

	const navigate = useNavigate();

	useEffect(() => {
		navigate("/profile/")
	}, [navigate]);

	return (
		<main className={styles.profileComponent}>
			<div className={styles.profileRow}>
				<div className={styles.profileColumn1}>
					<section className={styles.mainProfileSection}>
						<div className={styles.pictureContainer}>
							<img
								src={DefaultProfilePicture}
								alt="My Profile Img"
								className={styles.profilePicture}
							/>
							<button className={styles.editIcon}>
								<EditIcon className={styles.editPicture} />
							</button>
						</div>
						<div className={styles.mainContent}>
							<div className={styles.userName}>
								<h3>Jwayne Dhonson</h3>
								<em>AngBato</em>
							</div>
							<div className={styles.followsContainer}>
								<div>
									<p>0</p>
									<p>Followers</p>
								</div>
								<div>
									<p>0</p>
									<p>Following</p>
								</div>
							</div>
							<button className={styles.profileBtn}>Edit Profile</button>
						</div>
					</section>

					<section className={styles.contactSection}>
						<div className={styles.sectionHeading}>
							<h1>Contact Information</h1>
						</div>
						<div className={styles.sectionContent}>
							<div className={styles.contactInformation}>
								<h4>Address</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur. Orci donec mi in
									cursus. Eget cursus ut auctor mauris pharetra nec ullamcorper.
								</p>

								<h4>Phone Number</h4>
								<p>Lorem ipsum dolor sit</p>

								<h4>Email Address</h4>
								<p className={styles.email}>dwadejohnfather@pup.com</p>
							</div>
							<button className={styles.profileBtn}>
								Edit Contact Information
							</button>
						</div>
					</section>
				</div>
				<div className={styles.profileColumn2}>
					<section className={styles.cartSection}>
						<div className={styles.sectionHeading}>
							<CartIcon className={styles.cartIcon} />
							<h1>Cart</h1>
						</div>
						<div className={styles.sectionContent}>
							<div className={styles.cartItems}>
								{[...Array(4)].map(() => (
									<CartCard />
								))}
							</div>
							<button className={styles.profileBtn}>View More in Cart</button>
						</div>
					</section>
					<section className={styles.buildSection}>
						<div className={styles.sectionHeading}>
							<BuildIcon className={styles.buildIcon} />
							<h1>Builds</h1>
						</div>
						<div className={styles.sectionContent}>
							<div className={styles.buildItems}>
								{[...Array(4)].map(() => (
									<BuildCard />
								))}
							</div>
							<button className={styles.profileBtn}>View More in Builds</button>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default Profile;
