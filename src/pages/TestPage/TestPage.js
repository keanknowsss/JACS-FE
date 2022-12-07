import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChipIcon, MonitorIcon, MouseIcon, PrinterIcon } from "../../assets/icons";
import FormContainer from "../../components/FormContainer";
import { InputField } from "../../components/InputField";
import styles from "./TestPage.module.scss";

const TestPage = () => {
	document.title = "Testing";

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
		<main className={styles.formContainer}>
			<FormContainer submit={submitHandler}>
				<div data-title="heading">
					<h1>
						Sign up to <span>JACS.</span>
					</h1>
					<p>
						Have an account already? <Link to="/login">Login Here</Link>
					</p>
				</div>

				<div data-title="inputContainer">
					<InputField
						name="username"
						label="Username"
						type="text"
						state={username}
						setState={setUsername}
						required={true}
					/>
					<InputField
						name="password"
						label="Password"
						type="password"
						state={password}
						setState={setPassword}
						required={true}
					/>
				</div>

				<InputField name="agree" reference={checkbox} type="checkbox" />
				
				<button type="submit" className={styles.registerButton}>
					Register
				</button>
			</FormContainer>

			<div className={styles.iconContainer}>
				<div className={styles.columnIcon}>
					<MouseIcon className={styles.mouseIcon} />
					<ChipIcon className={styles.chipIcon} />
				</div>
				<div className={styles.columnIcon}></div>

				<div className={styles.columnIcon}>
					<MonitorIcon className={styles.monitorIcon} />
					<PrinterIcon className={styles.printerIcon} />
				</div>
			</div>
		</main>
	);
};

export default TestPage;
