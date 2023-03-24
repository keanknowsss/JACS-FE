import { useEffect, useRef, useState } from "react";
import { ArrowNavigation } from "../../assets/icons";
import styles from "./Select.module.scss";

const Select = ({ label, options, getSelected }) => {
	const [selected, setSelected] = useState("");
	const [toggle, setToggle] = useState(false);

  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
  }, [ref, toggle]);

	return (
		<div className={styles.main} onBlur={() => setToggle(!toggle)} ref={ref}>
			<span className={styles.selector} onClick={() => setToggle(!toggle)}>
				{selected.length < 1 ? label : selected}
				<ArrowNavigation className={styles.arrow} fill={"#f66b0e"} />
			</span>

			{toggle && (
				<div className={styles.options}>
					{options?.map((option, index) => (
						<div
							key={index}
							className={styles.option}
							onClick={() => {
								setSelected(option);
								getSelected(option);
								setToggle(!toggle);
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
