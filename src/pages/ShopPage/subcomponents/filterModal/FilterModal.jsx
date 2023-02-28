import { useState } from "react";
import { ArrowNavigation } from "../../../../assets/icons";
import styles from "./FilterModal.module.scss";
import {
	PC_ESSENTIALS,
	EXPANSION_CARDS,
	PERIPHERALS,
	ACCESSORIES_OTHERS,
} from "../../../../constants";
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
	exit: {
		opacity: 0,
		transition: {
			duration: 0.1,
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
			duration: 0.4,
		},
	},
	exit: {
		y: "-100vh",
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.4,
		},
	},
};

const rightVariant = {
	initial: {
		x: "-20px",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.4,
		},
	},
	exit: {
		x: "20px",
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.4,
		},
	},
};

const leftVariant = {
	initial: {
		x: "20px",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.4,
		},
	},
	exit: {
		x: "-20px",
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.4,
		},
	},
};

const FilterModal = ({
	showFilter,
	setShowFilter,
	selectedFilter,
	setSelectedFilter,
}) => {
	const [page, setPage] = useState(1);
	const [listVariant, setListVariant] = useState(null);
	const [heading, setHeading] = useState("PC Essentials");

	const nextHandler = () => {
		page === 4 ? setPage(1) : setPage(page + 1);
		setListVariant(rightVariant);
	};

	const prevHandler = () => {
		page === 1 ? setPage(4) : setPage(page - 1);
		setListVariant(leftVariant);
	};

	// content lists
	const ModalContent = () => {
		switch (page) {
			case 1:
				setHeading("PC Essentials");
				return (
					<ul>
						{PC_ESSENTIALS.map((category, index) => {
							return (
								<li
									key={index}
									onClick={(e) => {
										!selectedFilter.includes(category)
											? setSelectedFilter([...selectedFilter, category])
											: setSelectedFilter(
													selectedFilter.filter((filter) => filter !== category)
											  );
									}}
									className={
										selectedFilter.includes(category)
											? "text-secondary-default font-bold"
											: null
									}
								>
									{category}
								</li>
							);
						})}
					</ul>
				);
			case 2:
				setHeading("Expansion Cards");
				return (
					<ul >
						{EXPANSION_CARDS.map((category, index) => {
							return (
								<li
									key={index}
									onClick={(e) => {
										!selectedFilter.includes(category)
											? setSelectedFilter([...selectedFilter, category])
											: setSelectedFilter(
													selectedFilter.filter((filter) => filter !== category)
											  );
									}}
									className={
										selectedFilter.includes(category)
											? "text-secondary-default font-bold"
											: null
									}
								>
									{category}
								</li>
							);
						})}
					</ul>
				);
			case 3:
				setHeading("Peripherals")
				return (
					<ul >
						{PERIPHERALS.map((category, index) => {
							return (
								<li
									key={index}
									onClick={(e) => {
										!selectedFilter.includes(category)
											? setSelectedFilter([...selectedFilter, category])
											: setSelectedFilter(
													selectedFilter.filter((filter) => filter !== category)
											  );
									}}
									className={
										selectedFilter.includes(category)
											? "text-secondary-default font-bold"
											: null
									}
								>
									{category}
								</li>
							);
						})}
					</ul>
				);
			case 4:
				setHeading("Accessories/Others")
				return (
					<ul >
						{ACCESSORIES_OTHERS.map((category, index) => {
							return (
								<li
									key={index}
									onClick={(e) => {
										!selectedFilter.includes(category)
											? setSelectedFilter([...selectedFilter, category])
											: setSelectedFilter(
													selectedFilter.filter((filter) => filter !== category)
											  );
									}}
									className={
										selectedFilter.includes(category)
											? "text-secondary-default font-bold"
											: null
									}
								>
									{category}
								</li>
							);
						})}
					</ul>
				);
			default:
				return;
		}
	};

	// main
	return (
		<>
			<AnimatePresence>
				{showFilter && (
					<section className={styles.modalFilterContainer}>
						<motion.div
							className={styles.backdrop}
							onClick={(e) => {
								setShowFilter(false);
							}}
							variants={backdropVariant}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<motion.div
								className={styles.modal}
								onClick={(e) => e.stopPropagation()}
								variants={modalVariant}
							>
								<div className={styles.modalHeading}>
									<h2>FILTER BY CATEGORY</h2>
									<p>{heading}</p>
								</div>
								<hr />
								<div className={styles.modalContent}>
									<ModalContent />
								</div>
								{page !== 4 && (
									<button onClick={nextHandler}>
										<ArrowNavigation className={styles.rightArrow} />
									</button>
								)}
								{page !== 1 && (
									<button onClick={prevHandler}>
										<ArrowNavigation className={styles.leftArrow} />
									</button>
								)}
							</motion.div>
						</motion.div>
					</section>
				)}
			</AnimatePresence>
		</>
	);
};

export default FilterModal;
