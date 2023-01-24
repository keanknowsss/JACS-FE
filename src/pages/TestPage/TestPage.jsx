import CartCard from "../ProfilePages/Profile/subcomponents/cartCard/CartCard";
import styles from "./TestPage.module.scss";
import { ProductCard } from "../../components/Card";
import BuildCard from "../ProfilePages/Profile/subcomponents/buildCard/BuildCard";

const TestPage = ({ title }) => {
	document.title = title;

	return (
		<>
			<main className="h-screen w-full bg-primary-default flex">
				{/* <CartCard /> */}
				<BuildCard />
			</main>

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
			{/* <Toast
				showToast={showToast}
				setShowToast={setShowToast}
				symbol="inform"
				title="Login Failed"
				subtitle="hello"
			/> */}
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
