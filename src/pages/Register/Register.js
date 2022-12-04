import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../assets/icons";
import { InputForm } from "../../components/InputForm";

import styles from "./Register.module.scss";

const Register = () => {
	document.title = "Register - Just Another Computer Shop";

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const checkbox = useRef();

	const user = {
		username: "admin",
		password: "admin",
	};
	// insert logic for submit
	const submitHandler = (e) => {
		e.preventDefault();
		if (username === user.username) {
			alert("Username already taken!");
			return;
		}
		if (password.length < 5) {
			alert("Password must have 5 Characters or more");
			return;
		}
		if (!checkbox.current.checked) {
			alert(
				"You must agree with Terms and Condition and Privacy Policy before Proceeding!"
			);
			return;
		}
		alert("Awesome!\nAccount Successfully Created 😊");
	};

	return (
		<main className={styles.registerContainer}>
			<form className={styles.registerForm} onSubmit={submitHandler}>
				<div className={styles.heading}>
					<h1>
						Sign up to <span>JACS.</span>
					</h1>
					<p>
						Have an account already? <Link to="/login">Login Here</Link>
					</p>
				</div>

				<div className={styles.inputUser}>
					<InputForm
						name="username"
						label="Username"
						type="text"
						state={username}
						setState={setUsername}
						required={true}
					/>
					<InputForm
						name="password"
						label="Password"
						type="password"
						state={password}
						setState={setPassword}
						required={true}
					/>
				</div>

				{/* <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="contactNumber">Contact Number</label>
        <input type="tel" id="contactNumber" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" /> */}

				<div className={styles.checkSection}>
					<input type="checkbox" id="agree" ref={checkbox} />
					<label htmlFor="agree">
						I agree to the <Link to="/register">Terms of Service</Link> and{" "}
						<Link to="/register">Privacy Policy</Link>
					</label>
				</div>

				<button type="submit" className={styles.registerButton}>
					Register
				</button>
			</form>

			<div className={styles.iconContainer}>
				<div className={styles.columnIcon}>
					<PrinterIcon className={styles.printerIcon} />
					<ChipIcon className={styles.chipIcon} />
				</div>
				<div className={styles.columnIcon}></div>

				<div className={styles.columnIcon}>
					<MonitorIcon className={styles.monitorIcon} />
					<MouseIcon className={styles.mouseIcon} />
				</div>
			</div>
		</main>
	);
};

export default Register;
