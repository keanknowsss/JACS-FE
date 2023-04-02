// FOR TOAST
// set toast for errors
export const errorToastHandler = (
	errorContainer,
	errorMsgArray,
	showToast,
	toastParams,
	setToastParams
) => {
	if (errorMsgArray.length >= 1 && errorMsgArray.length <= 3) {
		showToast(true);
		if (errorMsgArray.length === 1) {
			setToastParams({
				...toastParams,
				symbol: "error",
				title: "Missing " + errorMsgArray[0],
				subtitle: "Please input " + errorMsgArray[0],
			});
		} else {
			const stringMessage = errorMsgArray.map((string, index) => {
				if (errorMsgArray.length === 2) {
					if (index === 1) {
						return " and " + string;
					} else {
						return string;
					}
				} else if (errorMsgArray.length === 3) {
					if (index === 1) {
						return " " + string;
					} else if (index === 2) {
						return " and " + string;
					} else return string;
				}
			});

			setToastParams({
				...toastParams,
				symbol: "error",
				title: "Missing " + stringMessage,
				subtitle: "Please input " + stringMessage,
			});
		}
	} else if (errorMsgArray.length > 3) {
		showToast(true);
		setToastParams({
			...toastParams,
			symbol: "error",
			title: "Missing Input Fields!",
			subtitle: "Please fill all the required input fields",
		});
	}
};


// functions to modify object for boolean errors
// add message to an array

export const detailsErrorHandling = (object, errorContainer, errorMsgArray) => {
	if (!object.itemName) {
		errorContainer.itemName = true;
		errorMsgArray.push("Product Name");
	}
	if (!object.model) {
		errorContainer.model = true;
		errorMsgArray.push("Product Model");
	}
	if (!object.brand) {
		errorContainer.brand = true;
		errorMsgArray.push("Product Brand");
	}
	if (!object.description) {
		errorContainer.description = true;
		errorMsgArray.push("Product Description");
	}
	if (!object.stock) {
		errorContainer.stock = true;
		errorMsgArray.push("Product Stock");
	}
	if (!object.price) {
		errorContainer.price = true;
		errorMsgArray.push("Product Price");
	}
};

// for Specifications

export const cpuError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.core) {
        specificationErrorContainer.core = true;
        specificationErrorMsgArray.push("Cores");
    }
    if (!specification.coreClock) {
        specificationErrorContainer.coreClock = true;
        specificationErrorMsgArray.push("Core Speed");
    }
    if (!specification.boostClock) {
        specificationErrorContainer.boostClock = true;
        specificationErrorMsgArray.push("Boost Speed");
    }
    if (!specification.tdp) {
        specificationErrorContainer.tdp = true;
        specificationErrorMsgArray.push("TDP");
    }
    if (!specification.series) {
        specificationErrorContainer.series = true;
        specificationErrorMsgArray.push("Model Series");
    }
    if (!specification.microArchitecture) {
        specificationErrorContainer.microArchitecture = true;
        specificationErrorMsgArray.push("Microarchitecture");
    }
    if (!specification.coreFamily) {
        specificationErrorContainer.coreFamily = true;
        specificationErrorMsgArray.push("Core Family");
    }
    if (!specification.socket) {
        specificationErrorContainer.socket = true;
        specificationErrorMsgArray.push("Socket");
    }
    if (!specification.integratedGraphics) {
        specificationErrorContainer.integratedGraphics = true;
        specificationErrorMsgArray.push("Graphics");
    }
    if (!specification.maxSupportedMemory) {
        specificationErrorContainer.maxSupportedMemory = true;
        specificationErrorMsgArray.push("Maximum Memory");
    }
    if (!specification.packaging) {
        specificationErrorContainer.packaging = true;
        specificationErrorMsgArray.push("Packaging Type");
    }
    if (!specification.l1Cache) {
        specificationErrorContainer.l1Cache = true;
        specificationErrorMsgArray.push("L1 Cache");
    }
    if (!specification.l2Cache) {
        specificationErrorContainer.l2Cache = true;
        specificationErrorMsgArray.push("L2 Cache");
    }
    if (!specification.l3Cache) {
        specificationErrorContainer.l3Cache = true;
        specificationErrorMsgArray.push("L3 Cache");
    }
    if (!specification.lithography) {
        specificationErrorContainer.lithography = true;
        specificationErrorMsgArray.push("Litography");
    }
    if (specification.multithreading === "true" && !specification.typeOfMultithreading) {
        specificationErrorContainer.typeOfMultithreading = true;
        specificationErrorMsgArray.push("Multithreading");
    }
}

