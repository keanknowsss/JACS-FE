import { useState } from "react";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../assets/icons";
import FormContainer from "../../components/FormContainer";
import { InputField } from "../../components/InputField";
import styles from "./UserInformation.module.scss";

const UserInformation = () => {
	document.title = "User Information - Just Another Computer Shop";

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [email, setEmail] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(`
			first name: ${firstName} \n
			last name: ${lastName} \n
			contact number: ${contactNumber} \n
			email: ${email}
		`);
	};

	return (
		<main className={styles.formContainer}>
			<form className={styles.formElement} onSubmit={submitHandler}>
				<FormContainer>
					<div data-title="heading">
						<h1>User Information</h1>
						<p>Please fill out necessary information</p>
					</div>
					<div data-title="inputContainer">
						<div className="flex gap-3">
							<InputField
								name="firstName"
								type="text"
								state={firstName}
								setState={setFirstName}
								required={true}
							>
								First Name
							</InputField>
							<InputField
								name="lastName"
								type="text"
								state={lastName}
								setState={setLastName}
								required={true}
							>
								Last Name
							</InputField>
						</div>
						<InputField
							name="contactNumber"
							type="tel"
							state={contactNumber}
							setState={setContactNumber}
							required={true}
						>
							Contact Number
						</InputField>
						<InputField
							name="email"
							type="email"
							state={email}
							setState={setEmail}
							required={true}
						>
							Email
						</InputField>
					</div>
					<button type="submit" className={styles.saveButton}>
						Save
					</button>
				</FormContainer>
			</form>

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

export default UserInformation;
