import { NavLink, Outlet } from "react-router-dom";
import {
	BuildIcon1,
	CartIcon,
	OrderIcon,
	ProfileIcon,
	SavedIcon,
	SettingIcon,
	ShopIcon,
	TechnicianIcon,
} from "../../../assets/icons";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<>
			<nav className={styles.profileNavbarContainer}>
				<ul className={styles.profileNavbar}>
					<li>
						<NavLink
							to="/profile/"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>My Profile</span>
							<ProfileIcon className={styles.profileIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/profile/shop"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>My Shop</span>
							<ShopIcon className={styles.shopIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							to="/profile/technician"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>Technician Dashboard</span>
							<TechnicianIcon className={styles.technicianIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li> */}
					<li>
						<NavLink
							to="/profile/cart"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>Cart</span>
							<CartIcon className={styles.cartIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							to="/profile/builds"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>Builds</span>
							<BuildIcon1 className={styles.buildIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li> */}
					{/* <li>
						<NavLink
							to="/profile/saved"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>Saved</span>
							<SavedIcon className={styles.savedIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li> */}
					<li>
						<NavLink
							to="/profile/orders"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>My Orders</span>
							<OrderIcon className={styles.orderIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/profile/settings"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							<span>Settings</span>
							<SettingIcon className={styles.settingIcon} />
							<hr className={styles.indicator} />
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
