import { useEffect, useRef, useState } from "react";
import styles from "./ProductModal.module.scss";
import { AddIcon } from "../../../../../../../assets/icons";
import Toast from "../../../../../../../components/Toast";
import {
	ACCESSORIES_OTHERS,
	EXPANSION_CARDS,
	PC_ESSENTIALS,
	PERIPHERALS,
	DEFAULT_SPECIFICATION_DETAILS,
} from "../../../../../../../constants";
import InputSpecification from "./InputSpecifications";
import { AnimatePresence, motion } from "framer-motion";
import {
	caseAccessoriesError,
	caseFanError,
	casingError,
	cpuCoolerError,
	cpuError,
	detailsErrorHandling,
	errorToastHandler,
	externalStorageError,
	fanControllerError,
	headphoneError,
	keyboardError,
	memoryError,
	miceError,
	monitorError,
	motherboardError,
	operatingSystemError,
	opticalDriveError,
	powerSupplyError,
	soundCardError,
	speakerError,
	storageError,
	thermalCompoundError,
	upsError,
	videoCardError,
	webcamError,
	wiredNetworkAdapterError,
	wirelessNetwokAdapterError,
} from "./errorHandling";

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
			duration: 0.2,
		},
	},
};

const modalVariant = {
	initial: {
		y: "-20vh",
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
	exit: {
		y: "-20vh",
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.2,
		},
	},
};

