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

	specificationError
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
		case "CPU_COOLER":
			return (
				<CPUCooler
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "MOTHERBOARD":
			return (
				<Motherboard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "MEMORY":
			return (
				<Memory
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "STORAGE":
			return (
				<Storage
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "VIDEO_CARD":
			return (
				<VideoCard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "CASE":
			return (
				<Case
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "POWER_SUPPLY":
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
		case "MONITOR":
			return (
				<Monitor
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "SOUND_CARD":
			return (
				<SoundCard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "WIRED_NETWORK_ADAPTER":
			return (
				<WiredNetworkAdapter
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "WIRELESS_NETWORK_ADAPTER":
			return (
				<WirelessNetworkAdapter
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "HEADPHONES":
			return (
				<Headphone
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "KEYBOARD":
			return (
				<Keyboard
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "MOUSE":
			return (
				<Mice
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "SPEAKER":
			return (
				<Speaker
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "WEBCAM":
			return (
				<Webcam
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "CASE_ACCESSORY":
			return (
				<CaseAccessories
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "CASE_FAN":
			return (
				<CaseFan
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "FAN_CONTROLLER":
			return (
				<FanController
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "THERMAL_COMPOUND":
			return (
				<ThermalCompound
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "EXTERNAL_STORAGE":
			return (
				<ExternalStorage
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "OPTICAL_DRIVE":
			return (
				<OpticalDrive
					object={specification}
					setObject={setSpecification}
					error={specificationError}
				/>
			);
		case "UPS":
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
