import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Search, Cart, Profile } from "./subcomponents";
import styles from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/slice/userAccessSlice";
import { ProfileNavbar, SearchNavbar, CartNavbar } from "../../assets/icons";

const Navbar = () => {
	const location = useLocation();

	const [searchActive, setSearchActive] = useState(false);
	const [profileActive, setProfileActive] = useState(false);
	const [cartActive, setCartActive] = useState(false);

	const token = useSelector(selectCurrentToken);

	const handleSearch = (e) => {
		searchActive ? setSearchActive(false) : setSearchActive(true);
	};

	useEffect(() => {
		setSearchActive(false);
		setProfileActive(false);
	}, [location, token]);

	return (
		<>
			<nav>
				<NavLink to="/" className="flex-none">
					<img
						src="/assets/images/logo-small.png"
						width={160}
						alt="JACS Logo"
						title="Home"
					/>
				</NavLink>

				<div className="basis-3/5">
					<ul className="flex justify-between">
						<li className={styles.home}>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Home</span>
								<hr className={styles.homeIndicator} />
							</NavLink>
						</li>
						<li className={styles.shop}>
							<NavLink
								to="/shop"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Shop</span>
								<hr className={styles.shopIndicator} />
							</NavLink>
						</li>
						<li className={styles.buildYourPC}>
							<NavLink
								to="/buildpc"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Build your PC</span>
								<hr className={styles.BYPCIndicator} />
							</NavLink>
						</li>
						<li className={styles.forum}>
							<NavLink
								to="/forum"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Forum</span>
								<hr className={styles.forumIndicator} />
							</NavLink>
						</li>
						<li className={styles.tech101}>
							<NavLink
								to="/tech101"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Tech 101</span>
								<hr className={styles.tech101Indicator} />
							</NavLink>
						</li>
						<li className={styles.repair}>
							<NavLink
								to="/repair"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>Repair</span>
								<hr className={styles.repairIndicator} />
							</NavLink>
						</li>
						<li className={styles.aboutUs}>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								<span>About Us</span>
								<hr className={styles.aboutUsIndicator} />
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="basis-1/5">
					<div className="float-right">
						<div className={styles.logoContainer}>
							<SearchNavbar
								className={`${
									!searchActive ? styles.searchLogo : styles.searchLogoActive
								} transition-all ease-in duration-100`}
								onClick={handleSearch}
							/>
						</div>

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

						<div className={`${styles.logoContainer}`}>
							<CartNavbar
								className={`${cartActive && styles.cartLogoActive} ${
									styles.cartLogo
								}`}
							/>
							<div
								className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-45%] w-10 h-12"
								onMouseEnter={(e) => setCartActive(true)}
								onMouseLeave={(e) => setCartActive(false)}
							></div>
						</div>
					</div>
				</div>

				{profileActive && <Profile setProfileActive={setProfileActive} />}
				{cartActive && <Cart setCartActive={setCartActive} />}
			</nav>

			{searchActive && <Search />}

			<Outlet />
		</>
	);
};

export default Navbar;
