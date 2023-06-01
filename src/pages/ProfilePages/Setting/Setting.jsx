import { DefaultProfilePicture } from "../../../assets/placeholder";
import { EditIcon } from "../../../assets/icons";
import styles from "./Setting.module.scss";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Setting = ({ title }) => {
	document.title = title;

	const navigate = useNavigate();

	// for setting the details, connected to the integration when updated on save
	const [name, setName] = useState("Dwayne Johnson");
	const [username, setUsername] = useState("AngBato");
	const [email, setEmail] = useState("sample@gmail.com");
	const [phone, setPhone] = useState("09271921234");
	const [address, setAddress] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, enim. Vitae maxime deserunt ratione fugit ducimus, earum aperiam perspiciatis. Ipsum."
	);

	// used for having reference before saving
	const inputName = useRef();
	const inputUsername = useRef();
	const inputEmail = useRef();
	const inputPhone = useRef();
	const inputAddress = useRef();
	const inputImage = useRef();

	const [showProfileEdit, setShowProfileEdit] = useState(false);
	const [showContactEdit, setShowContactEdit] = useState(false);

	// in integration add "or" in usestate to prioritize user's own profile picture
	const [profilePicture, setProfilePicture] = useState(DefaultProfilePicture);

	const profileSaveHandler = (e) => {
		setName(inputName.current.value);
		setUsername(inputUsername.current.value);
		setShowProfileEdit(false);
	};

	const contactSaveHandler = (e) => {
		setEmail(inputEmail.current.value);
		setPhone(inputPhone.current.value);
		setAddress(inputAddress.current.value);
		setShowContactEdit(false);
	};

  const profilePictureHandler = (e) => {
    const image = e.target.files[0];
    setProfilePicture(URL.createObjectURL(image));
    console.log(image.name);
  }

	return (
		<main className={styles.settingsPageContainer}>
			<div className={styles.mainColumn}>
				<div className={styles.firstRow}>
					<div className={styles.imageContainer}>
						<img
							src={profilePicture}
							alt="user"
						/>
						<button className={styles.editBtn} onClick={() => inputImage.current.click()}>
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
									type="text"
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
									defaultValue={address}
								/>
							) : (
								<p className={styles.textDetail}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Beatae, enim. Vitae maxime deserunt ratione fugit ducimus,
									earum aperiam perspiciatis. Ipsum.
								</p>
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
				<div className={styles.btnRow}>
					<button onClick={() => navigate("/store/register")}>Add Shop</button>
				</div>
				<div className={styles.backdrop}></div>
			</div>
		</main>
	);
};

export default Setting;
