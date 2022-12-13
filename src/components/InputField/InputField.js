import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	EyeClose,
	EyeOpen,
	FileAddIcon,
	FileIcon,
	InformationIcon,
} from "../../assets/icons";
import styles from "./InputField.module.scss";

const InputField = ({
	name, // for input name
	label, // label text
	title, // title for inputs
	type, // input type/rendering type
	error, // used in error handling
	state, // states in page
	setState,
	reference, // used in getting value returning to page
	radioGroup, // used in radio buttons
	value, // value of radio button
	checked, // for checkbox and radiobuttons
	required, // true or false
	children, // props children
}) => {
	const inputRef = useRef();
	const inputContainer = useRef();
	const fileInput = useRef();
	const radioRef = useRef();

	useEffect(() => {
		if (required && inputRef.current) {
			inputRef.current.required = required;
		}
	}, [required]);

	const [information, showInformation] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(true); // for password

	const passwordVisibleToggler = (e) => {
		if (passwordVisible) {
			inputRef.current.type = "text";
			setPasswordVisible(false);
		} else {
			inputRef.current.type = "password";
			setPasswordVisible(true);
		}
	};

	const fileHandler = (e) => {
		fileInput.current.click();
	};

	// render components via switch based on type
	switch (type) {
		case "checkbox":
			return (
				<div className={styles.checkSection}>
					<input type={type} id={name} name={name} ref={reference} />
					<label htmlFor={name}>
						I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
						<Link to="/privacy">Privacy Policy</Link>
					</label>
				</div>
			);
		case "file":
			return (
				<div
					className={styles.fileSection}
					onClick={fileHandler}
					style={state && { borderColor: "#6B728E" }}
				>
					<input
						type="file"
						accept=".docx, .doc, .pdf, image/*"
						name={name}
						id={name}
						onChange={(e) => setState(e.target.files[0])}
						ref={fileInput}
						hidden
					/>
					{!state ? (
						<>
							<FileAddIcon className={styles.fileAddIcon} />
							<p className={styles.fileAddText}>Attach File Here</p>
						</>
					) : (
						<>
							<FileIcon className={styles.fileIcon} />
							<p className={styles.fileName}>{state.name}</p>
						</>
					)}
				</div>
			);
		case "radio":
			return (
				<div className={styles.radioChoice}>
					<input
						type={type}
						id={name}
						ref={radioRef}
						name={radioGroup}
						value={value}
						defaultChecked={checked}
						onChange={(e) => setState(e.target.value)}
					/>
					<label htmlFor={name}>{children}</label>
				</div>
			);
		case "title":
			return (
				<div className={styles.title}>
					<h3>{children}</h3>
					<hr />
				</div>
			);
		case "title-information":
			return (
				<div className={styles.titleInformation}>
					<h3>{title}</h3>
					<div className={styles.informationContainer}>
						<InformationIcon
							className={styles.informationIcon}
							onMouseOver={(e) => showInformation(true)}
							onMouseLeave={(e) => showInformation(false)}
						/>
						{information && (
							<p
								className={styles.informationText}
								onMouseOver={(e) => showInformation(true)}
								onMouseLeave={(e) => showInformation(false)}
							>
								{children}
							</p>
						)}
					</div>
				</div>
			);
		default: // for texts, tel, email, and passwords
			return (
				<div
					className={styles.inputForm}
					onClick={(e) => inputRef.current.focus()}
					ref={inputContainer}
				>
					<label htmlFor={name}>{label}</label>
					<input
						type={type}
						id={name}
						ref={inputRef}
						name={name}
						value={state}
						onChange={(e) => setState(e.target.value)}
						onFocus={(e) =>
							inputContainer.current.classList.add(styles.inputActive)
						}
						onBlur={(e) =>
							inputContainer.current.classList.remove(styles.inputActive)
						}
						onLoad={(e) => {
							e.target.required = true;
							console.log(e.target.required);
						}}
					/>
					{type === "password" && (
						<div className={styles.eyeIcon} onClick={passwordVisibleToggler}>
							{passwordVisible ? <EyeClose /> : <EyeOpen />}
						</div>
					)}
				</div>
			);
	}
};

export default InputField;
