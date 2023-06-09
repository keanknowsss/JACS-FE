import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartNavbar, MenuIcon, ProfileNavbar } from "../../../../assets/icons";

import { Profile, Cart } from "..";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Menu.module.scss";


const menuVariant = {
	initial: {
		x: "100vh",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeIn",
			duration: 0.3,
		},
	},
	exit: {
		x: "100vh",
		opacity: 0,
		transition: {
			ease: "easeIn",
			duration: 0.3,
		},
	},
};
const Menu = ({ showMenu, setShowMenu, name }) => {
	const [profileVisibility, setProfilieVisibility] = useState(false);
	const [cartVisibility, setCartVisibility] = useState(false);

	const sectionRef = useRef();

	const profileToggleHandler = (e) => {
		e.stopPropagation();
		setProfilieVisibility((profileVisible) => !profileVisible);
		setCartVisibility(false);
	};

	const cartToggleHandler = (e) => {
		e.stopPropagation();
		setCartVisibility((cartVisible) => !cartVisible);
		setProfilieVisibility(false);
	};

	const handleClickOutside = (event) => {
		if (!sectionRef?.current?.contains(event.target)) {
			setProfilieVisibility(false);
			setCartVisibility(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
	}, [sectionRef]);

	return (
		<>
			<AnimatePresence>
				{showMenu && (
					<motion.section
						className={styles.menuSection}
						variants={menuVariant}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<div className={styles.menuHead}>
							<button
								className={styles.buttonContainer}
								onClick={() => setShowMenu(false)}
							>
								<MenuIcon className={styles.menuIcon} />
							</button>
							<div className={styles.rightIcons}>
								<button
									className={styles.profileIconContainer}
									onClick={profileToggleHandler}
								>
									<ProfileNavbar	
										className={`${styles.profileLogo} ${
											profileVisibility && styles.profileLogoActive
										} `}
									/>
								</button>
								<button
									className={styles.cartIconContainer}
									onClick={cartToggleHandler}
								>
									<CartNavbar
										setCartActive={setCartVisibility}
										className={`${cartVisibility && styles.cartLogoActive} ${
											styles.cartLogo
										}`}
									/>
								</button>

								{profileVisibility && (
									<Profile
										className={styles.profileMenuSection}
										ref={sectionRef}
										name={name}
									/>
								)}
								{cartVisibility && (
									<Cart className={styles.cartMenuSection} ref={sectionRef} />
								)}
							</div>
						</div>
						<ul className={styles.navOptionsContainer}>
							<li className="border-t border-secondary-default">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									Home
								</NavLink>
							</li>
							<li className="border-t border-secondary-default">
								<NavLink
									to="/shop"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									Shop
								</NavLink>
							</li>
							{/* <li className="border-t border-secondary-default">
								<NavLink
									to="/buildpc"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									Build your PC
								</NavLink>
							</li>
							<li className="border-t border-secondary-default">
								<NavLink
									to="/forum"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									Forum
								</NavLink>
							</li>
							<li className="border-t border-secondary-default">
								<NavLink
									to="/tech101"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									Tech101
								</NavLink>
							</li>
							<li className="border-t border-secondary-default">
								<NavLink
									to="/repair"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									Repair
								</NavLink>
							</li> */}
							<li className="border-t border-b border-secondary-default">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										isActive ? styles.active : styles.inactive
									}
								>
									About Us
								</NavLink>
							</li>
						</ul>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};

export default Menu;