const ProductModal = ({ type, showModal, setShowModal, id }) => {
	const [page, setPage] = useState(1);

	const [toast, showToast] = useState(false);
	const [toastParams, setToastParams] = useState({
		type: "default",
		symbol: null,
		title: null,
		subtitle: "",
	});

	const [productDetails, setProductDetails] = useState({
		category: "",
		itemName: "",
		model: "",
		brand: "",
		description: "",
		price: "",
		stock: "",
	});

	const [images, setImages] = useState([]);

	const [categInform, setCategInform] = useState(false);
	const [detailsError, setDetailsError] = useState({});
	const [specificationError, setSpecificationError] = useState({});

	const [specification, setSpecification] = useState();

	useEffect(() => {
		switch (productDetails.category) {
			case "CPU":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CPU });
			case "CPU Cooler":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CPU_COOLER });
			case "Motherboard":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MOTHERBOARD });
			case "Memory":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MEMORY });
			case "Storage":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.STORAGE });
			case "Video Card":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.VIDEO_CARD });
			case "Case":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CASING });
			case "Power Supply":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.POWER_SUPPLY });
			case "OS":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.OPERATING_SYSTEM });
			case "Monitor":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MONITOR });
			case "Sound Cards":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.SOUND_CARD });
			case "Wired Network Adapters":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.WIRED_NETWORK_ADAPTER });
			case "Wireless Network Adapters":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.WIRELESS_NETWORK_ADAPTER });
			case "Headphones":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.HEADPHONE });
			case "Keyboards":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.KEYBOARD });
			case "Mice":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MICE });
			case "Speakers":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.SPEAKER });
			case "Webcams":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.WEBCAM });
			case "Case Accessories":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CASE_ACCESSORIES });
			case "Case Fans":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CASE_FAN });
			case "Fan Controllers":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.FAN_CONTROLLER });
			case "Thermal Compound":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.THERMAL_COMPOUND });
			case "External Storage":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.EXTERNAL_STORAGE });
			case "Optical Drive":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.OPTICAL_DRIVE });
			case "UPS Systems":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.UPS });
			default:
				return;
		}
	}, [productDetails.category]);


	const [primaryImage, setPrimaryImage] = useState(null);
	const [subImage1, setSubImage1] = useState(null);
	const [subImage2, setSubImage2] = useState(null);
	const [subImage3, setSubImage3] = useState(null);
	const [subImage4, setSubImage4] = useState(null);

	const mainPhoto = useRef();
	const subImageRef1 = useRef();
	const subImageRef2 = useRef();
	const subImageRef3 = useRef();
	const subImageRef4 = useRef();

	const modalRef = useRef();

	useEffect(() => {
		if (modalRef.current) {
			modalRef.current.scrollTop = 0;
		}
	}, [page, modalRef, categInform, specificationError]);

	const errorHandler = (
		specificationErrorContainer,
		specificationErrorMsgArray
	) => {
		switch (productDetails.category) {
			case "CPU":
				return cpuError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "CPU Cooler":
				return cpuCoolerError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Motherboard":
				return motherboardError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Memory":
				return memoryError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Storage":
				return storageError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Video Card":
				return videoCardError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Case":
				return casingError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Power Supply":
				return powerSupplyError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "OS":
				return operatingSystemError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Monitor":
				return monitorError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Sound Cards":
				return soundCardError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Wired Network Adapters":
				return wiredNetworkAdapterError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Wireless Network Adapters":
				return wirelessNetwokAdapterError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Headphones":
				return headphoneError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Keyboards":
				return keyboardError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Mice":
				return miceError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Speakers":
				return speakerError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Webcams":
				return webcamError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Case Accessories":
				return caseAccessoriesError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Case Fans":
				return caseFanError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Fan Controllers":
				return fanControllerError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Thermal Compound":
				return thermalCompoundError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "External Storage":
				return externalStorageError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "Optical Drive":
				return opticalDriveError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			case "UPS Systems":
				return upsError(
					specification,
					specificationErrorContainer,
					specificationErrorMsgArray
				);
			default:
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();

		let detailsErrorContainer = {};
		let detailsErrorMsgArray = [];

		let specificationErrorContainer = {};
		let specificationErrorMsgArray = [];

		// set boolean to all fields first
		if (!mainPhoto.current.files[0]) {
			detailsErrorContainer.image = true;
			detailsErrorMsgArray.push("Main Product Image");
		}

		// from Functions that assigns message and boolean values
		// to the initialized array and object respectively
		detailsErrorHandling(
			productDetails,
			detailsErrorContainer,
			detailsErrorMsgArray
		);

		if (detailsErrorMsgArray.length > 0) {
			errorToastHandler(
				detailsErrorContainer,
				detailsErrorMsgArray,
				showToast,
				toastParams,
				setToastParams
			);
			setPage(1);
		} else {
			errorHandler(specificationErrorContainer, specificationErrorMsgArray);

			if (productDetails.category) {
				setSpecificationError({ ...specificationErrorContainer });
			}

			errorToastHandler(
				specificationErrorContainer,
				specificationErrorMsgArray,
				showToast,
				toastParams,
				setToastParams
			);
		}

		// update the state to the number of errors per pag from first page
		setDetailsError({ ...detailsErrorContainer });

		setImages([
			mainPhoto.current.files[0]?.name,
			subImageRef1.current.files[0]?.name,
			subImageRef2.current.files[0]?.name,
			subImageRef3.current.files[0]?.name,
			subImageRef4.current.files[0]?.name,
		]);

		// console.log(images);
		// console.log("itemName", itemName);
		// console.log("model", model);
		// console.log("brand", brand);
		// console.log("description", description);
		// console.log("category", category);
		// console.log("price", price);
		// console.log("stock", stock);

		// console.table(CPU);
	};

	return (
		<>
			<Toast
				showToast={toast}
				setShowToast={showToast}
				type={toastParams.type}
				symbol={toastParams.symbol}
				title={toastParams.title}
				subtitle={toastParams.subtitle}
			/>
			<AnimatePresence>
				{showModal && (
					<section className={styles.modalSection}>
						<motion.div
							className={styles.backdrop}
							onClick={() => setShowModal(false)}
							variants={backdropVariant}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<motion.div
								ref={modalRef}
								className={styles.modalContainer}
								onClick={(e) => e.stopPropagation()}
								variants={modalVariant}
							>
								<div className={styles.titleContainer}>
									<h1>{type === "add" ? "Add Item" : "Edit Item"}</h1>
								</div>
								<form className={styles.formContainer}>
									<div className={styles.picturesColumn}>
										<button
											type="button"
											className={`${styles.mainPhoto} ${
												detailsError.image ? styles.errorClass : null
											}`}
											onClick={() => mainPhoto.current.click()}
										>
											{primaryImage ? (
												<img
													src={URL.createObjectURL(primaryImage)}
													alt="Main Product"
												/>
											) : (
												<AddIcon className={styles.mainAddPhoto} />
											)}
										</button>

										<div className={styles.imageContainers}>
											<button
												className={styles.photoBtn}
												type="button"
												onClick={() => subImageRef1.current.click()}
											>
												{subImage1 ? (
													<img
														src={URL.createObjectURL(subImage1)}
														alt="Subproduct 1"
													/>
												) : (
													<AddIcon className={styles.mainAddPhoto} />
												)}
											</button>
											<button
												type="button"
												className={styles.photoBtn}
												onClick={() => subImageRef2.current.click()}
											>
												{subImage2 ? (
													<img
														src={URL.createObjectURL(subImage2)}
														alt="Subproduct 2"
													/>
												) : (
													<AddIcon className={styles.mainAddPhoto} />
												)}
											</button>
											<button
												type="button"
												className={styles.photoBtn}
												onClick={() => subImageRef3.current.click()}
											>
												{subImage3 ? (
													<img
														src={URL.createObjectURL(subImage3)}
														alt="Subproduct 3"
													/>
												) : (
													<AddIcon className={styles.mainAddPhoto} />
												)}
											</button>
											<button
												type="button"
												className={styles.photoBtn}
												onClick={() => subImageRef4.current.click()}
											>
												{subImage4 ? (
													<img
														src={URL.createObjectURL(subImage4)}
														alt="Subproduct 4"
													/>
												) : (
													<AddIcon className={styles.mainAddPhoto} />
												)}
											</button>
										</div>
										{/* input file images */}
										<div>
											<input
												type="file"
												accept="image/*"
												ref={mainPhoto}
												onChange={(e) => setPrimaryImage(e.target.files[0])}
												hidden
											/>
											<input
												type="file"
												accept="image/*"
												ref={subImageRef1}
												onChange={(e) => setSubImage1(e.target.files[0])}
												hidden
											/>
											<input
												type="file"
												accept="image/*"
												ref={subImageRef2}
												onChange={(e) => setSubImage2(e.target.files[0])}
												hidden
											/>
											<input
												type="file"
												accept="image/*"
												ref={subImageRef3}
												onChange={(e) => setSubImage3(e.target.files[0])}
												hidden
											/>
											<input
												type="file"
												accept="image/*"
												ref={subImageRef4}
												onChange={(e) => setSubImage4(e.target.files[0])}
												hidden
											/>
										</div>
									</div>

									<div className={styles.formColumn}>
										<div className={styles.formContent}>
											{page === 1 ? (
												<>
													<label htmlFor="category">Category: </label>
													<select
														id="category"
														value={productDetails.category}
														className={`${styles.mediumSelect} ${
															categInform ? styles.informClass : null
														}`}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																category: e.target.value,
															})
														}
													>
														<option value="" className="hidden">
															Category
														</option>

														{PC_ESSENTIALS.map((categ) => (
															<option value={categ}>{categ}</option>
														))}
														{EXPANSION_CARDS.map((categ) => (
															<option value={categ}>{categ}</option>
														))}
														{PERIPHERALS.map((categ) => (
															<option value={categ}>{categ}</option>
														))}
														{ACCESSORIES_OTHERS.map((categ) => (
															<option value={categ}>{categ}</option>
														))}
													</select>
													<label htmlFor="name">Item Name: </label>
													<input
														type="text"
														id="name"
														placeholder="Name"
														value={productDetails.itemName}
														className={`${
															detailsError.itemName ? styles.errorClass : null
														}`}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																itemName: e.target.value,
															})
														}
														// required
													/>
													<label htmlFor="model">Model: </label>
													<input
														type="text"
														id="model"
														placeholder="Product Model"
														className={`${
															detailsError.model ? styles.errorClass : null
														}`}
														value={productDetails.model}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																model: e.target.value,
															})
														}
														// required
													/>
													<label htmlFor="brand">Brand: </label>
													<input
														type="text"
														id="brand"
														placeholder="Product Brand"
														className={`${
															detailsError.brand ? styles.errorClass : null
														}`}
														value={productDetails.brand}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																brand: e.target.value,
															})
														}
														// required
													/>
													<label htmlFor="description">Description: </label>
													<textarea
														id="description"
														placeholder="Add Description"
														rows={4}
														className={`${
															detailsError.description
																? styles.errorClass
																: null
														}`}
														value={productDetails.description}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																description: e.target.value,
															})
														}
														// required
													/>
													<label htmlFor="price">Item Price: </label>
													<input
														type="number"
														id="price"
														placeholder="0"
														step="0.01"
														min={0}
														className={`${styles.smallNumberNoArrows} ${
															detailsError.stock ? styles.errorClass : null
														}`}
														value={productDetails.price}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																price: e.target.value,
															})
														}
													/>
													<label htmlFor="stocks">Stocks: </label>
													<input
														type="number"
														id="stocks"
														placeholder="0"
														min={0}
														className={`${styles.smallNumberNoArrows} ${
															detailsError.stock ? styles.errorClass : null
														}`}
														value={productDetails.stock}
														onChange={(e) =>
															setProductDetails({
																...productDetails,
																stock: e.target.value,
															})
														}
													/>
												</>
											) : (
												<InputSpecification
													category={productDetails.category}
													specification={specification}
													setSpecification={setSpecification}
													specificationError={specificationError}
												/>
											)}
										</div>
									</div>
									<div className={styles.submitContainer}>
										{page === 1 ? (
											<div></div>
										) : (
											<button
												type="button"
												className={styles.submit}
												onClick={() => setPage((value) => value - 1)}
											>
												Product Details
											</button>
										)}

										{page === 1 ? (
											<button
												type="button"
												className={styles.submit}
												onClick={() => {
													if (productDetails.category === "") {
														setCategInform(true);
														showToast(true);
														setToastParams({
															...toastParams,
															symbol: "inform",
															title: "Category Field Required",
															subtitle:
																"Please select an appropriate category before proceeding",
														});
													} else {
														setCategInform(false);
														setPage((value) => value + 1);
													}
												}}
											>
												Product Specification
											</button>
										) : (
											<button
												type="button"
												onClick={submitHandler}
												className={styles.submit}
											>
												Save Product
											</button>
										)}
									</div>
								</form>
							</motion.div>
						</motion.div>
					</section>
				)}
			</AnimatePresence>
		</>
	);
};

export default ProductModal;
