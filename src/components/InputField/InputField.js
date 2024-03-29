import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	EyeClose,
	EyeOpen,
	FileAddIcon,
	FileIcon,
	InformationIcon,
	TriangleIcon,
} from "../../assets/icons";
import styles from "./InputField.module.scss";

const InputField = ({
	className, // for tailwind styles
	name, // for input name
	title, // title for inputs
	type, // input type/rendering type
	state, // states in page
	setState,
	reference, // used in getting value returning to page
	radioGroup, // used in radio buttons
	value, // value of radio button
	checked, // for checkbox and radiobuttons
	selectChoice, // for select box mapping
	children, // props children
}) => {
	const inputRef = useRef();
	const inputContainer = useRef();
	const fileInput = useRef();
	const radioRef = useRef();

	const [dropDown, setDropDown] = useState(false);
	const [information, showInformation] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(true); // for password

	const [focusData, setFocusData] = useState("");
	const [errorData, setErrorData] = useState("error-div");

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

	const dropDownStyle = (e) => {
		if (dropDown) {
			setDropDown(false);
			inputContainer.current.classList.remove(styles.inputActive);
		} else {
			setDropDown(true);
			inputContainer.current.classList.add(styles.inputActive);
		}
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
		case "number":
			return (
				<div
					className={`${styles.inputForm} ${className}`}
					onClick={(e) => inputRef.current.focus()}
					ref={inputContainer}
				>
					<label htmlFor={name}>{children}</label>
					<input
						type={type}
						id={name}
						ref={inputRef}
						name={name}
						value={state}
						min="0"
						max="100"
						onChange={(e) => setState(e.target.value)}
						onFocus={(e) =>
							inputContainer.current.classList.add(styles.inputActive)
						}
						onBlur={(e) =>
							inputContainer.current.classList.remove(styles.inputActive)
						}
					/>
				</div>
			)
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
		case "select":
			return (
				<div
					className={`${styles.inputForm} cursor-pointer ${className}`}
					ref={inputContainer}
				>
					<label htmlFor={name}>{children}</label>
					<div className={styles.selectBox}>
						<select
							name={name}
							id={name}
							ref={inputRef}
							onClick={dropDownStyle}
							onFocus={(e) => {
								inputContainer.current.classList.add(styles.inputActive);
							}}
							onBlur={(e) => {
								inputContainer.current.classList.remove(styles.inputActive);
								setDropDown(false);
							}}
							value={state}
							onChange={(e) => setState(e.target.value)}
						>
							{selectChoice.map((choice, key) => {
								return (
									<option value={choice.toLowerCase()} key={key}>
										{choice}
									</option>
								);
							})}
						</select>
						<TriangleIcon
							className={`${styles.selectDropdown} ${
								dropDown ? styles.dropDownActive : null
							}`}
						/>
					</div>
				</div>
			);
		case "textarea":
			return (
				<div
					className={`${styles.inputForm} ${styles.textAreaForm}`}
					onClick={(e) => inputRef.current.focus()}
					ref={inputContainer}
				>
					<label htmlFor={name}>{children}</label>
					<textarea
						name={name}
						ref={inputRef}
						id={name}
						autoComplete="off"
						minLength="1"
						maxLength="200"
						value={state}
						onChange={(e) => setState(e.target.value)}
					></textarea>
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
					className={`${styles.inputForm} ${className}`}
					onClick={(e) => inputRef.current.focus()}
					ref={inputContainer}
					data-error={ state.error ? errorData : ""}
					data-focus={ focusData }
					>
					<label htmlFor={name}>{children}</label>
					<input
						type={type}
						id={name}
						ref={inputRef}
						name={name}
						value={state.value || ""}
						onChange={(e) => setState({ ...state, value: e.target.value})}
						onFocus={(e) => { 
							if (state.error) {
								setFocusData("error-focus")
								setErrorData("")
							} else {
								setFocusData("focus-div")
							}
						}}
						onBlur={(e) => {
							setFocusData("");
							state.error && setErrorData("error-div")
						}}
					/>
					{type === "password" && state.value.length > 0 && (
						<div className={styles.eyeIcon} onClick={passwordVisibleToggler}>
							{passwordVisible ? <EyeClose /> : <EyeOpen />}
						</div>
					)}
				</div>
			);
	}
};

export default InputField;
