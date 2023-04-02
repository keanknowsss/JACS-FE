import Case from "./Case";
import CaseAccessories from "./CaseAccessories";
import CaseFan from "./CaseFan";
import CPU from "./CPU";
import CPUCooler from "./CPUCooler";
import ExternalStorage from "./ExternalStorage";
import FanController from "./FanController";
import Headphone from "./Headphone";
import Keyboard from "./Keyboard";
import Memory from "./Memory";
import Mice from "./Mice";
import Monitor from "./Monitor";
import Motherboard from "./Motherboard";
import OpticalDrive from "./OpticalDrive";
import OS from "./OS";
import PowerSupply from "./PowerSupply";
import SoundCard from "./SoundCard";
import Speaker from "./Speaker";
import Storage from "./Storage";
import ThermalCompound from "./ThermalCompound";
import UPS from "./UPS";
import VideoCard from "./VideoCard";
import Webcam from "./Webcam";
import WiredNetworkAdapter from "./WiredNetworkAdapter";
import WirelessNetworkAdapter from "./WirelessNetworkAdapter";

const InputSpecification = ({
	category,
	specification,
	setSpecification,

	specificationError,
}) => {
	switch (category) {
		case "CPU":
			return (
				<CPU
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "CPU Cooler":
			return (
				<CPUCooler
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Motherboard":
			return (
				<Motherboard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Memory":
			return (
				<Memory
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Storage":
			return (
				<Storage
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Video Card":
			return (
				<VideoCard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Case":
			return (
				<Case
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Power Supply":
			return (
				<PowerSupply
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "OS":
			return (
				<OS
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Monitor":
			return (
				<Monitor
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Sound Cards":
			return (
				<SoundCard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Wired Network Adapters":
			return (
				<WiredNetworkAdapter
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Wireless Network Adapters":
			return (
				<WirelessNetworkAdapter
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Headphones":
			return (
				<Headphone
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Keyboards":
			return (
				<Keyboard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Mice":
			return (
				<Mice
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Speakers":
			return (
				<Speaker
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Webcams":
			return (
				<Webcam
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Case Accessories":
			return (
				<CaseAccessories
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Case Fans":
			return (
				<CaseFan
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Fan Controllers":
			return (
				<FanController
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Thermal Compound":
			return (
				<ThermalCompound
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "External Storage":
			return (
				<ExternalStorage
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "Optical Drive":
			return (
				<OpticalDrive
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "UPS Systems":
			return (
				<UPS
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		default:
			return null;
	}
};

export default InputSpecification;
