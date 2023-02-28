import { useEffect, useRef, useState } from "react";
import styles from "./ProductModal.module.scss";
import { AddIcon } from "../../../../../../../assets/icons";
import Toast from "../../../../../../../components/Toast";
import {
	EXPANSION_CARDS,
	PC_ESSENTIALS,
	PERIPHERALS,
} from "../../../../../../../constants";
import InputSpecification from "./InputSpecifications";
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

const ProductModal = ({type, showModal, setShowModal, id}) => {
	const [page, setPage] = useState(1);

	const [toast, showToast] = useState(false);
	const [toastParams, setToastParams] = useState({
		type: "default",
		symbol: null,
		title: null,
		subtitle: "",
	});

	const [itemName, setItemName] = useState(null);
	const [model, setModel] = useState(null);
	const [brand, setBrand] = useState(null);
	const [description, setDescription] = useState(null);
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState(null);
	const [stock, setStock] = useState(null);

	const [images, setImages] = useState([]);

	const [CPUSpecification, setCPUSpecification] = useState({
		manufacturer: "amd",
		core: null,
		coreClock: null,
		boostClock: null,
		tdp: null,
		series: null,
		microArchitecture: null,
		coreFamily: null,
		socket: null,
		integratedGraphics: null,
		maxSupportedMemory: null,
		eccSupport: "true",
		includeCooler: "true",
		packaging: null,
		l1Cache: null,
		l2Cache: null,
		l3Cache: null,
		lithography: null,
		includeCPUCooler: "true",
		multithreading: "false",
		typeOfMultithreading: null,
	});
	const [CPUCoolerSpecification, setCPUCoolerSpecification] = useState({
		manufacturer: null,
		model: null,
		fanRPM: null,
		noiseLevel: null,
		color: null,
		height: null,
		cpuSocket: null,
		waterCooled: "false",
		fanless: "false",
	});
	const [motherboardSpecification, setMotherboardSpecification] = useState({
		manufacturer: null,
		socketCpu: null,
		formFactor: null,
		chipset: null,
		maxMemory: null,
		memorySlots: null,
		memorySpeed: null,
		color: null,
		sliCrossfire: null,
		pci16: null,
		pci8: null,
		pci4: null,
		pci1: null,
		pci: null,
		m2Slots: null,
		miniPCIeSlots: null,
		halfMiniPCIeSlots: null,
		mSataSlots: null,
		sata6gb: null,
		onBoardEthernet: null,
		onBoardVideo: null,
		usb2Headers: null,
		singleUsb2Headers: null,
		usb3Gen1Headers: null,
		usb3Gen2Headers: null,
		usb3Gen2x2Headers: null,
		supportECC: "false",
		wirelessNetworking: null,
		raidSupport: "false",
	});
	const [memorySpecification, setMemorySpecification] = useState({
		manufacturer: null,
		memorySpeed: null,
		formFactor: null,
		modules: null,
		firstWordLatency: null,
		CASLatency: null,
		voltage: null,
		timing: null,
		eccRegistered: null,
		heatSpreader: "true",
	});
	const [storageSpecification, setStorageSpecification] = useState({
		manufacturer: null,
		capacity: null,
		type: null,
		cache: null,
		formFactor: null,
		interface: null,
		nvme: "true",
	});

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

	const submitHandler = (e) => {
		e.preventDefault();

		setImages([
			mainPhoto.current.files[0].name,
			subImageRef1.current.files[0].name,
			subImageRef2.current.files[0].name,
			subImageRef3.current.files[0].name,
			subImageRef4.current.files[0].name,
		]);

		console.log(images);
		console.log("itemName", itemName);
		console.log("model", model);
		console.log("brand", brand);
		console.log("description", description);
		console.log("category", category);
		console.log("price", price);
		console.log("stock", stock);

		console.table(CPUSpecification);
	};

	useEffect(()=> {
		// showModal && console.log(id);
	}, [type, showModal, id])

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
											className={styles.mainPhoto}
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
													<label htmlFor="name">Item Name: </label>
													<input
														type="text"
														id="name"
														placeholder="Name"
														value={itemName}
														onChange={(e) => setItemName(e.target.value)}
														required
													/>
													<label htmlFor="model">Model: </label>
													<input
														type="text"
														id="model"
														placeholder="Product Model"
														value={model}
														onChange={(e) => setModel(e.target.value)}
														required
													/>
													<label htmlFor="brand">Brand: </label>
													<input
														type="text"
														id="brand"
														placeholder="Product Brand"
														value={brand}
														onChange={(e) => setBrand(e.target.value)}
														required
													/>
													<label htmlFor="description">Description: </label>
													<textarea
														id="description"
														placeholder="Add Description"
														rows={4}
														value={description}
														onChange={(e) => setDescription(e.target.value)}
														required
													/>
													<label htmlFor="category">Category: </label>
													<select
														id="category"
														value={category}
														onChange={(e) => setCategory(e.target.value)}
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
													</select>
													<label htmlFor="price">Item Price: </label>
													<input
														type="number"
														id="price"
														placeholder="0"
														step="0.01"
														min={0}
														className={styles.smallNumberNoArrows}
														value={price}
														onChange={(e) => setPrice(e.target.value)}
														required
													/>
													<label htmlFor="stocks">Stocks: </label>
													<input
														type="number"
														id="stocks"
														placeholder="0"
														min={0}
														className={styles.smallNumberNoArrows}
														value={stock}
														onChange={(e) => setStock(e.target.value)}
														required
													/>
												</>
											) : (
												<InputSpecification
													category={category}
													CPUSpecification={CPUSpecification}
													setCPUSpecification={setCPUSpecification}
													CPUCoolerSpecification={CPUCoolerSpecification}
													setCPUCoolerSpecification={setCPUCoolerSpecification}
													motherboardSpecification={motherboardSpecification}
													setMotherboardSpecification={
														setMotherboardSpecification
													}
													memorySpecification={memorySpecification}
													setMemorySpecification={setMemorySpecification}
													storageSpecification={storageSpecification}
													setStorageSpecification={setStorageSpecification}
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
													if (category === "") {
														showToast(true);
														setToastParams({
															...toastParams,
															symbol: "inform",
															title: "Category Field Required",
															subtitle:
																"Please select an appropriate category before proceeding",
														});
													} else {
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
