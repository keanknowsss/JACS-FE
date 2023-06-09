import { DefaultProfilePicture } from "../../../assets/placeholder";
import { EditIcon } from "../../../assets/icons";
import styles from "./Setting.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import {
	getUser,
	getUserDetail,
	useAddUserProfilePictureMutation,
	useUpdateUserDetailMutation,
	useUpdateUserMutation,
} from "../../../features/api/builders/userApi";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../../features/slice/userAccessSlice";
import Loading from "../../../components/Loading/Loading";
import {
	getSellerDetail,
	useUpdateSellerDetailMutation,
} from "../../../features/api/builders/sellerApi";

const Setting = ({ title }) => {
	document.title = title;

	const navigate = useNavigate();
	const location = useLocation();

	// for setting the details, connected to the integration when updated on save
	const [name, setName] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [userAddress, setUserAddress] = useState("No Address");

	// api calls
	const [getUserDetailQuery] = getUserDetail.useLazyQuery();
	const [getUserQuery] = getUser.useLazyQuery();
	const [getSellerDetailQuery] = getSellerDetail.useLazyQuery();
	const [addProfilePicture] = useAddUserProfilePictureMutation();
	const [updateUserDetail] = useUpdateUserDetailMutation();
	const [updateUser] = useUpdateUserMutation();
	const [updateSellerDetail] = useUpdateSellerDetailMutation();

	const id = useSelector(selectCurrentUserId);

	const [loading, setLoading] = useState(true);

	// shop data states
	const [isShop, setIsShop] = useState(false);
	const [storeEmail, setStoreEmail] = useState();
	const [storeName, setStoreName] = useState();
	const [storeContact, setStoreContact] = useState();

	// used for having reference before saving
	const inputName = useRef();
	const inputUsername = useRef();
	const inputEmail = useRef();
	const inputPhone = useRef();
	const inputAddress = useRef();
	const inputImage = useRef();

	const inputStoreEmail = useRef();
	const inputStoreContact = useRef();
	const inputStoreName = useRef();

	// toggles state for edit and view state
	const [showProfileEdit, setShowProfileEdit] = useState(
		false || location.state?.editProfile
	);
	const [showContactEdit, setShowContactEdit] = useState(
		false || location.state?.editContact
	);
	const [showStoreEdit, setShowStoreEdit] = useState(false);

	// in integration add "or" in usestate to prioritize user's own profile picture
	const [profilePicture, setProfilePicture] = useState(DefaultProfilePicture);

	const profileSaveHandler = async (e) => {
		setName(inputName.current.value);
		setUsername(inputUsername.current.value);
		setShowProfileEdit(false);

		try {
			await updateUserDetail({
				id,
				editedDetails: {
					firstName: inputName.current.value,
					lastName: "",
				},
			}).unwrap();

			// 		add update username
			// updateUser({

			// }, id)
		} catch (error) {
			console.log("Update Error:", error);
		}
	};

	const contactSaveHandler = async (e) => {
		setEmail(inputEmail.current.value);
		setPhone(inputPhone.current.value);
		setUserAddress(inputAddress.current.value);
		setShowContactEdit(false);

		try {
			if (email === inputEmail.current.value) {
				await updateUserDetail({
					id,
					editedDetails: {
						contactNo: inputPhone.current.value,
						address: inputAddress.current.value,
					},
				}).unwrap();
			} else {
				await updateUserDetail({
					id,
					editedDetails: {
						email: inputEmail.current.value,
						contactNo: inputPhone.current.value,
						address: inputAddress.current.value,
					},
				}).unwrap();

				alert("Confirm New Email Address!");
			}
		} catch (error) {
			console.log("Contact Update Error:", error);
		}
	};

	const storeSaveHandler = async (e) => {
		setStoreEmail(inputStoreEmail.current.value);
		setStoreContact(inputStoreContact.current.value);
		setStoreName(inputStoreName.current.value);
		setShowStoreEdit(false);

		try {
			await updateSellerDetail({
				id,
				updatedDetails: {
					storeName: inputStoreName.current.value,
					contactNo: inputStoreContact.current.value,
					email: inputStoreEmail.current.value,
				},
			}).unwrap();

		} catch (error) {
			console.log("Seller Update Error:", error);
		}
	};

	const profilePictureHandler = async (e) => {
		const images = e.target.files[0];
		setProfilePicture(URL.createObjectURL(images));

		try {
			const uploadedImage = await addProfilePicture({
				id,
				images,
			}).unwrap();

			const { publicUrl } = uploadedImage.result[0];

			await updateUserDetail({
				id,
				editedDetails: {
					img: publicUrl,
				},
			});
		} catch (error) {
			console.log("Image Upload Error:", error);
		}
	};

	// initializes the data when loaded
	// User, User Details, and Seller Details API are called
	useLayoutEffect(() => {
		const getData = async () => {
			try {
				const userDetail = await getUserDetailQuery(id);
				const user = await getUserQuery(id);

				// setting data of user
				if (user.data?.result?.isSeller) {
					setIsShop(true);
					const sellerDetail = await getSellerDetailQuery(id);

					sellerDetail.error &&
						console.log("Seller Detail Query Error:", sellerDetail.error);

					setStoreName(sellerDetail.data.result?.storeName);
					setStoreContact(sellerDetail.data.result?.contactNo);
					setStoreEmail(sellerDetail.data.result?.email);
				}

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
				setPhone(contactNo);
				setEmail(email);
				setProfilePicture(img);
			} catch (error) {
				console.log("data load error: ", error);
			}
		};

		getData();
	}, [
		id,
		getUserDetailQuery,
		getUserQuery,
		setName,
		setUsername,
		getSellerDetailQuery,
	]);

	return loading ? (
		<div>
			<Loading />
		</div>
	) : (
		<main className={styles.settingsPageContainer}>
			<div className={styles.mainColumn}>
				<div className={styles.firstRow}>
					<div className={styles.imageContainer}>
						<img
							src={profilePicture}
							alt="user"
						/>
						<button
							className={styles.editBtn}
							onClick={() => inputImage.current.click()}
						>
							<EditIcon className={styles.edit} />
						</button>
						<input
							type="file"
							accept="image/jpg, image/png, image/jpeg"
							ref={inputImage}
							onChange={profilePictureHandler}
							hidden
						/>
					</div>
					<div className={styles.profileContainer}>
						<h2>My Profile</h2>
						<div className={styles.detailsContainer}>
							<div className={styles.textGridContainer}>
								<p>Name</p>
								{showProfileEdit ? (
									<input
										type="text"
										ref={inputName}
										defaultValue={name}
										className={styles.inputName}
									/>
								) : (
									<p className={styles.textDetail}>{name}</p>
								)}
								<p>Username</p>
								{showProfileEdit ? (
									<input
										type="text"
										className={styles.midInput}
										ref={inputUsername}
										defaultValue={username}
									/>
								) : (
									<p className={styles.textDetail}>{username}</p>
								)}
							</div>
							{!showProfileEdit ? (
								<div className={styles.links}>
									<p onClick={() => setShowProfileEdit(true)}>Edit</p>
									<p>Change Password</p>
								</div>
							) : (
								<div className={styles.saveCancelBtn}>
									<div>
										<button onClick={profileSaveHandler}>Save</button>
									</div>
									<div>
										<button onClick={() => setShowProfileEdit(false)}>
											Cancel
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={styles.secondRow}>
					<h2>Contact Information</h2>
					<div className={styles.detailsContainer}>
						<div className={styles.textGridContainer}>
							<p>Email Address</p>
							{showContactEdit ? (
								<input
									type="email"
									defaultValue={email}
									ref={inputEmail}
									className={styles.quarterInput}
								/>
							) : (
								<p className={styles.textDetail}>{email}</p>
							)}
							<p>Phone Number</p>
							{showContactEdit ? (
								<input
									type="tel"
									ref={inputPhone}
									className={styles.midInput}
									defaultValue={phone}
								/>
							) : (
								<p className={styles.textDetail}>{phone}</p>
							)}

							<p>Address</p>
							{showContactEdit ? (
								<textarea
									rows={3}
									ref={inputAddress}
									defaultValue={userAddress}
								/>
							) : (
								<p className={styles.textDetail}>{userAddress}</p>
							)}
						</div>
						{!showContactEdit ? (
							<div className={styles.links}>
								<p onClick={() => setShowContactEdit(true)}>Edit</p>
							</div>
						) : (
							<div className={styles.saveCancelBtn}>
								<div>
									<button onClick={contactSaveHandler}>Save</button>
								</div>
								<div>
									<button onClick={() => setShowContactEdit(false)}>
										Cancel
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				{/* SHOP ROW */}
				{isShop ? (
					<div className={styles.secondRow}>
						<h2>Shop Information</h2>
						<div className={styles.detailsContainer}>
							<div className={styles.textGridContainer}>
								<p>Shop Name</p>
								{showStoreEdit ? (
									<input
										type="text"
										defaultValue={storeName}
										ref={inputStoreName}
										className={styles.quarterInput}
									/>
								) : (
									<p className={styles.textDetail}>{storeName}</p>
								)}
								<p>Phone Number</p>
								{showStoreEdit ? (
									<input
										type="tel"
										ref={inputStoreContact}
										className={styles.midInput}
										defaultValue={storeContact}
									/>
								) : (
									<p className={styles.textDetail}>{storeContact}</p>
								)}

								<p>Email Address</p>
								{showStoreEdit ? (
									<input
										type="email"
										defaultValue={storeEmail}
										ref={inputStoreEmail}
										className={styles.quarterInput}
									/>
								) : (
									<p className={styles.textDetail}>{storeEmail}</p>
								)}
							</div>
							{!showStoreEdit ? (
								<div className={styles.links}>
									<p onClick={() => setShowStoreEdit(true)}>Edit</p>
								</div>
							) : (
								<div className={styles.saveCancelBtn}>
									<div>
										<button onClick={storeSaveHandler}>Save</button>
									</div>
									<div>
										<button onClick={() => setShowStoreEdit(false)}>
											Cancel
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				) : (
					<div className={styles.btnRow}>
						<button onClick={() => navigate("/store/register")}>
							Add Shop
						</button>
					</div>
				)}
				<div className={styles.backdrop}></div>
			</div>
		</main>
	);
};

export default Setting;
