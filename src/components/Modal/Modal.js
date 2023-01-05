import { Link } from "react-router-dom";
import { CircleCheck, InformationModal } from "../../assets/icons";
import styles from "./Modal.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const backdropVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.2,
		},
	},
};

const modalVariant = {
	initial: {
		y: "-100vh",
		opacity: 0,
	},
	animate: {
		y: 40,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const Modal = ({
	showModal, // all
	setShowModal, // all
	type, // all
	symbol, // success, information
	link, // REDIRECT Type - link
	input, // INPUT Type - type of input (text, email, tel)
	value, // INPUT Type - variable of useState
	setValue, // INPUT Type - function of useState
	submitHandler, // Input Type - submit
	children, // all [h1, p]
}) => {
	let headingContent = null;
	let subContent = null;
	let errorContent = null;

	children.map((child) => {
		switch (child.type) {
			case "h1":
				return (headingContent = child.props.children);
			case "p":
				return (subContent = child.props.children);
			case "span":
				return (errorContent = child.props.children);
			default:
				return child;
		}
	});

	const closeModal = (e) => {
		setShowModal(false);
	};

	// dynamic div using switch
	const ContentDiv = () => {
		switch (type) {
			case "redirect":
				return (
					<Link to={link}>
						<button>Proceed</button>
					</Link>
				);
			case "input":
				return (
					<form className={styles.formModal} onSubmit={submitHandler}>
						<input
							autoFocus="autoFocus"
							type={input}
							placeholder={input.charAt(0).toUpperCase() + input.slice(1)}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<span className={styles.errorContent}>{errorContent}</span>
						<div className={styles.buttonContainer}>
							<button type="button" onClick={closeModal}>
								Cancel
							</button>
							<button type="submit">Proceed</button>
						</div>
					</form>
				);
			default:
				<button onClick={closeModal}>Proceed</button>;
		}
	};

	const ModalIcon = () => {
		switch (symbol) {
			case "success":
				return <CircleCheck className={styles.check} />;
			case "information":
				return <InformationModal className={styles.information} />;
			default:
				return;
		}
	};

	return (
		<>
			<AnimatePresence mode="wait">
				{showModal && (
					<section
						className={styles.modalContainer}
						data-backdrop="static"
						data-keyboard="false"
					>
						<motion.div
							className={styles.backdrop}
							onClick={(e) => {
								if (type !== "redirect") {
									setShowModal(false);
								}
							}}
							variants={backdropVariant}
							initial="initial"
							animate="animate"
							exit="initial"
						>
							<motion.div
								className={styles.modal}
								onClick={(e) => e.stopPropagation()}
								variants={modalVariant}
							>
								<ModalIcon />
								<div>
									{headingContent && <h1>{headingContent}</h1>}
									{subContent && <p>{subContent}</p>}
								</div>
								<ContentDiv />
							</motion.div>
						</motion.div>
					</section>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
