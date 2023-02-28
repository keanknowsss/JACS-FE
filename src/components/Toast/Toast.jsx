import { CircleCheck, ErrorIcon, ExitIcon, InformationModal, WarningIcon } from "../../assets/icons";
import styles from "./Toast.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useLayoutEffect, useEffect } from "react";

const toastVariant = {
	initial: {
		opacity: 0,
		x: "50%",
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
			damping: 20,
			duration: 2,
			type: "spring",
		},
	},
	exit: {
		opacity: 0,
		x: "50%",
		transition: {
			ease: "easeOut",
			duration: 0.3,
			type: "tween",
		},
	},
};

const Toast = ({
	showToast, // toast toggle
	setShowToast, // toast toggle setstate
	type, // can be linkCallback, default
	symbol, // can be warning, success, error, inform
	title, // for h1
	subtitle, // for defaults
	callback, // for linkCallback
	linkText, // text for link
}) => {

	const [colorClass, setColorClass] = useState(null);

	const toastCloseHandler = () => {
		setShowToast(false);
	};

	// timer, also adjust in scss module
	// add this to component not changing showToast callback
	useEffect(() => {
		if(showToast) {
			setTimeout(() => {
				setShowToast(false);
			}, 3000);
		}
		
	}, [setShowToast, showToast]);

	const ToastIcon = () => {
		switch (symbol) {
			case "success":
				return <CircleCheck className={styles.success} />;
			case "warning":
				return <WarningIcon className={styles.warning} />;
			case "error":
				return <ErrorIcon className={styles.error} />
			case "inform":
				return <InformationModal className={styles.inform} />
			default:
				return;
		}
	};

	const ToastText = () => {
		switch (type) {
			case "linkCallback":
				return <button onClick={callback}>{linkText}</button>;
			default:
				return <p>{subtitle}</p>;
		}
	};

	useLayoutEffect(() => {
		switch (symbol) {
			case "success":
				setColorClass(styles.greenToast);
				break;
			case "warning":
				setColorClass(styles.yellowToast);
				break;
			case "error":
				setColorClass(styles.redToast);
				break;
			case "inform":
				setColorClass(styles.blueToast); 
				break;
			default:
				setColorClass(null);
				break;
		}
	}, [symbol]);

	return (
		<>
			<AnimatePresence>
				{showToast && (
					<motion.section
						key="toast"
						className={`${styles.toast} ${colorClass}`}
						variants={toastVariant}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<div className={styles.toastContent}>
							<ToastIcon />
							<div className={styles.toastText}>
								<h2 className="toastTitle">{title}</h2>
								<ToastText />
							</div>
						</div>
						<ExitIcon
							className={styles.exitToast}
							onClick={toastCloseHandler}
						/>
						<div className={`${styles.progress} ${styles.active}`}></div>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};

export default Toast;
