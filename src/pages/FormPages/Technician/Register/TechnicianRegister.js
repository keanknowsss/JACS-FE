import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";
import Modal from "../../../../components/Modal";
import styles from "./TechnicianRegister.module.scss";

const TechnicianRegister = ({ title }) => {
	document.title = title;

	const [workSetup, setWorkSetup] = useState("onlineRemote");
	const [technicianAddress, setTechnicianAddress] = useState("");

	const [validID, setValidID] = useState();
	const [certificateTrainings, setCertificateTrainings] = useState();

	const [showModal, setShowModal] = useState(false);

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		if (!validID) {
			return alert("Please upload a file or image of your Valid ID");
		}
		if (!certificateTrainings) {
			return alert(
				"Please upload a file or image of your Certificate of Trainings or Portfolio"
			);
		}
		setShowModal(true);
	};

	const returnHome = () => {
		navigate("/")
	}

	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				type="callback"
				callback={returnHome}
				symbol="success"
			>
				<h1>Submitted Successfully</h1>
				<p>You will be updated if the application is verified</p>
			</Modal>
			<div className={styles.formTitleContainer}>
				<div className={styles.formTitle}>
					<h1>TECHNICIAN APPLICATION</h1>
					<p>Technician Documents (Application 1 of 2)</p>
				</div>
			</div>

			<main className={styles.formContainer}>
				<form className={styles.formElement} onSubmit={submitHandler}>
					<FormContainer>
						<div data-title="heading">
							<h1>Technician Way of Contact</h1>
							<p>Mode of contact for you and your clients</p>
						</div>
						<div data-title="inputContainer">
							<InputField type="title">Work Setup</InputField>
							<div className="pl-5 flex flex-col">
								<InputField
									name="onlineRemote"
									type="radio"
									radioGroup="workSetup"
									value="onlineRemote"
									checked={true}
									state={workSetup}
									setState={setWorkSetup}
									required={true}
								>
									Online/Remote
								</InputField>
								<InputField
									name="physicalShop"
									type="radio"
									radioGroup="workSetup"
									value="physicalShop"
									state={workSetup}
									setState={setWorkSetup}
									required={true}
								>
									Physical Repair Shop
								</InputField>
							</div>
							{workSetup === "physicalShop" && (
								<InputField
									name="technicianAddress"
									type="text"
									state={technicianAddress}
									setState={setTechnicianAddress}
									required={true}
								>
									Address
								</InputField>
							)}
						</div>
					</FormContainer>
					<FormContainer>
						<div data-title="heading">
							<h1>Technician Documents</h1>
							<p>Used to verify the shop</p>
						</div>
						<div data-title="inputContainer">
							<InputField type="title-information" title="Valid Government ID">
								Used to check legitimacy of user and shop. Upload a single image
								or a single file (if more than one image).
							</InputField>
							<InputField
								type="file"
								name="validID"
								state={validID}
								setState={setValidID}
								required={true}
							/>
							<InputField
								type="title-information"
								title="Certificates of Trainings"
							>
								Used to check legitimacy of user and shop. Upload a single image
								or a single file (if more than one image).
							</InputField>
							<InputField
								type="file"
								name="certificateTrainings"
								state={certificateTrainings}
								setState={setCertificateTrainings}
								required={true}
							/>
						</div>
						<button type="submit">Submit Application</button>
						<p data-title="submit-information">
							JACS team will review your request, you will receive a response in
							your email when the request is accepted or rejected within 1-2
							weeks
						</p>
					</FormContainer>
				</form>

				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<MouseIcon className={styles.mouseIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon1} />
					</div>

					<div className={styles.columnIcon}>
						<PrinterIcon className={styles.printerIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon1} />
					</div>

					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon2} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon2} />
					</div>
				</div>
			</main>
		</>
	);
};

export default TechnicianRegister;
