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
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../../features/slice/userAccessSlice";
import { getUser } from "../../../features/api/builders/userApi";
import Loading from "../../../components/Loading/Loading";

const Navbar = () => {
	const [isShop, setIsShop] = useState(false);
	const [loading, setIsLoading] = useState(true);

	const id = useSelector(selectCurrentUserId);

	const [getUserQuery] = getUser.useLazyQuery();

	useLayoutEffect(() => {
		const checkSeller = async () => {
			try {
				const { data, isLoading } = await getUserQuery(id);

				setIsShop(data.result.isSeller);

				setIsLoading(isLoading);
			} catch (error) {
				console.log("Check Seller Failed:", error);
			}
		};

		checkSeller();
	}, [id, getUserQuery]);

	return loading ? (
		<Loading />
	) : (
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
					{isShop && (
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
					)}

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
