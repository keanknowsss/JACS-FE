import styles from "./Profile.module.scss";
import { DefaultProfilePicture } from "../../../assets/placeholder";
import { BuildIcon, CartIcon, EditIcon } from "../../../assets/icons";
import CartCard from "./subcomponents/cartCard/CartCard";
// import BuildCard from "./subcomponents/buildCard/BuildCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../../features/slice/userAccessSlice";
import {
	getUser,
	getUserDetail,
	useAddUserProfilePictureMutation,
	useUpdateUserDetailMutation,
} from "../../../features/api/builders/userApi";
import Loading from "../../../components/Loading/Loading";

const Profile = ({ title }) => {
	document.title = title;

	const navigate = useNavigate();

	const [profilePicture, setProfilePicture] = useState(DefaultProfilePicture);
	// const [profilePictureFile, setProfilePictureFile] = useState(null);
	const [name, setName] = useState();
	const [username, setUsername] = useState();
	const [userAddress, setUserAddress] = useState("No Address");
	const [contactNumber, setContactNumber] = useState();
	const [emailAddress, setEmailAddress] = useState();

	const [loading, setLoading] = useState(true);

	const inputImage = useRef();

	const id = useSelector(selectCurrentUserId);

	const [getUserDetailQuery] = getUserDetail.useLazyQuery();
	const [getUserQuery] = getUser.useLazyQuery();
	const [addProfilePicture] = useAddUserProfilePictureMutation();
	const [editProfilePicture] = useUpdateUserDetailMutation();

	// change image
	const profilePictureHandler = async (e) => {
		const images = e.target.files[0];
		setProfilePicture(URL.createObjectURL(images));

		try {
			const uploadedImage = await addProfilePicture({
				id,
				images,
			}).unwrap();

			const { publicUrl } = uploadedImage.result[0];

			editProfilePicture({
				id,
				editedDetails: {
					img: publicUrl,
				},
			});
		} catch (error) {
			console.log("image upload error:", error);
		}
	};

	// button redirects to other page
	const editProfileHandler = () => {
		navigate("/profile/settings", { state: { editProfile: true } });
	};

	const editContactInformationHandler = () => {
		navigate("/profile/settings", { state: { editContact: true } });
	};

	// change url automatically to with "/" to add nav indicator
	useEffect(() => {
		navigate("/profile/");
	}, [navigate]);

	// loads all data
	useLayoutEffect(() => {
		const getData = async () => {
			try {
				const userDetail = await getUserDetailQuery(id);
				const user = await getUserQuery(id);

				if (!userDetail.isLoading && !user.isLoading) {
					setLoading(false);
				}

				const { firstName, lastName, address, email, contactNo, img } =
					userDetail.data.result;

				user.error && console.log("User Query Error:", user.error);
				userDetail.error &&
					console.log("User Detail Query Error:", userDetail.error);

				setName(firstName + " " + lastName);
				setUsername(user.data?.result?.username);

				address && setUserAddress(address);
				setContactNumber(contactNo);
				setEmailAddress(email);
				
				img && setProfilePicture(img);
			} catch (error) {
				console.log("data load error: ", error);
			}
		};
		getData();
	}, [id, getUserDetailQuery, getUserQuery, setName, setUsername]);

	return loading ? (
		<div>
			<Loading />
		</div>
	) : (
		<main className={styles.profileComponent}>
			<div className={styles.profileRow}>
				<div className={styles.profileColumn1}>
					<section className={styles.mainProfileSection}>
						<div className={styles.pictureContainer}>
							<img
								src={profilePicture}
								alt="My Profile Img"
								className={styles.profilePicture}
							/>
							<button
								className={styles.editIcon}
								onClick={() => inputImage.current.click()}
							>
								<EditIcon className={styles.editPicture} />
							</button>
							<input
								type="file"
								accept="image/jpg, image/png, image/jpeg"
								ref={inputImage}
								onChange={profilePictureHandler}
								hidden
							/>
						</div>
						<div className={styles.mainContent}>
							<div className={styles.userName}>
								<h3>{name}</h3>
								<em>{username}</em>
							</div>
							{/* <div className={styles.followsContainer}>
								<div>
									<p>0</p>
									<p>Followers</p>
								</div>
								<div>
									<p>0</p>
									<p>Following</p>
								</div>
							</div> */}
							<button
								className={styles.profileBtn}
								onClick={editProfileHandler}
							>
								Edit Profile
							</button>
						</div>
					</section>

					<section className={styles.contactSection}>
						<div className={styles.sectionHeading}>
							<h1>Contact Information</h1>
						</div>
						<div className={styles.sectionContent}>
							<div className={styles.contactInformation}>
								<h4>Address</h4>
								<p>{userAddress}</p>

								<h4>Phone Number</h4>
								<p>{contactNumber}</p>

								<h4>Email Address</h4>
								<p className={styles.email}>{emailAddress}</p>
							</div>
							<button
								className={styles.profileBtn}
								onClick={editContactInformationHandler}
							>
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
								{[...Array(10)].map(() => (
									<CartCard />
								))}
							</div>
							<button
								className={styles.profileBtn}
								onClick={() => navigate("/profile/cart")}
							>
								View More in Cart
							</button>
						</div>
					</section>
					{/* <section className={styles.buildSection}>
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
					</section> */}
				</div>
			</div>
		</main>
	);
};

export default Profile;
