import { JACSLogo } from "../../assets/images";
import Loading from "../../components/Loading/Loading";
import styles from "./AboutUs.module.scss";

const AboutUs = ({ title }) => {
	document.title = title;

	return (
		<>
			<main className={styles.aboutPage}>
				<div className={styles.aboutDiv}>
					<p className={styles.AboutUsText}>About Us</p>
					<div>
						<JACSLogo />
					</div>

					<div className={styles.abtUsTxt}>
						At Just Another Computer Shop, we are dedicated to providing a
						platform for sellers that sell high-quality PC parts for all
						customer computing needs. With a passion for technology and a
						commitment to customer satisfaction, we strive to be your go-to
						destination for PC components and accessories. Our mission is to
						create a place where customers and sellers of computer parts and
						accessories can transact safely. We aim to make this platform safe
						and easy to use for all users. Building a PC can be a complex task,
						especially for beginners. Registered experts and technicians in this
						platform can provide you with professional advice and support.
						Whether you have questions about compatibility, product
						recommendations, or troubleshooting, they are always ready to assist
						you in making informed decisions.
					</div>

					<div
						className="bg-secondary-default 
                     p-[0px] w-full text-black text-center font-bold text-[50px]"
					>
						Contact Us
					</div>
				</div>
				<div className={styles.aboutDiv2}>
					<div className={styles.divContact}>
						<p className="font-bold text-[30px] text-[white] mb-3">Contacts</p>
						<hr className="mb-2" />
						<p className="text-[23px] font-semibold text-[white]">
							Owner/Founder
						</p>
						<p className="text-[19px] font-regular text-[gray] -mt-1">
							Keanu Dwight C. Solomon
						</p>
						<p className="text-[19px] font-light text-secondary-default underline -mt-2 mb-4">
							solomon.keanu.sk@gmail.com
						</p>
						<hr className="mb-2" />
						<p className="text-[23px] font-semibold text-[white]">Co-Owner</p>
						<p className="text-[19px] font-regular text-[gray] -mt-1">
							John Rexpearl P. Tumlos
						</p>
						<p className="text-[19px] font-light text-secondary-default underline -mt-2 mb-4 ">
							johnrex412@gmail.com
						</p>
						<hr className="mb-2" />
						<p className="text-[23px] font-semibold text-[white]">Co-Owner</p>
						<p className="text-[19px] font-regular text-[gray] -mt-1">
							Phillip Angelo R. Jaculo
						</p>
						<p className="text-[19px] font-light text-secondary-default underline -mt-2 mb-4">
							parjaculo228922@gmail.com
						</p>
					</div>

					<div className={styles.divSend}>
						<p className="font-bold text-[30px] text-[white] mb-3">
							Send us a Message
						</p>
						<hr />
						<div className="flex flex-col gap-y-5 mt-5">
							<input
								type="text"
								className={styles.textbox}
								placeholder="Name"
							/>
							<input
								type="text"
								className={styles.textbox}
								placeholder="Your E-mail Address"
							/>
							{/* <input type="text" className={styles.textbox1} placeholder="Your Message"/> */}
							<textarea
								placeholder="Your Message"
								className="resize-none border border-gray-300 rounded-md 
                            px-4 py-2 focus:outline-none focus:ring-blue-500
                              focus:border-blue-500 w-[90%] h-[20rem]"
							/>
						</div>
						<div className="pt-[20px]">
							<button className="bg-black hover:bg-gray-700 text-white font-bold py-5 px-10 rounded text-[20px]">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default AboutUs;
