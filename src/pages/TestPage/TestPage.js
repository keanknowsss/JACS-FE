import { useState } from "react";

import Modal from "../../components/Modal";
import styles from "./TestPage.module.scss";

const TestPage = ({ title }) => {
	document.title = title;

	const [showModal, setShowModal] = useState(true);

	return (
		<>
			{/* <Modal
				showModal={true}
				setShowModal={setShowModal}
				type="input"
				input="email"
				value={email}
				setValue={setEmail}
				submitHandler={testSubmitHandler}
			>
				<h1>Change Password</h1>
				<p>Input the email associated with your account</p>
			</Modal> */}
			<Modal
				showModal={true}
				setShowModal={setShowModal}
				type="redirect"
				symbol="information"
				link="/"
			>
				<h1>Verify Your Email</h1>
				<p>An email verification has been sent to your account</p>
			</Modal>
			
		</>
	);
};

export default TestPage;
