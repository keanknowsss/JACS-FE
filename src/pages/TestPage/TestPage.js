import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import Toast from "../../components/Toast/Toast";
import styles from "./TestPage.module.scss";

const TestPage = ({ title }) => {
	document.title = title;

	const [showToast, setShowToast] = useState(true);
	const [showModal, setShowModal] = useState(true);

	const callBack = () => {
		console.log("test callback");
	};

	return (
		<>
			{/* <Toast
				showToast={showToast}
				setShowToast={setShowToast}
				symbol="success"
				title="Registration Successful"
				subtitle="Fill out the form to proceed to the site"
			/> */}
			{/* <Toast
				showToast={showToast}
				setShowToast={setShowToast}
				symbol="warning"
				type="linkCallback"
				title="Account is not Verified"
				callback={callBack}
				linkText="Send email verification"
			/> */}
			<Toast
				showToast={showToast}
				setShowToast={setShowToast}
				symbol="inform"
				title="Login Failed"
				subtitle="hello"
			/>
			{/* <Modal
				showModal={showModal}
				setShowModal={setShowModal}
				type="input"
				input="email"
				value={null}
				setValue={null}
				submitHandler={null}
			>
				<h1>Change Password</h1>
				<p>"Please input the email associated with your account."</p>
				<span>Input is not linked to any accounts</span>
			</Modal> */}
		</>
	);
};
export default TestPage;
