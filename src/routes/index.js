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
} from "../pages";
import Navbar from "../components/Navbar";


const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/buildpc" element={<BuildYourPC />} />
				<Route path="/forum" element={<Forum />} />
				<Route path="/tech101" element={<Tech101 />} />
				<Route path="/repair" element={<Repair />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />		
			</Route>
		</Routes>
	);
};

export default Navigation;
