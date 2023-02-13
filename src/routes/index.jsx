import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
	AboutUs, Build, BuildYourPC, Cart, Forum, Home, LoginForm, NotFound, Order, Profile, ProfileNavbar, Repair, Saved, Settings, Shop, ShopProfile, StoreProfileForm, StoreRegisterForm, Tech101, TechnicianProfile, TechnicianProfileForm, TechnicianRegisterForm, TestPage, UserProfileForm, UserRegisterForm
} from "../pages";
import MainRoutes from "./MainRoutes";

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

		LoginForm: "Login - Just Another Computer Shop",
		UserRegisterForm: "Create an Account - Just Another Computer Shop",
		UserProfileForm: "User Profile - JACS User Registeration",
		StoreRegisterForm: "Register Your Store - JACS Store Registration",
		StoreProfileForm: "Store Profile - JACS Store Registration",
		TechnicianRegisterForm: "Register as Technician - JACS Technician Registration",
		TechnicianProfileForm: "Technician Profile - JACS Technician Registration",

		Profile: "My Profile - Just Another Computer Shop",
		ShopProfile: "My Shop - Just Another Computer Shop",
		TechnicianProfile: "Technician Dashboard - Just Another Computer Shop",
		Cart: "My Cart - Just Another Computer Shop",
		Build: "My Builds - Just Another Computer Shop",
		Saved: "Saved - Just Another Computer Shop",
		Order: "My Orders - Just Another Computer Shop",
		Settings: "Settings - Just Another Computer Shop",

		NotFound: "ERR.. OOPS WE DON'T HAVE THAT HERE 😫",
		Test: "Testing",
	};

	return (
		<>
			<Navbar />
			<Routes>
				{/* reset credentials if not verified */}
				<Route element={<MainRoutes />}>
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
						element={<UserProfileForm title={TITLES.UserProfileForm} />}
					/>
					<Route
						path="/store/register"
						element={<StoreRegisterForm title={TITLES.StoreRegisterForm} />}
					/>
					<Route
						path="/store/information"
						element={<StoreProfileForm title={TITLES.StoreProfileForm} />}
					/>
					<Route
						path="/technician/register"
						element={<TechnicianRegisterForm title={TITLES.TechnicianRegisterForm} />}
					/>
					<Route
						path="/technician/profile"
						element={<TechnicianProfileForm title={TITLES.TechnicianProfileForm} />}
					/>

					<Route exact path="/profile" element={<ProfileNavbar />} >
						<Route index element={<Profile title={TITLES.Profile}/>} />
						<Route path="cart" element={<Cart title={TITLES.Cart} />} />
						<Route path="builds" element={<Build title={TITLES.Build} />} />
						<Route path="saved" element={<Saved title={TITLES.Saved} />} />
						<Route path="orders" element={<Order title={TITLES.Order} />} />
						<Route path="settings" element={<Settings title={TITLES.Settings} />} />
						<Route path="shop" element={<ShopProfile title={TITLES.ShopProfile} />} />
						<Route path="technician" element={<TechnicianProfile title={TITLES.TechnicianProfile} />} />
 					</Route>

					<Route path="/test" element={<TestPage title={TITLES.Test} />} />
					<Route path="*" element={<NotFound title={TITLES.NotFound} />} />
				</Route>

				{/* user forms:  */}
				<Route path="/login" element={<LoginForm title={TITLES.LoginForm} />} />
				<Route
					path="/register"
					element={<UserRegisterForm title={TITLES.UserRegisterForm} />}
				/>
			</Routes>
			<hr />
			<Footer />
		</>
	);
};

export default Navigation;