export const cpuCoolerError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
	if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
	if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
	if (!specification.fanRPM) {
        specificationErrorContainer.fanRPM = true;
        specificationErrorMsgArray.push("Fan Speed");
    }
	if (!specification.noiseLevel) {
        specificationErrorContainer.noiseLevel = true;
        specificationErrorMsgArray.push("Noise Level");
    }
	if (!specification.height) {
        specificationErrorContainer.height = true;
        specificationErrorMsgArray.push("Height");
    }
	if (!specification.cpuSocket) {
        specificationErrorContainer.cpuSocket = true;
        specificationErrorMsgArray.push("CPU Socket");
    }
}
export const motherboardError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
	if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
	if (!specification.socketCPU) {
        specificationErrorContainer.socketCPU = true;
        specificationErrorMsgArray.push("CPU Socket");
    }
	if (!specification.formFactor) {
        specificationErrorContainer.formFactor = true;
        specificationErrorMsgArray.push("Form Factor");
    }
	if (!specification.chipset) {
        specificationErrorContainer.chipset = true;
        specificationErrorMsgArray.push("Chipset");
    }
	if (!specification.maxMemory) {
        specificationErrorContainer.maxMemory = true;
        specificationErrorMsgArray.push("Maximum Memory");
    }
	if (!specification.memorySlots) {
        specificationErrorContainer.memorySlots = true;
        specificationErrorMsgArray.push("Memory Slots");
    }
	if (!specification.memorySpeed) {
        specificationErrorContainer.memorySpeed = true;
        specificationErrorMsgArray.push("Memory Speed");
    }
	if (!specification.sliCrossfire) {
        specificationErrorContainer.sliCrossfire = true;
        specificationErrorMsgArray.push("SLI Crossfire");
    }
	if (!specification.pci16) {
        specificationErrorContainer.pci16 = true;
        specificationErrorMsgArray.push("PCIE x16 Slots");
    }
	if (!specification.pci8) {
        specificationErrorContainer.pci8 = true;
        specificationErrorMsgArray.push("PCIE x8 Slots");
    }
	if (!specification.pci4) {
        specificationErrorContainer.pci4 = true;
        specificationErrorMsgArray.push("PCIE x4 Slots");
    }
	if (!specification.pci1) {
        specificationErrorContainer.pci1 = true;
        specificationErrorMsgArray.push("PCIE x1 Slots");
    }
	if (!specification.pci) {
        specificationErrorContainer.pci = true;
        specificationErrorMsgArray.push("PCI Slots");
    }
	if (!specification.m2Slots) {
        specificationErrorContainer.m2Slots = true;
        specificationErrorMsgArray.push("M.2 Slots");
    }
	if (!specification.miniPCIeSlots) {
        specificationErrorContainer.miniPCIeSlots = true;
        specificationErrorMsgArray.push("Mini PCIE Slots");
    }
	if (!specification.halfMiniPCIeSlots) {
        specificationErrorContainer.halfMiniPCIeSlots = true;
        specificationErrorMsgArray.push("Half Mini PCIE Slots");
    }
	if (!specification.mSataSlots) {
        specificationErrorContainer.mSataSlots = true;
        specificationErrorMsgArray.push("MSata Slots");
    }
	if (!specification.sata6gb) {
        specificationErrorContainer.sata6gb = true;
        specificationErrorMsgArray.push("SATA 6GB/s Ports");
    }
	if (!specification.onBoardEthernet) {
        specificationErrorContainer.onBoardEthernet = true;
        specificationErrorMsgArray.push("Onboard Ethernet");
    }
	if (!specification.onBoardVideo) {
        specificationErrorContainer.onBoardVideo = true;
        specificationErrorMsgArray.push("Onboard Video");
    }
	if (!specification.usb2Headers) {
        specificationErrorContainer.usb2Headers = true;
        specificationErrorMsgArray.push("USB 2.0 Headers");
    }
	if (!specification.singleUsb2Headers) {
        specificationErrorContainer.singleUsb2Headers = true;
        specificationErrorMsgArray.push("SingleUSB 2.0 Headers");
    }
	if (!specification.usb3Gen1Headers) {
        specificationErrorContainer.usb3Gen1Headers = true;
        specificationErrorMsgArray.push("USB 3.2 Gen 1 Headers");
    }
	if (!specification.usb3Gen2Headers) {
        specificationErrorContainer.usb3Gen2Headers = true;
        specificationErrorMsgArray.push("USB 3.2 Gen 2 Headers");
    }
	if (!specification.usb3Gen2x2Headers) {
        specificationErrorContainer.usb3Gen2x2Headers = true;
        specificationErrorMsgArray.push("USB 3.2 Gen 2x2 Headers");
    }
	if (!specification.wirelessNetworking) {
        specificationErrorContainer.wirelessNetworking = true;
        specificationErrorMsgArray.push("Wireless Networking");
    }
}
export const memoryError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.speed) {
        specificationErrorContainer.speed = true;
        specificationErrorMsgArray.push("Speed");
    }
    if (!specification.formFactor) {
        specificationErrorContainer.formFactor = true;
        specificationErrorMsgArray.push("Form Factor");
    }
    if (!specification.modules) {
        specificationErrorContainer.modules = true;
        specificationErrorMsgArray.push("Modules");
    }
    if (!specification.firstWordLatency) {
        specificationErrorContainer.firstWordLatency = true;
        specificationErrorMsgArray.push("First Word Latency");
    }
    if (!specification.CASLatency) {
        specificationErrorContainer.CASLatency = true;
        specificationErrorMsgArray.push("CAS Latency");
    }
    if (!specification.voltage) {
        specificationErrorContainer.voltage = true;
        specificationErrorMsgArray.push("Voltage");
    }
    if (!specification.timing) {
        specificationErrorContainer.timing = true;
        specificationErrorMsgArray.push("Timing");
    }
    if (!specification.eccRegistered) {
        specificationErrorContainer.eccRegistered = true;
        specificationErrorMsgArray.push("ECC");
    }
}
export const storageError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.capacity) {
        specificationErrorContainer.capacity = true;
        specificationErrorMsgArray.push("Capacity");
    }
    if (!specification.type) {
        specificationErrorContainer.type = true;
        specificationErrorMsgArray.push("Type");
    }
    if (!specification.cache) {
        specificationErrorContainer.cache = true;
        specificationErrorMsgArray.push("Cache");
    }
    if (!specification.formFactor) {
        specificationErrorContainer.formFactor = true;
        specificationErrorMsgArray.push("Form Factor");
    }
    if (!specification.interface) {
        specificationErrorContainer.interface = true;
        specificationErrorMsgArray.push("Interface");
    }
}
export const videoCardError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.chipset) {
        specificationErrorContainer.chipset = true;
        specificationErrorMsgArray.push("Chipset");
    }
    if (!specification.memory) {
        specificationErrorContainer.memory = true;
        specificationErrorMsgArray.push("Memory");
    }
    if (!specification.memoryType) {
        specificationErrorContainer.memoryType = true;
        specificationErrorMsgArray.push("Memory Type");
    }
    if (!specification.coreClock) {
        specificationErrorContainer.coreClock = true;
        specificationErrorMsgArray.push("Core Clock");
    }
    if (!specification.boostClock) {
        specificationErrorContainer.boostClock = true;
        specificationErrorMsgArray.push("Boost Clock");
    }
    if (!specification.effectiveMemoryClock) {
        specificationErrorContainer.effectiveMemoryClock = true;
        specificationErrorMsgArray.push("Effective Memory Clock");
    }
    if (!specification.interface) {
        specificationErrorContainer.interface = true;
        specificationErrorMsgArray.push("Interface");
    }
    if (!specification.frameSync) {
        specificationErrorContainer.frameSync = true;
        specificationErrorMsgArray.push("Frame Sync");
    }
    if (!specification.len) {
        specificationErrorContainer.len = true;
        specificationErrorMsgArray.push("Length");
    }
    if (!specification.tdp) {
        specificationErrorContainer.tdp = true;
        specificationErrorMsgArray.push("TDP");
    }
    if (!specification.caseExpansionSlotWidth) {
        specificationErrorContainer.caseExpansionSlotWidth = true;
        specificationErrorMsgArray.push("Expansion Slot Width");
    }
    if (!specification.totalSlotWidth) {
        specificationErrorContainer.totalSlotWidth = true;
        specificationErrorMsgArray.push("Total Slot Width");
    }
    if (!specification.cooling) {
        specificationErrorContainer.cooling = true;
        specificationErrorMsgArray.push("Cooling");
    }
    if (!specification.externalPower) {
        specificationErrorContainer.externalPower = true;
        specificationErrorMsgArray.push("External Power");
    }
    if (!specification.dviOutputs) {
        specificationErrorContainer.dviOutputs = true;
        specificationErrorMsgArray.push("DVI Ports");
    }
    if (!specification.hdmiOutputs) {
        specificationErrorContainer.hdmiOutputs = true;
        specificationErrorMsgArray.push("HDMI Ports");
    }
    if (!specification.displayPortOutputs) {
        specificationErrorContainer.displayPortOutputs = true;
        specificationErrorMsgArray.push("Displayport Ports");
    }
}
export const casingError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.type) {
        specificationErrorContainer.type = true;
        specificationErrorMsgArray.push("Type");
    }
    if (!specification.powerSupply) {
        specificationErrorContainer.powerSupply = true;
        specificationErrorMsgArray.push("Power Supply");
    }
    if (!specification.sidePanel) {
        specificationErrorContainer.sidePanel = true;
        specificationErrorMsgArray.push("Side Panel");
    }
    if (!specification.frontPanelUSB) {
        specificationErrorContainer.frontPanelUSB = true;
        specificationErrorMsgArray.push("Front Panel USB");
    }
    if (!specification.motherboardFormFactor) {
        specificationErrorContainer.motherboardFormFactor = true;
        specificationErrorMsgArray.push("Form Factor");
    }
    if (!specification.maxLength) {
        specificationErrorContainer.maxLength = true;
        specificationErrorMsgArray.push("Max Length");
    }
    if (!specification.driveBays) {
        specificationErrorContainer.driveBays = true;
        specificationErrorMsgArray.push("Drive Bays");
    }
    if (!specification.dimensions) {
        specificationErrorContainer.dimensions = true;
        specificationErrorMsgArray.push("Dimensions");
    }
    if (!specification.volume) {
        specificationErrorContainer.volume = true;
        specificationErrorMsgArray.push("Volume");
    }
}
export const powerSupplyError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.type) {
        specificationErrorContainer.type = true;
        specificationErrorMsgArray.push("Type");
    }
    if (!specification.efficiencyRating) {
        specificationErrorContainer.efficiencyRating = true;
        specificationErrorMsgArray.push("Efficiency Rating");
    }
    if (!specification.wattage) {
        specificationErrorContainer.wattage = true;
        specificationErrorMsgArray.push("Wattage");
    }
    if (!specification.len) {
        specificationErrorContainer.len = true;
        specificationErrorMsgArray.push("Length");
    }
    if (!specification.atx4pinConnectors) {
        specificationErrorContainer.atx4pinConnectors = true;
        specificationErrorMsgArray.push("ATX 4-Pins");
    }
    if (!specification.eps8pinConnectors) {
        specificationErrorContainer.eps8pinConnectors = true;
        specificationErrorMsgArray.push("EPS 8-Pins");
    }
    if (!specification.pcie12_4pin12VHPWRconnectors) {
        specificationErrorContainer.pcie12_4pin12VHPWRconnectors = true;
        specificationErrorMsgArray.push("PCIE 12+4-Pin 12VHPWR");
    }
    if (!specification.pcie12pinConnectors) {
        specificationErrorContainer.pcie12pinConnectors = true;
        specificationErrorMsgArray.push("PCIE 12-Pins");
    }
    if (!specification.pcie6_2pinConnectors) {
        specificationErrorContainer.pcie6_2pinConnectors = true;
        specificationErrorMsgArray.push("PCIE 6+2-Pins");
    }
    if (!specification.pcie6pinConnectors) {
        specificationErrorContainer.pcie6pinConnectors = true;
        specificationErrorMsgArray.push("PCIE 6-Pins");
    }
    if (!specification.sataConnectors) {
        specificationErrorContainer.sataConnectors = true;
        specificationErrorMsgArray.push("SATA Connectors");
    }
    if (!specification.molex4pinConnectors) {
        specificationErrorContainer.molex4pinConnectors = true;
        specificationErrorMsgArray.push("Molex 4-Pins");
    }
}
export const operatingSystemError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.mode) {
        specificationErrorContainer.mode = true;
        specificationErrorMsgArray.push("Mode");
    }
    if (!specification.version) {
        specificationErrorContainer.version = true;
        specificationErrorMsgArray.push("Version");
    }
    if (!specification.maxSupportedMemory) {
        specificationErrorContainer.maxSupportedMemory = true;
        specificationErrorMsgArray.push("Maximum Memory");
    }
}
export const monitorError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.screenSize) {
        specificationErrorContainer.screenSize = true;
        specificationErrorMsgArray.push("Screen Size");
    }
    if (!specification.resolution) {
        specificationErrorContainer.resolution = true;
        specificationErrorMsgArray.push("Resolution");
    }
    if (!specification.refreshRate) {
        specificationErrorContainer.refreshRate = true;
        specificationErrorMsgArray.push("Refresh Rate");
    }
    if (!specification.responseTimeG2G) {
        specificationErrorContainer.responseTimeG2G = true;
        specificationErrorMsgArray.push("Refresh Rate G2G");
    }
    if (!specification.panelType) {
        specificationErrorContainer.panelType = true;
        specificationErrorMsgArray.push("Panel Type");
    }
    if (!specification.aspectRatio) {
        specificationErrorContainer.aspectRatio = true;
        specificationErrorMsgArray.push("Aspect Ratio");
    }
    if (!specification.brightness) {
        specificationErrorContainer.brightness = true;
        specificationErrorMsgArray.push("Brightness");
    }
    if (!specification.frameSync) {
        specificationErrorContainer.frameSync = true;
        specificationErrorMsgArray.push("Frame Sync");
    }
    if (!specification.viewingAngle) {
        specificationErrorContainer.viewingAngle = true;
        specificationErrorMsgArray.push("Viewing Angle");
    }
    if (!specification.inputs) {
        specificationErrorContainer.inputs = true;
        specificationErrorMsgArray.push("Inputs");
    }
}
export const keyboardError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.style) {
        specificationErrorContainer.style = true;
        specificationErrorMsgArray.push("Style");
    }
    if (!specification.backlit) {
        specificationErrorContainer.backlit = true;
        specificationErrorMsgArray.push("Backlit");
    }
    if (!specification.connectionType) {
        specificationErrorContainer.connectionType = true;
        specificationErrorMsgArray.push("Connection Type");
    }
}
export const soundCardError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.channels) {
        specificationErrorContainer.channels = true;
        specificationErrorMsgArray.push("Channel");
    }
    if (!specification.digitalAudio) {
        specificationErrorContainer.digitalAudio = true;
        specificationErrorMsgArray.push("Digital Audio");
    }
    if (!specification.signalToNoiseRatio) {
        specificationErrorContainer.signalToNoiseRatio = true;
        specificationErrorMsgArray.push("Signal-to-Noise Ratio");
    }
    if (!specification.sampleRate) {
        specificationErrorContainer.sampleRate = true;
        specificationErrorMsgArray.push("Sample Rate");
    }
    if (!specification.interface) {
        specificationErrorContainer.interface = true;
        specificationErrorMsgArray.push("Interface");
    }
}
export const wiredNetworkAdapterError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.interface) {
        specificationErrorContainer.interface = true;
        specificationErrorMsgArray.push("Interface");
    }
}
export const wirelessNetwokAdapterError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.protocol) {
        specificationErrorContainer.protocol = true;
        specificationErrorMsgArray.push("Protocol");
    }
    if (!specification.interface) {
        specificationErrorContainer.interface = true;
        specificationErrorMsgArray.push("Interface");
    }
    if (!specification.security) {
        specificationErrorContainer.security = true;
        specificationErrorMsgArray.push("Security");
    }
    if (!specification.antenna) {
        specificationErrorContainer.antenna = true;
        specificationErrorMsgArray.push("Antenna");
    }
}
export const headphoneError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.type) {
        specificationErrorContainer.type = true;
        specificationErrorMsgArray.push("Type");
    }
    if (!specification.frequencyResponse) {
        specificationErrorContainer.frequencyResponse = true;
        specificationErrorMsgArray.push("Frequency Response");
    }
    if (!specification.enclosureType) {
        specificationErrorContainer.enclosureType = true;
        specificationErrorMsgArray.push("Enclosure Type");
    }
    if (!specification.channels) {
        specificationErrorContainer.channels = true;
        specificationErrorMsgArray.push("Color");
    }
    if (!specification.impedance) {
        specificationErrorContainer.impedance = true;
        specificationErrorMsgArray.push("Impedance");
    }
    if (!specification.sensitivity) {
        specificationErrorContainer.sensitivity = true;
        specificationErrorMsgArray.push("Sensitivity");
    }
}
export const miceError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.trackingMethod) {
        specificationErrorContainer.trackingMethod = true;
        specificationErrorMsgArray.push("Tracking Method");
    }
    if (!specification.connectionType) {
        specificationErrorContainer.connectionType = true;
        specificationErrorMsgArray.push("Connection Type");
    }
    if (!specification.maxDPI) {
        specificationErrorContainer.maxDPI = true;
        specificationErrorMsgArray.push("Max DPI");
    }
    if (!specification.handOrientation) {
        specificationErrorContainer.handOrientation = true;
        specificationErrorMsgArray.push("Hand Orientation");
    }
}
export const speakerError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.configuration) {
        specificationErrorContainer.configuration = true;
        specificationErrorMsgArray.push("Configuration");
    }
    if (!specification.totalWattage) {
        specificationErrorContainer.totalWattage = true;
        specificationErrorMsgArray.push("Total Wattage");
    }
    if (!specification.frequencyResponse) {
        specificationErrorContainer.frequencyResponse = true;
        specificationErrorMsgArray.push("Frequency Response");
    }
}
export const webcamError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.resolution) {
        specificationErrorContainer.resolution = true;
        specificationErrorMsgArray.push("Resolution");
    }
    if (!specification.connection) {
        specificationErrorContainer.connection = true;
        specificationErrorMsgArray.push("Connection");
    }
    if (!specification.focusType) {
        specificationErrorContainer.focusType = true;
        specificationErrorMsgArray.push("Focus Type");
    }
    if (!specification.operatingSystem) {
        specificationErrorContainer.operatingSystem = true;
        specificationErrorMsgArray.push("Operating System");
    }
}
export const caseAccessoriesError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.type) {
        specificationErrorContainer.type = true;
        specificationErrorMsgArray.push("Type");
    }
    if (!specification.formFactor) {
        specificationErrorContainer.formFactor = true;
        specificationErrorMsgArray.push("Form Factor");
    }
}
export const caseFanError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.size) {
        specificationErrorContainer.size = true;
        specificationErrorMsgArray.push("Size");
    }
    if (!specification.rpm) {
        specificationErrorContainer.rpm = true;
        specificationErrorMsgArray.push("RPM");
    }
    if (!specification.airflow) {
        specificationErrorContainer.airflow = true;
        specificationErrorMsgArray.push("Airflow");
    }
    if (!specification.noiseLevel) {
        specificationErrorContainer.noiseLevel = true;
        specificationErrorMsgArray.push("Noise Level");
    }
    if (!specification.controller) {
        specificationErrorContainer.controller = true;
        specificationErrorMsgArray.push("Controller");
    }
    if (!specification.staticPressure) {
        specificationErrorContainer.staticPressure = true;
        specificationErrorMsgArray.push("Static Pressure");
    }
}
export const fanControllerError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.channels) {
        specificationErrorContainer.channels = true;
        specificationErrorMsgArray.push("Channels");
    }
    if (!specification.channelWattage) {
        specificationErrorContainer.channelWattage = true;
        specificationErrorMsgArray.push("Channel Wattage");
    }
    if (!specification.formFactor) {
        specificationErrorContainer.formFactor = true;
        specificationErrorMsgArray.push("Form Factor");
    }
}
export const thermalCompoundError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.amount) {
        specificationErrorContainer.amount = true;
        specificationErrorMsgArray.push("Amount");
    }
}
export const externalStorageError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
    if (!specification.type) {
        specificationErrorContainer.type = true;
        specificationErrorMsgArray.push("Type");
    }
    if (!specification.interface) {
        specificationErrorContainer.interface = true;
        specificationErrorMsgArray.push("Interface");
    }
    if (!specification.capacity) {
        specificationErrorContainer.capacity = true;
        specificationErrorMsgArray.push("Capacity");
    }
}
export const opticalDriveError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.model) {
        specificationErrorContainer.model = true;
        specificationErrorMsgArray.push("Model");
    }
}
export const upsError = (specification, specificationErrorContainer, specificationErrorMsgArray) => {
    if (!specification.manufacturer) {
        specificationErrorContainer.manufacturer = true;
        specificationErrorMsgArray.push("Manufacturer");
    }
    if (!specification.capacityW) {
        specificationErrorContainer.capacityW = true;
        specificationErrorMsgArray.push("Capacity (W)");
    }
    if (!specification.capacityVA) {
        specificationErrorContainer.capacityVA = true;
        specificationErrorMsgArray.push("Capacity (VA)");
    }
}