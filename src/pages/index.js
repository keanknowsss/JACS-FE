// exports all pages in the folder

export { default as Home } from "./HomePage";
export { default as Shop } from "./ShopPage";
export { default as BuildYourPC } from "./BuildYourPC";
export { default as Forum } from "./Forum";
export { default as Tech101 } from "./Tech101";
export { default as Repair } from "./Repair";
export { default as AboutUs } from "./AboutUs";
export { default as NotFound } from "./NotFound";

export { default as OrderSuccess } from "./OrderSuccessPage";

// FORMS
export { default as LoginForm } from "./FormPages/User/Login";

export { default as UserRegisterForm } from "./FormPages/User/Register";
export { default as UserProfileForm } from "./FormPages/User/Profile";

export { default as StoreRegisterForm } from "./FormPages/Store/Register";
export { default as StoreProfileForm } from "./FormPages/Store/Profile";

export { default as TechnicianRegisterForm } from "./FormPages/Technician/Register";
export { default as TechnicianProfileForm } from "./FormPages/Technician/Profile";

// PROFILE
export {
	Profile,
	Cart,
	Build,
	Order,
	Saved,
	Settings,
	ProfileNavbar,
	ShopProfile,
	TechnicianProfile
} from "./ProfilePages";

export { default as TestPage } from "./TestPage/TestPage";
