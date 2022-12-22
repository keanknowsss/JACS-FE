import { useState } from "react";
import { Link } from "react-router-dom";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";
import Modal from "../../../../components/Modal";
import styles from "./Login.module.scss";

const Login = ({ title }) => {
	document.title = title;

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [passwordModal, setPasswordModal] = useState(false);

	const [emailAccount, setEmailAccount] = useState("");
	const [emailExist, setEmailExist] = useState(true);

	// dummy account
	const USER = {
		username: "test",
		password: "12345",
		email: "test@test.com",
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (username !== USER.username && password !== USER.password) {
			setUsername("");
			setPassword("");
			return alert("Incorrect credentials please input again");
		}
	};

	const emailSubmit = (e) => {
		e.preventDefault();
		setEmailAccount("");
		setPasswordModal(false);
		if (emailAccount !== USER.email) {
			setEmailExist(false);
			setPasswordModal(true);
			// insert code for toast
		}
		// insert code for api
	};

	return (
		<>
			<Modal
				showModal={passwordModal}
				setShowModal={setPasswordModal}
				type="input"
				input="email"
				value={emailAccount}
				setValue={setEmailAccount}
				submitHandler={emailSubmit}
			>
				<h1>Change Password</h1>
				<p>
					{emailExist
						? "Input the email associated with your account"
						: "Please input the email associated with your account."}
				</p>
				{!emailExist && <span>Input is not linked to any accounts</span>}
			</Modal>
			<main className={styles.formContainer}>
				<form className={styles.formElement} onSubmit={submitHandler}>
					<FormContainer>
						<div data-title="heading">
							<h2>Welcome Back</h2>
							<h1>
								Login to <span>JACS.</span>
							</h1>
							<p>
								Don't have an account? <Link to="/register">Register Here</Link>
							</p>
						</div>
						<div data-title="inputContainer">
							<InputField
								name="username"
								type="text"
								state={username}
								setState={setUsername}
								required={true}
							>
								Username
							</InputField>
							<InputField
								name="password"
								type="password"
								state={password}
								setState={setPassword}
								required={true}
							>
								Password
							</InputField>
							<button
								className={styles.forgotPassword}
								type="button"
								onClick={(e) => {
									setPasswordModal(true);
									setEmailExist(true);
									setEmailAccount("");
								}}
							>
								Forgot Password
							</button>
						</div>
						<button type="submit">Login</button>
					</FormContainer>
				</form>
				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<MouseIcon className={styles.mouseIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon} />
					</div>

					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<PrinterIcon className={styles.printerIcon} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Login;
