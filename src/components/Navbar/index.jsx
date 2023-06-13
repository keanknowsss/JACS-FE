import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, Outlet, useHref, useLocation } from "react-router-dom";

import { Search, Cart, Profile } from "./subcomponents";
import styles from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import {
	selectCurrentToken,
	selectCurrentUserId
} from "../../features/slice/userAccessSlice";
import {
	ProfileNavbar,
	// SearchNavbar,
	CartNavbar,
	MenuIcon
} from "../../assets/icons";
import { getUser, getUserDetail } from "../../features/api/builders/userApi";
import Menu from "./subcomponents/Menu/Menu";
import { getCart } from "../../features/api/builders/cartApi";

const Navbar = () => {
	const [searchActive, setSearchActive] = useState(false);
	const [profileActive, setProfileActive] = useState(false);
	const [cartActive, setCartActive] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [pageName, setPageName] = useState(null);

	const [cart, setCart] = useState();

	const [isSeller, setIsSeller] = useState(false);

	const token = useSelector(selectCurrentToken);
	const id = useSelector(selectCurrentUserId);

	const [userDataQuery] = getUser.useLazyQuery();
	const [userDetailQuery] = getUserDetail.useLazyQuery();
	const [name, setName] = useState(null);
	const [profilePicture, setProfilePicture] = useState(null);
	const [getCartQuery] = getCart.useLazyQuery();

	const route = useHref();
	const location = useLocation();

	// const handleSearch = (e) => {
	// 	searchActive ? setSearchActive(false) : setSearchActive(true);
	// };

	const changePageNameHandler = (pageLocation) => {
		switch (pageLocation) {
			case "/":
				return setPageName("Home");
			case "/shop":
				return setPageName("Shop");
			case "/buildpc":
				return setPageName("Build Your PC");
			case "/forum":
				return setPageName("Forum");
			case "/tech101":
				return setPageName("Tech101");
			case "/repair":
				return setPageName("Repair");
			case "/register":
				return setPageName("Register");
			case "/login":
				return setPageName("Login");
			case "/profile/":
				return setPageName("My Profile");
			case "/profile/shop":
				return setPageName("My Shop");
			case "/profile/technician":
				return setPageName("Technician Dashboard");
			case "/profile/cart":
				return setPageName("Cart");
			case "/profile/builds":
				return setPageName("Builds");
			case "/profile/saved":
				return setPageName("Saved");
			case "/profile/orders":
				return setPageName("My Orders");
			case "/profile/settings":
				return setPageName("Settings");
			default:
				return;
		}
	};

	useLayoutEffect(() => {
		const getData = async () => {
			if (token && id) {
				const userDetailData = await userDetailQuery(id);
				const userData = await userDataQuery(id);

				if (!userDetailData.error && !userData.error) {
					const nameArray = userDetailData.data?.result?.firstName.split(" ");
					setName(nameArray[0]);
					setProfilePicture(userDetailData.data?.result?.img);
					setIsSeller(userData.data?.result?.isSeller);
				} else {
					console.log("error in user data", userDetailData.error, userData.error);
				}
			}
		};
		getData();
	}, [token, id, userDetailQuery, userDataQuery]);

	useLayoutEffect(() => {
		const getData = async () => {
			try {
				const { data } = await getCartQuery(id);
				setCart(data.result.products);


			} catch (error) {
				console.log("Error in getting cart", error)
			}
		}
		getData()
	}, [])

	useEffect(() => {
		setSearchActive(false);
		setProfileActive(false);
		setShowMenu(false);

		changePageNameHandler(route);
	}, [location, route]);

	return (
		<>
			<Menu
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				name={name}
				className={styles.menuNav}
			/>
			<nav>
				<NavLink to="/" className="flex-none">
					<img
						src="/assets/images/logo-small.png"
						width={160}
						alt="JACS Logo"
						title="Home"
					/>
				</NavLink>

				<div className={styles.middlePart}>
					<h1 className={styles.currentPage}>{pageName}</h1>

					<ul className={styles.linkContainer}>
						<li className={styles.linkList}>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
							>
								<span>Home</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li>
						<li className={styles.linkList}>
							<NavLink
								to="/shop"
								className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
							>
								<span>Shop</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li>
						{/* <li className={styles.linkList}>
							<NavLink
								to="/buildpc"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Build your PC</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li>
						<li className={styles.linkList}>
							<NavLink
								to="/forum"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Forum</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li>
						<li className={styles.linkList}>
							<NavLink
								to="/tech101"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Tech 101</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li>
						<li className={styles.linkList}>
							<NavLink
								to="/repair"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Repair</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li> */}
						<li className={styles.linkList}>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
							>
								<span>About Us</span>
								<hr className={styles.indicator} />
							</NavLink>
						</li>
					</ul>
				</div>
				<div className={styles.rightPart}>
					<div className="float-right flex">
						{/* <button className={styles.logoContainer} onClick={handleSearch}>
							<SearchNavbar
								className={`${
									!searchActive ? styles.searchLogo : styles.searchLogoActive
								} transition-all ease-in duration-100`}
							/>
						</button> */}

						<div className={styles.logoContainer}>
							<ProfileNavbar
								className={`${profileActive && styles.profileLogoActive} ${
									styles.profileLogo
								}`}
							/>
							<div
								className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-45%] w-10 h-12"
								onMouseEnter={(e) => setProfileActive(true)}
								onMouseLeave={(e) => setProfileActive(false)}
							></div>
						</div>

						{/* <div className={`${styles.logoContainer}`}>
							<CartNavbar
								className={`${cartActive && styles.cartLogoActive} ${styles.cartLogo}`}
							/>
							<div
								className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-45%] w-10 h-12"
								onMouseEnter={(e) => setCartActive(true)}
								onMouseLeave={(e) => setCartActive(false)}
							></div>
						</div> */}
						<button
							className={styles.menuButtonContainer}
							onClick={() => setShowMenu(true)}
						>
							<MenuIcon className={styles.menuIcon} />
						</button>
					</div>
				</div>

				{profileActive && (
					<Profile
						setProfileActive={setProfileActive}
						name={name}
						className={styles.profileSection}
						userPic={profilePicture}
						isSeller={isSeller}
					/>
				)}
				{/* {cartActive && (
					<Cart setCartActive={setCartActive} className={styles.cartSection} cart={cart} />
				)} */}
			</nav>

			{searchActive && <Search />}

			<Outlet />
		</>
	);
};

export default Navbar;
