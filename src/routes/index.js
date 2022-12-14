import { Routes, Route } from "react-router-dom";
import {
	Home,
	Shop,
	BuildYourPC,
	Forum,
	Tech101,
	Repair,
	AboutUs,
	NotFound,
	Register,
	Login,
	UserInformation,
	SellerRegister,
	TestPage,
	TechnicianRegister
} from "../pages";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Navigation = () => {
	const TITLES = {
		Home: "JACS Home - Just Another Computer Shop",
		Shop: "JACS Shop - Just Another Computer Shop",
		BuildYourPC: "JACS Build Your PC | Just Another Computer Shop",
		Forum: "JACS Forum - Just Another Computer Shop",
		Tech101: "JACS Tech101 - Just Another Computer Shop",
		Repair: "JACS Repair - Just Another Computer Shop",
		About: "About JACS - Just Another Computer Shop",
		Register: "Create an Account - Just Another Computer Shop",
		Login: "Login - Just Another Computer Shop",
		UserInformation: "User Information - Just Another Computer Shop",
		SellerRegister: "Register Your Store - Just Another Computer Shop",
		TechnicianRegister: "Register as Technician - Just Another Computer Shop",

		NotFound: "ERR.. OOPS WE DON'T HAVE THAT HERE 😫",
		Test: "Testing"
	}

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home title={TITLES.Home} />} />
				<Route path="/shop" element={<Shop title={TITLES.Shop} />} />
				<Route path="/buildpc" element={<BuildYourPC title={TITLES.BuildYourPC} />} />
				<Route path="/forum" element={<Forum title={TITLES.Forum} />} />
				<Route path="/tech101" element={<Tech101 title={TITLES.Tech101} />} />
				<Route path="/repair" element={<Repair title={TITLES.Repair} />} />
				<Route path="/about" element={<AboutUs title={TITLES.About} />} />

				<Route path="/register" element={<Register title={TITLES.Register} />} />
				<Route path="/login" element={<Login title={TITLES.Login} />} />

				<Route path="/user/information" element={<UserInformation title={TITLES.UserInformation} />} />
				<Route path="/store/register" element={<SellerRegister title={TITLES.SellerRegister} />} />
				<Route path="/technician/register" element={<TechnicianRegister title={TITLES.TechnicianRegister} />} />

				<Route path="/test" element={<TestPage title={TITLES.Test} />} />
				<Route path="*" element={<NotFound title={TITLES.NotFound} />} />
			</Routes>
			<hr />
			<Footer />
		</>
	);
};

export default Navigation;
