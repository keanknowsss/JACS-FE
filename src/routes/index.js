import { Routes, Route, useLocation } from "react-router-dom";
import {
	Home,
	Shop,
	BuildYourPC,
	Forum,
	Tech101,
	Repair,
	AboutUs,
	NotFound,
	UserRegister,
	UserProfile,
	Login,
	TechnicianRegister,
	StoreRegister,
	StoreProfile,
	TechnicianProfile,
	TestPage,
} from "../pages";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AuthReset from "./AuthReset";

const Navigation = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const TITLES = {
		Home: "JACS Home - Just Another Computer Shop",
		Shop: "JACS Shop - Just Another Computer Shop",
		BuildYourPC: "JACS Build Your PC | Just Another Computer Shop",
		Forum: "JACS Forum - Just Another Computer Shop",
		Tech101: "JACS Tech101 - Just Another Computer Shop",
		Repair: "JACS Repair - Just Another Computer Shop",
		About: "About JACS - Just Another Computer Shop",

		Login: "Login - Just Another Computer Shop",
		UserRegister: "Create an Account - Just Another Computer Shop",
		UserProfile: "User Profile - JACS User Registeration",
		StoreRegister: "Register Your Store - JACS Store Registration",
		StoreProfile: "Store Profile - JACS Store Registration",
		TechnicianRegister: "Register as Technician - JACS Technician Registration",
		TechnicianProfile: "Technician Profile - JACS Technician Registration",

		NotFound: "ERR.. OOPS WE DON'T HAVE THAT HERE 😫",
		Test: "Testing",
	};

	return (
		<>
			<Navbar />
			<Routes>
				{/* reset credentials if not verified */}
				<Route element={<AuthReset />}>
					<Route path="/" element={<Home title={TITLES.Home} />} />
					<Route path="/shop" element={<Shop title={TITLES.Shop} />} />
					<Route
						path="/buildpc"
						element={<BuildYourPC title={TITLES.BuildYourPC} />}
					/>
					<Route path="/forum" element={<Forum title={TITLES.Forum} />} />
					<Route path="/tech101" element={<Tech101 title={TITLES.Tech101} />} />
					<Route path="/repair" element={<Repair title={TITLES.Repair} />} />
					<Route path="/about" element={<AboutUs title={TITLES.About} />} />

					<Route
						path="/user/information"
						element={<UserProfile title={TITLES.UserProfile} />}
					/>
					<Route
						path="/store/register"
						element={<StoreRegister title={TITLES.StoreRegister} />}
					/>
					<Route
						path="/store/information"
						element={<StoreProfile title={TITLES.StoreProfile} />}
					/>
					<Route
						path="/technician/register"
						element={<TechnicianRegister title={TITLES.TechnicianRegister} />}
					/>
					<Route
						path="/technician/profile"
						element={<TechnicianProfile title={TITLES.TechnicianProfile} />}
					/>

					<Route path="/test" element={<TestPage title={TITLES.Test} />} />
					<Route path="*" element={<NotFound title={TITLES.NotFound} />} />
				</Route>

				{/* user forms:  */}
				<Route path="/login" element={<Login title={TITLES.Login} />} />
				<Route
					path="/register"
					element={<UserRegister title={TITLES.UserRegister} />}
				/>
			</Routes>
			<hr />
			<Footer />
		</>
	);
};

export default Navigation;
