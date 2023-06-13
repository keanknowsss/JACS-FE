import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./ProductModal.module.scss";
import { AddIcon } from "../../../../../../../assets/icons";
import Toast from "../../../../../../../components/Toast";
import { DEFAULT_SPECIFICATION_DETAILS } from "../../../../../../../constants";
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
	wirelessNetwokAdapterError
} from "./errorHandling";
import {
	getProduct,
	getProductSpecifications,
	useAddProductImagesMutation,
	useAddProductSpecificationsMutation,
	useUpdateProductMutation,
	useUpdateProductSpecificationsMutation
} from "../../../../../../../features/api/builders/productApi";
import Loading from "../../../../../../../components/Loading/Loading";

const backdropVariant = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.2
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2
		}
	}
};

const modalVariant = {
	initial: {
		y: "-20vh",
		opacity: 0
	},
	animate: {
		y: 40,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.5
		}
	},
	exit: {
		y: "-20vh",
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.2
		}
	}
};

const ProductModal = ({
	type,
	showModal,
	setShowModal,
	productId,
	itemUploadSuccessful,
	setItemUploadSuccessful
}) => {
	const [page, setPage] = useState(1);

	const [editLoading, setEditLoading] = useState(true);

	const [toast, showToast] = useState(false);
	const [toastParams, setToastParams] = useState({
		type: "default",
		symbol: null,
		title: null,
		subtitle: ""
	});

	const [productDetails, setProductDetails] = useState({
		category: "",
		itemName: "",
		// model: "",
		// brand: "",
		description: "",
		price: "",
		stock: ""
	});

	// Integration Hooks
	const [addProductImageQuery] = useAddProductImagesMutation();
	const [updateProductQuery] = useUpdateProductMutation();
	const [addProductSpecificationQuery] = useAddProductSpecificationsMutation();
	const [getProductQuery] = getProduct.useLazyQuery();
	const [getProductSpecificationQuery] = getProductSpecifications.useLazyQuery();
	const [updateProductSpecificationQuery] = useUpdateProductSpecificationsMutation();

	const [categInform, setCategInform] = useState(false);
	const [detailsError, setDetailsError] = useState({});
	const [specificationError, setSpecificationError] = useState({});

	const [specification, setSpecification] = useState();
	const [uploadedSpecification, setUploadedSpecification] = useState();

	// ASSIGNS DEFAULT VALUES PER CATEGORY
	useEffect(() => {
		switch (productDetails.category) {
			case "CPU":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CPU });
			case "CPU_COOLER":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.CPU_COOLER
				});
			case "MOTHERBOARD":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.MOTHERBOARD
				});
			case "MEMORY":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MEMORY });
			case "STORAGE":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.STORAGE });
			case "VIDEO_CARD":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.VIDEO_CARD
				});
			case "CASE":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CASING });
			case "POWER_SUPPLY":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.POWER_SUPPLY
				});
			case "OS":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.OPERATING_SYSTEM
				});
			case "MONITOR":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MONITOR });
			case "SOUND_CARD":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.SOUND_CARD
				});
			case "WIRED_NETWORK_ADAPTER":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.WIRED_NETWORK_ADAPTER
				});
			case "WIRELESS_NETWORK_ADAPTER":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.WIRELESS_NETWORK_ADAPTER
				});
			case "HEADPHONES":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.HEADPHONE });
			case "KEYBOARD":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.KEYBOARD });
			case "MOUSE":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.MICE });
			case "SPEAKER":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.SPEAKER });
			case "WEBCAM":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.WEBCAM });
			case "CASE_ACCESSORY":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.CASE_ACCESSORIES
				});
			case "CASE_FAN":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.CASE_FAN });
			case "FAN_CONTROLLER":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.FAN_CONTROLLER
				});
			case "THERMAL_COMPOUND":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.THERMAL_COMPOUND
				});
			case "EXTERNAL_STORAGE":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.EXTERNAL_STORAGE
				});
			case "OPTICAL_DRIVE":
				return setSpecification({
					...DEFAULT_SPECIFICATION_DETAILS.OPTICAL_DRIVE
				});
			case "UPS":
				return setSpecification({ ...DEFAULT_SPECIFICATION_DETAILS.UPS });
			default:
				return;
		}
	}, [productDetails.category]);

	const [primaryImage, setPrimaryImage] = useState(null);

	const mainPhoto = useRef();
	// const subImageRef1 = useRef();
	// const subImageRef2 = useRef();
	// const subImageRef3 = useRef();
	// const subImageRef4 = useRef();

	const modalRef = useRef();

	useEffect(() => {
		if (modalRef.current) {
			modalRef.current.scrollTop = 0;
		}
	}, [page, modalRef, categInform, specificationError]);

	const errorHandler = (specificationErrorContainer, specificationErrorMsgArray) => {
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

		// from Functions that assigns message and boolean values
		// to the initialized array and object respectively
		detailsErrorHandling(productDetails, detailsErrorContainer, detailsErrorMsgArray);

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

		if (detailsErrorMsgArray.length <= 0 && specificationErrorMsgArray.length <= 0) {
			submitProduct();
			setItemUploadSuccessful(true);
			setPage(1);
			setProductDetails({
				category: "",
				itemName: "",
				model: "",
				brand: "",
				description: "",
				price: "",
				stock: ""
			});
			setSpecification();
			setShowModal(false);
		}
	};

	// Functions
	const mainPhotoHandler = async (e) => {
		const images = e.target.files[0];
		setPrimaryImage(URL.createObjectURL(images));

		try {
			const uploadedImage = await addProductImageQuery({
				productId,
				images
			}).unwrap();

			const body = [uploadedImage.result[0].publicUrl];
			setPrimaryImage(body[0]);

			await updateProductQuery({
				id: productId,
				body
			}).unwrap();
		} catch (error) {
			console.log("Image Upload Error", error);
		}
	};

	const submitProduct = async () => {
		const productBody = {
			name: productDetails.itemName,
			description: productDetails.description,
			category: productDetails.category,
			price: productDetails.price,
			img: [primaryImage],
			stock: productDetails.stock
		};
		setUploadedSpecification(true);
		setShowModal(false);
		try {
			await updateProductQuery({
				id: productId,
				body: productBody
			}).unwrap();

			if (type === "add") {
				addProductSpecification(productDetails.category);
			} else if (type === "edit") {
				editProductSpecification(productDetails.category);
			}
			console.log(detailsError, specificationError);
		} catch (error) {
			console.log("Update Product Error", error);
		}
	};

	const addProductSpecification = async (productCategory) => {
		try {
			await addProductSpecificationQuery({
				productId,
				specification
			}).unwrap();
			window.location.reload();
		} catch (error) {
			console.log("Update Specification Error", error);
		}
	};

	const editProductSpecification = async (productCategory) => {
		try {
			await updateProductSpecificationQuery({
				productId,
				specification: uploadedSpecification
			}).unwrap();

			window.location.reload();
		} catch (error) {
			console.log("Update Specification Error", error);
		}
	};

	const closeModal = () => {
		setProductDetails({
			category: "",
			itemName: "",
			model: "",
			brand: "",
			description: "",
			price: "",
			stock: ""
		});
		setSpecification();
		setPage(1);
		setShowModal(false);
	};

	const fillSpecificationDetails = (category, item) => {
		switch (category) {
			case "CPU":
				return setUploadedSpecification({
					manufacturer: item.manufacturer.toLowerCase(),
					core: item.core,
					performanceCoreClock: item.performanceCoreClock,
					performanceBoostClock: item.performanceBoostClock,
					TDP: item.TDP,
					series: item.series,
					microArchitechture: item.microArchitechture,
					coreFamily: item.coreFamily,
					socket: item.socket,
					integratedGraphics: item.integratedGraphics,
					maxSupportedMemory: item.maxSupportedMemory,
					eccSupport: item.eccSupport.toString(),
					includesCooler: item.includesCooler.toString(),
					packaging: item.packaging,
					l1Cache: item.l1Cache.join(", "),
					l2Cache: item.l2Cache.join(", "),
					l3Cache: item.l3Cache.join(", "),
					lithography: item.lithography,
					includesCPUCooler: item.includesCPUCooler.toString(),
					multithreading: item.multithreading.toString(),
					typeOfMultithreading: item.typeOfMultithreading
				});
			case "CPU_COOLER":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					fanRPM: item.fanRPM.join(", "),
					noiseLevel: item.noiseLevel.join(", "),
					color: item.color.join(", "),
					height: item.height,
					cpuSocket: item.cpuSocket.join(", "),
					waterCooled: item.waterCooled.toString(),
					fanless: item.fanless.toString()
				});
			case "MOTHERBOARD":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					socketCpu: item.socketCpu,
					formFactor: item.formFactor,
					chipset: item.chipset,
					maxMemory: item.maxMemory,
					memoryType: item.memoryType,
					memorySlots: item.memorySlots,
					memorySpeed: item.memorySpeed.join(", "),
					color: item.color.join(", "),
					sliCrossfire: item.sliCrossfire,
					pci16Slots: item.pci16Slots,
					pci8Slots: item.pci8Slots,
					pci4Slots: item.pci4Slots,
					pci1Slots: item.pci1Slots,
					pciSlots: item.pciSlots,
					m2Slots: item.m2Slots.join(", "),
					miniPCIeSlots: item.miniPCIeSlots,
					halfMiniPCIeSlots: item.halfMiniPCIeSlots,
					miniPCIe_mSATASlots: item.miniPCIe_mSATASlots,
					mSataSlots: item.mSataSlots,
					sata6Gb: item.sata6Gb,
					onboardEthernet: item.onboardEthernet,
					onboardVideo: item.onboardVideo,
					usb2Headers: item.usb2Headers,
					singleUsb2Headers: item.singleUsb2Headers,
					usb3_2Gen1Headers: item.usb3_2Gen1Headers,
					usb3_2Gen2Headers: item.usb3_2Gen2Headers,
					usb3_2Gen2x2Headers: item.usb3_2Gen2x2Headers,
					supportsECC: item.supportsECC.toString(),
					wirelessNetworking: item.wirelessNetworking,
					raidSupport: item.raidSupport.toString()
				});
			case "MEMORY":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					speed: item.speed,
					formFactor: item.formFactor,
					modules: item.modules,
					color: item.color.join(", "),
					firstWordLatency: item.firstWordLatency,
					CASLatency: item.CASLatency,
					voltage: item.voltage,
					timing: item.timing,
					ecc_Registered: item.ecc_Registered,
					heatSpreader: item.heatSpreader.toString()
				});
			case "STORAGE":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					capacity: item.capacity,
					type: item.type,
					cache: item.cache,
					formFactor: item.formFactor,
					interface: item.interface,
					nvme: item.nvme.toString()
				});
			case "VIDEO_CARD":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					chipset: item.chipset,
					memory: item.memory,
					memoryType: item.memoryType,
					coreClock: item.coreClock,
					boostClock: item.boostClock,
					effectiveMemoryClock: item.effectiveMemoryClock,
					interface: item.interface,
					color: item.color.join(", "),
					frameSync: item.frameSync,
					length: item.length,
					TDP: item.TDP,
					caseExpansionSlotWidth: item.caseExpansionSlotWidth,
					totalSlotWidth: item.totalSlotWidth,
					cooling: item.cooling,
					externalPower: item.externalPower,
					dviOutputs: item.dviOutputs,
					hdmiOutputs: item.hdmiOutputs,
					displayPortOutputs: item.displayPortOutputs
				});
			case "CASE":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					type: item.type,
					color: item.color.join(", "),
					powerSupply: item.powerSupply,
					sidePanel: item.sidePanel,
					powerSupplyShroud: item.powerSupplyShroud.toString(),
					frontPanelUSB: item.frontPanelUSB,
					motherboardFormFactor: item.motherboardFormFactor,
					maxLength: item.maxLength,
					driveBays: item.driveBays,
					expansionSlots: item.expansionSlots,
					dimensions: item.dimensions,
					volume: item.volume
				});
			case "POWER_SUPPLY":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					type: item.type,
					efficiencyRating: item.efficiencyRating,
					wattage: item.wattage,
					length: item.length,
					modular: item.modular.toString(),
					color: item.color.join(", "),
					fanless: item.fanless.toString(),
					atx4pinConnectors: item.atx4pinConnectors,
					eps8pinConnectors: item.eps8pinConnectors,
					pcie12_4pin12VHPWRconnectors: item.pcie12_4pin12VHPWRconnectors,
					pcie12pinConnectors: item.pcie12pinConnectors,
					pcie8pinConnectors: item.pcie8pinConnectors,
					pcie6_2pinConnectors: item.pcie6_2pinConnectors,
					pcie6pinConnectors: item.pcie6pinConnectors,
					sataConnectors: item.sataConnectors,
					molex4pinConnectors: item.molex4pinConnectors
				});
			case "OS":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					mode: item.mode,
					version: item.version,
					maxSupportedMemory: item.maxSupportedMemory,
					features: item.features
				});
			case "MONITOR":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					screenSize: item.screenSize,
					resolution: item.resolution,
					refreshRate: item.refreshRate,
					responseTimeG2G: item.responseTimeG2G,
					panelType: item.panelType,
					aspectRatio: item.aspectRatio,
					color: item.color.join(", "),
					brightness: item.brightness,
					hdrTier: item.hdrTier,
					widescreen: item.widescreen.toString(),
					curvedScreen: item.curvedScreen.toString(),
					frameSync: item.frameSync,
					builtInSpeakers: item.builtInSpeakers.toString(),
					viewingAngle: item.viewingAngle,
					inputs: item.inputs.join(", ")
				});
			case "SOUND_CARD":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					channels: item.channels,
					digitalAudio: item.digitalAudio,
					signalToNoiseRatio: item.signalToNoiseRatio,
					sampleRate: item.sampleRate,
					chipSet: item.chipSet,
					interface: item.interface,
					color: item.color.join(", ")
				});
			case "WIRED_NETWORK_ADAPTER":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					interface: item.interface,
					features: item.features.toString()
				});
			case "WIRELESS_NETWORK_ADAPTER":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					protocol: item.protocol,
					interface: item.interface,
					security: item.security,
					antenna: item.antenna,
					features: item.features.join(", ")
				});
			case "HEADPHONES":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					type: item.type,
					frequencyResponse: item.frequencyResponse,
					microphone: item.microphone.toString(),
					wireless: item.wireless.toString(),
					enclosureType: item.enclosureType,
					color: item.color.join(", "),
					activeNoiseCancelling: item.activeNoiseCancelling.toString(),
					connection: item.connection.join(", "),
					channels: item.channels,
					impedance: item.impedance,
					sensitivity: item.sensitivity
				});
			case "KEYBOARD":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					style: item.style,
					mechanical: item.mechanical.toString(),
					switchType: item.switchType,
					backlit: item.backlit,
					tenkeyless: item.tenkeyless.toString(),
					connectionType: item.connectionType,
					color: item.color.join(", "),
					mouseIncluded: item.mouseIncluded.toString(),
					features: item.features
				});
			case "MOUSE":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					trackingMethod: item.trackingMethod,
					connectionType: item.connectionType,
					maxDPI: item.maxDPI,
					handOrientation: item.handOrientation,
					color: item.color.join(", "),
					features: item.features
				});
			case "SPEAKER":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					configuration: item.configuration,
					totalWattage: item.totalWattage,
					frequencyResponse: item.frequencyResponse,
					color: item.color.join(),
					powerEachFront: item.powerEachFront,
					powerCenter: item.powerCenter,
					powerEachRear: item.powerEachRear,
					powerSubwoofer: item.powerSubwoofer,
					features: item.features
				});
			case "WEBCAM":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					resolution: item.resolution,
					connection: item.connection,
					focusType: item.focusType,
					operatingSystem: item.operatingSystem,
					fovAngle: item.fovAngle,
					fStop: item.fStop,
					focalLength: item.focalLength,
					privacyShutter: item.privacyShutter.toString(),
					builtInLightning: item.builtInLightning.toString(),
					automaticLightningAdjust: item.automaticLightningAdjust.toString()
				});
			case "CASE_ACCESSORY":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					type: item.type,
					formFactor: item.formFactor,
					features: item.features
				});
			case "CASE_FAN":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					size: item.size,
					color: item.color.join(", "),
					quantity: item.quantity,
					rpm: item.rpm,
					airflow: item.airflow,
					noiseLevel: item.noiseLevel,
					pwm: item.pwm.toString(),
					led: item.led,
					connector: item.connector,
					controller: item.controller,
					staticPressure: item.staticPressure
				});
			case "FAN_CONTROLLER":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					channels: item.channels,
					channelWattage: item.channelWattage,
					pwm4pin: item.pwm4pin.toString(),
					formFactor: item.formFactor,
					color: item.color.join(", "),
					features: item.features
				});
			case "THERMAL_COMPOUND":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					amount: item.amount,
					features: item.features
				});
			case "EXTERNAL_STORAGE":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					type: item.type,
					interface: item.interface,
					capacity: item.capacity,
					color: item.color.join(", "),
					rpm: item.rpm
				});
			case "OPTICAL_DRIVE":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					model: item.model,
					formFactor: item.formFactor,
					interface: item.interface,
					bufferCache: item.bufferCache,
					dvd_romSpeed: item.dvd_romSpeed,
					cd_romSpeed: item.cd_romSpeed,
					bd_rSpeed: item.bd_rSpeed,
					bd_rDualLayerSpeed: item.bd_rDualLayerSpeed,
					bd_reSpeed: item.bd_reSpeed,
					bd_reDualLayerSpeed: item.bd_reDualLayerSpeed,
					dvdRWSpeed: item.dvdRWSpeed,
					dvdRDualLayerSpeed: item.dvdRDualLayerSpeed,
					dvd_rSpeed: item.dvd_rSpeed,
					dvd_rwSpeed: item.dvd_rwSpeed,
					dvd_rDualLayerSpeed: item.dvd_rDualLayerSpeed,
					dvd_ramSpeed: item.dvd_ramSpeed,
					cd_rSpeed: item.cd_rSpeed,
					cd_rwSpeed: item.cd_rwSpeed,
					features: item.features
				});
			case "UPS":
				return setUploadedSpecification({
					manufacturer: item.manufacturer,
					capacityW: item.capacityW,
					capacityVA: item.capacityVA,
					rackHeight: item.rackHeight,
					backupRunTimeFullLoad: item.backupRunTimeFullLoad,
					backupRunTimeHalfLoad: item.backupRunTimeHalfLoad,
					batteryChemistry: item.batteryChemistry,
					dataLineProtection: item.dataLineProtection,
					emergencyPowerOff: item.emergencyPowerOff.toString(),
					formFactor: item.formFactor,
					hotSwappable: item.hotSwappable.toString(),
					inputVoltage: item.inputVoltage,
					maxBatteryRechargeTime: item.maxBatteryRechargeTime,
					outputVoltage: item.outputVoltage,
					receptacles: item.receptacles.join(", "),
					serialPort: item.serialPort.toString(),
					waveformType: item.waveformType,
					features: item.features
				});
			default:
				return {};
		}
	};
	// onLoad
	useLayoutEffect(() => {
		const getProductData = async () => {
			try {
				const product = await getProductQuery(productId);
				const productSpecification = await getProductSpecificationQuery(productId);
				const productData = product.data.result;
				const productSpecificationData = productSpecification.data.result;

				if (!product.isLoading && !productSpecification.isLoading) {
					setProductDetails({
						category: productData.category,
						itemName: productData.name,
						description: productData.description,
						price: productData.price,
						stock: productData.stock
					});
					setPrimaryImage(productData.img[0]);
					// Fill Specification Details
					// FOR EDIT FILLS ONLY THE DATA
					// can be refactored to separate js file
					fillSpecificationDetails(productData.category, productSpecificationData);

					setEditLoading(false);
				}
			} catch (error) {
				console.log("Loading Edit Details Error", error);
			}
		};

		if (type && type === "edit") {
			getProductData();
		} else {
			// for adds
			setEditLoading(false);
		}
	}, [getProductQuery, productId, type]);

	// resets value in modal
	useEffect(() => {
		if (!showModal) {
			setPrimaryImage(null);
		}
	}, [showModal]);

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
							onClick={closeModal}
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
								{editLoading ? (
									<>
										<Loading />
									</>
								) : (
									<>
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
														<img src={primaryImage} alt="Main Product" />
													) : (
														<AddIcon className={styles.mainAddPhoto} />
													)}
												</button>

												{/* uncomment to add other immages */}
												{/* <div className={styles.imageContainers}>
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
                  </div> */}
												{/* input file images */}
												<div>
													<input
														type="file"
														accept="image/jpg, image/png, image/jpeg"
														ref={mainPhoto}
														onChange={mainPhotoHandler}
														hidden
													/>
													{/* <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            ref={subImageRef1}
            onChange={(e) => setSubImage1(e.target.files[0])}
            hidden
          />
          <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            ref={subImageRef2}
            onChange={(e) => setSubImage2(e.target.files[0])}
            hidden
          />
          <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            ref={subImageRef3}
            onChange={(e) => setSubImage3(e.target.files[0])}
            hidden
          />
          <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            ref={subImageRef4}
            onChange={(e) => setSubImage4(e.target.files[0])}
            hidden
          /> */}
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
																		category: e.target.value
																	})
																}
															>
																<option value="" className="hidden">
																	Category
																</option>

																{/* PC ESSENTIALS */}
																<option value="CPU">CPU</option>
																<option value="CPU_COOLER">CPU Cooler</option>
																<option value="MOTHERBOARD">Motherboard</option>
																<option value="MEMORY">Memory</option>
																<option value="STORAGE">Storage</option>
																<option value="VIDEO_CARD">Video Card</option>
																<option value="CASE">Case</option>
																<option value="POWER_SUPPLY">Power Supply</option>
																<option value="OS">Operating System</option>
																<option value="MONITOR">Monitor</option>

																{/* Expansion Cards */}
																<option value="SOUND_CARD">Sound Cards</option>
																<option value="WIRED_NETWORK_ADAPTER">
																	Wired Network Adapters
																</option>
																<option value="WIRELESS_NETWORK_ADAPTER">
																	Wireless Network Adapters
																</option>

																{/* Peripherals */}
																<option value="HEADPHONES">Headphones</option>
																<option value="KEYBOARD">Keyboard</option>
																<option value="MOUSE">Mouse</option>
																<option value="SPEAKER">Speaker</option>
																<option value="WEBCAM">Webcam</option>

																{/* Accessories and Others */}
																<option value="CASE_ACCESSORY">Case Accessories</option>
																<option value="CASE_FAN">Case Fans</option>
																<option value="FAN_CONTROLLER">Fan Controllers</option>
																<option value="THERMAL_COMPOUND">Thermal Compound</option>
																<option value="EXTERNAL_STORAGE">External Storage</option>
																<option value="OPTICAL_DRIVE">Optical Drive</option>
																<option value="UPS">UPS Systems</option>
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
																		itemName: e.target.value
																	})
																}
																// required
															/>
															{/* <label htmlFor="model">Model: </label>
                        <input
                          type="text"
                          id="model"
                          placeholder="Product Model"
                          className={`${detailsError.model ? styles.errorClass : null}`}
                          value={productDetails.model}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              model: e.target.value
                            })
                          }
                          // required
                        /> */}
															{/* <label htmlFor="brand">Brand: </label>
                        <input
                          type="text"
                          id="brand"
                          placeholder="Product Brand"
                          className={`${detailsError.brand ? styles.errorClass : null}`}
                          value={productDetails.brand}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              brand: e.target.value
                            })
                          }
                          // required
                        /> */}
															<label htmlFor="description">Description: </label>
															<textarea
																id="description"
																placeholder="Add Description"
																rows={4}
																className={`${
																	detailsError.description ? styles.errorClass : null
																}`}
																value={productDetails.description}
																onChange={(e) =>
																	setProductDetails({
																		...productDetails,
																		description: e.target.value
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
																		price: e.target.value
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
																		stock: e.target.value
																	})
																}
															/>
														</>
													) : (
														<InputSpecification
															category={productDetails.category}
															specification={
																type === "add" ? specification : uploadedSpecification
															}
															setSpecification={
																type === "add"
																	? setSpecification
																	: setUploadedSpecification
															}
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
																		"Please select an appropriate category before proceeding"
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
									</>
								)}
							</motion.div>
						</motion.div>
					</section>
				)}
			</AnimatePresence>
		</>
	);
};

export default ProductModal;
