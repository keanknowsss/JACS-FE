import { useState } from "react";
import { ChipIcon, MonitorIcon, MouseIcon, PrinterIcon } from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";
import styles from "./TechnicianProfile.module.scss";

const TechnicianProfile = ({ title }) => {
	document.title = title;

	const [yearsOfExperience, setYearsOfExperience] = useState();
	const [areaOfExpertise, setAreaOfExpertise] = useState("any");
	const [levelOfExpertise, setLevelOfExpertise] = useState("any");
	const [technicianEmail, setTechnicianEmail] = useState("");
	const [technicianDescription, setTechnicianDescription] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();

		console.log(`
			Years of Experience: ${yearsOfExperience}
			Area of Expertise: ${areaOfExpertise}
			Level of Expertise: ${levelOfExpertise}
			Technician Email: ${technicianEmail}
			Description: ${technicianDescription}
		`);
	};
	return (
		<>
			<div className={styles.formTitleContainer}>
				<div className={styles.formTitle}>
					<h1>TECHNICIAN APPLICATION</h1>
					<p>Technician Profile (Application 2 of 2)</p>
				</div>
			</div>

            <main className={styles.formContainer}>
				<form className={styles.formElement} onSubmit={submitHandler}>
					<FormContainer>
						<div data-title="heading">
							<h1>Technician Profile</h1>
							<p>This is displayed in your Technician Profile</p>
						</div>
						<div data-title="inputContainer">
							<div className="flex gap-3">
								<InputField
									name="yearsExperience"
									type="number"
									state={yearsOfExperience}
									setState={setYearsOfExperience}
									className={"basis-1/3"}
									required={true}
								>
									Years of Experience
								</InputField>
								<InputField
									className={"basis-2/3"}
									type="select"
									name="areaOfExpertise"
									state={areaOfExpertise}
									setState={setAreaOfExpertise}
									selectChoice={["Any", "Hardware", "Software", "Networks"]}
								>
									Area of Expertise
								</InputField>
							</div>
							<InputField
								type="select"
								name="levelOfExpertise"
								state={levelOfExpertise}
								setState={setLevelOfExpertise}
								selectChoice={[
									"Amateur",
									"Intermediate",
									"Advanced",
									"Expertise",
								]}
							>
								Level of Expertise
							</InputField>
							<InputField
								name="technicianEmail"
								type="email"
								state={technicianEmail}
								setState={setTechnicianEmail}
								required={true}
							>
								Email
							</InputField>
							<InputField
								name="technicianDescription"
								type="textarea"
								state={technicianDescription}
								setState={setTechnicianDescription}
							>
								Description
							</InputField>
						</div>
                        <button type="submit">Proceed to Profile</button>
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
						<PrinterIcon className={styles.printerIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon} />
					</div>
				</div>
			</main>
		</>
	);
};

export default TechnicianProfile;
