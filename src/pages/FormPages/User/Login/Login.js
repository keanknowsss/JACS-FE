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
import styles from "./Login.module.scss";

const Login = ({ title }) => {
	document.title = title;

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// dummy account
	const USER = {
		username: "test",
		password: "12345",
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (username !== USER.username && password !== USER.password) {
			setUsername("");
			setPassword("");
			return alert("Incorrect credentials please input again");
		}
	};

	return (
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
						<button className={styles.forgotPassword} type="button">Forgot Password</button>
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
	);
};

export default Login;
