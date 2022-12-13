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
	TestPage
} from "../pages";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Navigation = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/buildpc" element={<BuildYourPC />} />
				<Route path="/forum" element={<Forum />} />
				<Route path="/tech101" element={<Tech101 />} />
				<Route path="/repair" element={<Repair />} />
				<Route path="/about" element={<AboutUs />} />

				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				<Route path="/user/information" element={<UserInformation />} />
				<Route path="/store/register" element={<SellerRegister />} />

				<Route path="/test" element={<TestPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<hr />
			<Footer />
		</>
	);
};

export default Navigation;
