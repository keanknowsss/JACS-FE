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
	};

	return (
		<main className={styles.formContainer}>
			<FormContainer submit={submitHandler}>
				<div data-title="heading">
					<h1>User Information</h1>
					<p>Please fill out necessary information</p>
				</div>

				<div data-title="inputContainer">
					<div className="flex gap-3">
						<InputField
							name="firstName"
							label="First Name"
							type="text"
							state={firstName}
							setState={setFirstName}
							required={true}
						/>
						<InputField
							name="lastName"
							label="Last Name"
							type="text"
							state={lastName}
							setState={setLastName}
							required={true}
						/>
					</div>
					<InputField
						name="contactNumber"
						label="Contact Number"
						type="tel"
						state={contactNumber}
						setState={setContactNumber}
						required={true}
					/>
					<InputField
						name="email"
						label="Email"
						type="email"
						state={email}
						setState={setEmail}
						required={true}
					/>

					<button type="submit" className={styles.saveButton}>
						Save
					</button>
				</div>
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

export default UserInformation;
