import { useEffect, useRef, useState } from "react";
import { EyeClose, EyeOpen } from "../../assets/icons";
import styles from "./InputForm.module.scss";

const InputForm = ({ name, label, type, error, state, setState, required }) => {
	const inputRef = useRef();
	const inputContainer = useRef();

	useEffect(() => {
		inputRef.current.required = required;
	}, [required]);

	// for password
	const [passwordVisible, setPasswordVisible] = useState(true);

	const passwordVisibleToggler = (e) => {
		if (passwordVisible) {
			inputRef.current.type = "text";
			setPasswordVisible(false);
		} else {
			inputRef.current.type = "password";
			setPasswordVisible(true);
		}
	};

	return (
		<div
			className={styles.inputForm}
			onClick={(e) => inputRef.current.focus()}
			ref={inputContainer}
		>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				ref={inputRef}
				name={name}
				value={state}
				onChange={ e => setState(e.target.value)}
				onFocus={(e) =>
					inputContainer.current.classList.add(styles.inputActive)
				}
				onBlur={(e) =>
					inputContainer.current.classList.remove(styles.inputActive)
				}
				onLoad={(e) => {
					e.target.required = true;
					console.log(e.target.required);
				}}
			/>
			{type === "password" && (
				<div className={styles.eyeIcon} onClick={passwordVisibleToggler}>
					{passwordVisible ? <EyeClose /> : <EyeOpen />}
				</div>
			)}
		</div>
	);
};

export default InputForm;
