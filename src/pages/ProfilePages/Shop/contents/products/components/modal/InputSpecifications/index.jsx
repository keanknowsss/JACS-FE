import CPU from "./CPU";
import CPUCooler from "./CPUCooler";
import Memory from "./Memory";
import Motherboard from "./Motherboard";
import Storage from "./Storage";

const InputSpecification = ({
	category,
	CPUSpecification,
	setCPUSpecification,
	CPUCoolerSpecification,
	setCPUCoolerSpecification,
	motherboardSpecification,
	setMotherboardSpecification,
	memorySpecification,
	setMemorySpecification,
	storageSpecification,
	setStorageSpecification,
}) => {
	switch (category) {
		case "CPU":
			return <CPU object={CPUSpecification} setObject={setCPUSpecification} />;
		case "CPU Cooler":
			return (
				<CPUCooler
					object={CPUCoolerSpecification}
					setObject={setCPUCoolerSpecification}
				/>
			);
		case "Motherboard":
			return (
				<Motherboard
					object={motherboardSpecification}
					setObject={setMotherboardSpecification}
				/>
			);
		case "Memory":
			return (
				<Memory
					object={memorySpecification}
					setObject={setMemorySpecification}
				/>
			);
		case "Storage":
			return (
				<Storage
					object={storageSpecification}
					setObject={setStorageSpecification}
				/>
			);
		default:
			return null;
	}
};

export default InputSpecification;
