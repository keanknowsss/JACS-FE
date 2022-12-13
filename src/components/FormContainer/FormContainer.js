import styles from "./FormContainer.module.scss";

const FormContainer = ({ children }) => {
	
	return (
		<div className={styles.formContainer}>
			{children}
		</div>
	);
};

export default FormContainer;
