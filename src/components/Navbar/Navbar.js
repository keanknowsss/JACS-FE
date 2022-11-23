import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();

	const [searchActive, setSearchActive] = useState(false);

	const handleSearch = (e) => {
		searchActive ? setSearchActive(false) : setSearchActive(true);
	};

	useEffect(() => {
		setSearchActive(false);
	}, [location])

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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className={`${
								!searchActive ? styles.searchLogo : styles.searchLogoActive
							} transition-all ease-in duration-100`}
							onClick={handleSearch}
						>
							<path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
							<path d="m20.71 19.29-3.4-3.39a7.92 7.92 0 0 0 1.69-4.9 8 8 0 1 0 -8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-15.71-8.29a6 6 0 1 1 6 6 6 6 0 0 1 -6-6z" />
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className={styles.profileLogo}
						>
							<path
								fillRule="evenodd"
								d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								clipRule="evenodd"
							/>
						</svg>

						<svg
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className={styles.cartIcon}
						>
							<path d="m20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655-.285 2h-3.562v-2zm-4.847 0v2h-3v-2zm0 3v2h-3v-2zm-4-3v2h-3l-.148.03-.338-2.03zm-2.986 3h2.986v2h-2.653zm7.986 2v-2h3.418l-.285 2z" />
							<circle cx="8.5" cy="19.5" r="1.5" />
							<circle cx="17.5" cy="19.5" r="1.5" />
						</svg>
					</div>
				</div>
			</nav>

			{searchActive ? (
				<section>
					<form className="basis-3/5 flex justify-between">
						<input
							className={styles.searchInput}
							type="text"
							name="searchQuery"
							placeholder="Search JACS"
						/>
						<select name="category" id="">
							<option value="">Any</option>
							<option value="">JACS Shop</option>
							<option value="">JACS Build Community</option>
							<option value="">JACS Forum</option>
							<option value="">JACS Tech101</option>
							<option value="">JACS Repair</option>
						</select>
					</form>
				</section>
			) : null}

			<Outlet />
		</>
	);
};

export default Navbar;
