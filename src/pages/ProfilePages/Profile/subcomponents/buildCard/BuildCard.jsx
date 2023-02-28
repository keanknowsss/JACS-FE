import { DefaultBuild } from "../../../../../assets/placeholder/index";
import styles from "./BuildCard.module.scss";

const BuildCard = () => {
	return (
		<div className={styles.buildCardComponent}>
			<div className={styles.imgColumn}>
				<img src={DefaultBuild} alt="Build Profile" />
			</div>
			<div className={styles.specificationColumn}>
				<h2 className={styles.buildName}>Build Name</h2>
				<div className={styles.specificationContent}>
					<h3>Specifications</h3>
					<div className={styles.specificationParts}>
						<div className={styles.part}>
							<p className={styles.category}>Processor</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
						<div className={styles.part}>
							<p className={styles.category}>Motherboard</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
						<div className={styles.part}>
							<p className={styles.category}>Graphics Card</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
						<div className={styles.part}>
							<p className={styles.category}>Memory</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
						<div className={styles.part}>
							<p className={styles.category}>Storage</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
						<div className={styles.part}>
							<p className={styles.category}>Power Supply</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
						<div className={styles.part}>
							<p className={styles.category}>Case</p>
							<p className={styles.partName}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at
								dolor modi, voluptatem excepturi natus laborum distinctio
								cumque! Illum minima aliquam sint dignissimos optio. Explicabo
								sit omnis nisi quas nostrum?
							</p>
						</div>
					</div>
				</div>
				<button className={styles.viewBtn}>View Build</button>
			</div>
		</div>
	);
};

export default BuildCard;
