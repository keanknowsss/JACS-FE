import styles from "./FormContainer.module.scss";

const FormContainer = ({ submit, children }) => {
    const defaultSubmit = (e) => {
        e.preventDefault();
    }

	return (
		<form className={styles.formContainer} onSubmit={submit ? submit : defaultSubmit}>
			{children}
		</form>
	);
};

export default FormContainer;
