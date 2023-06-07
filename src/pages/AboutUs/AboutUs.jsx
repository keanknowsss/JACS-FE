import { JACSLogo } from "../../assets/images";
import Loading from "../../components/Loading/Loading";
import styles from "./AboutUs.module.scss";

const AboutUs = ({title}) => {
    document.title = title;

    return (
		<>
			<main className={styles.aboutPage}>
                <div className={styles.aboutDiv}>
                    <p className={styles.AboutUsText}>
                        About Us
                    </p>
                    <div><JACSLogo /></div>

                        <div className={styles.abtUsTxt}>At Just Another Computer Shop, 
                        we are dedicated to providing high-quality 
                        PC parts for all your computing needs. With 
                        a passion for technology and a commitment to 
                        customer satisfaction, we strive to be your go-to 
                        destination for PC components and accessories. Our 
                        mission is to empower PC enthusiasts, gamers, 
                        and professionals by offering a wide range of 
                        top-notch PC parts. We aim to deliver cutting-edge 
                        technology, exceptional performance, and reliable 
                        products that enhance your computing experience. 
                        Building a PC can be a complex task, especially 
                        for beginners. Our team of knowledgeable experts 
                        is here to provide you with professional advice and 
                        support. Whether you have questions about 
                        compatibility, product recommendations, or 
                        troubleshooting, we are always ready to assist you 
                        in making informed decisions.
                        </div>

                     <div className="bg-secondary-default 
                     p-[0px] w-full text-black text-center font-bold text-[50px]">Contact Us</div>

                </div>
                <div className={styles.aboutDiv2}>
                    
                    <div className={styles.divContact}>
                        <p className="font-bold text-[30px] text-[white]">Contacts</p>
                        <hr className="mb-2" />
                        <p className="text-[23px] font-bold text-[white]">Owner/Founder</p>
                        <p className="text-[19px] font-bold text-[gray]">Keanu Dwight Solomon</p>
                        <p className="text-[19px] font-bold text-secondary-default underline">solomon.keanu.sk@gmail.com</p>
                        <hr />
                        <p className="text-[23px] font-bold text-[white]">Co-Owner</p>
                        <p className="text-[19px] font-bold text-[gray]">John Rexpearl Tumlos</p>
                        <p className="text-[19px] font-bold text-secondary-default underline">johnrex412@gmail.com</p>
                        <hr />
                        <p className="text-[23px] font-bold text-[white]">Co-Owner</p>
                        <p className="text-[19px] font-bold text-[gray]">Phillip Angelo R. Jaculo</p>
                        <p className="text-[19px] font-bold text-secondary-default underline">parjaculo228922@gmail.com</p>

                    </div>


                    <div className={styles.divSend}>
                        <p className="font-bold text-[30px] text-[white]">Send us a Message</p>
                        <hr />
                        <div className="flex flex-col gap-y-5 mt-5">
                            <input type="text" className={styles.textbox} placeholder="Name"/>
                            <input type="text" className={styles.textbox} placeholder="Your E-mail Address"/>
                            {/* <input type="text" className={styles.textbox1} placeholder="Your Message"/> */}
                            <textarea placeholder="Your Message" className="resize-none border border-gray-300 rounded-md 
                            px-4 py-2 focus:outline-none focus:ring-blue-500
                              focus:border-blue-500 w-[90%] h-[20rem]" />

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



}



export default AboutUs;