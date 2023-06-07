import styles from "./Privacy.module.scss";

const Privacy = ({title}) => {
    document.title = title;

    return (
		<>
        <main className={styles.privacyMain}>

            <div className={styles.privacyDiv}>
                <p className={styles.privacyText}> Privacy Policy </p>

                <div className={styles.privacyBody}>
                <p>This Privacy Policy describes how we collect, use, disclose, 
                and protect your personal information when you visit and make 
                purchases from our e-commerce website that sells 
                computer parts. By using our Website, you consent to the practices 
                described in this Privacy Policy.</p>

                    <p className="pt-5">Information We Collect</p>
                    <p className="pb-5 pl-5">1.1. Personal Information: When you place an order or create an 
                    account on our Website, we collect personal information such as 
                    your name, email address, shipping address, billing address, and 
                    payment information. We may also collect additional information 
                    you provide, such as phone number and product preferences.</p>

                    <p className="pb-5 pl-5">1.2. Log Data: Our servers automatically record certain information
                    when you visit our Website, including your IP address, 
                    browser type, referring/exit pages, and timestamps. 
                    This information is used for analyzing trends, administering 
                    the site, and tracking user movements.</p>

                    <p className="pt-5">Use of Personal Information</p>
                    <p className="pb-5 pl-5">2.1. We may use your personal information to process and fulfill 
                    your orders, communicate with you about your purchases, provide 
                    customer support, and improve our services.</p>

                    <p className="pb-5 pl-5">2.2. With your consent, we may send you promotional emails about
                    new products, special offers, or other information that may be of
                    interest to you. You can opt-out of receiving these emails at any 
                    time by following the instructions in the email or contacting us directly.</p>

                    <p className="pt-5">Information Sharing</p>
                    <p className="pb-5 pl-5">3.1. We may share your personal information with trusted third-party
                    service providers who assist us in operating our Website, conducting 
                    our business, and providing services to you. These service providers 
                    are bound by confidentiality agreements and are not permitted to use 
                    your personal information for any other purpose.</p>

                    <p className="pb-5 pl-5">3.2. We may also disclose your personal information to comply with
                    applicable laws, regulations, or legal processes, or in response to 
                    valid requests by public authorities.</p>

                    <p className="pt-5">Data Security</p>
                    <p className="pb-5 pl-5">4.1. We implement reasonable security measures to protect your personal
                    information from unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the Internet or electronic storage 
                    is 100% secure, and we cannot guarantee absolute security.</p>

                    <p className="pt-5">Cookies and Tracking Technologies</p>
                    <p className="pb-5 pl-5">5.1. We use cookies and similar tracking technologies to enhance your 
                    browsing experience, analyze trends, and gather information about how
                    you interact with our Website. You can manage your cookie preferences
                    through your browser settings.</p>

                    <p className="pt-5">Your Rights</p>
                    <p className="pb-5 pl-5">6.1. You have the right to access, update, correct, and delete your
                    personal information. You can do so by logging into your account or
                    contacting us directly.</p>

                    <p className="pt-5">Children's Privacy</p>
                    <p className="pb-5 pl-5">7.1. Our Website is not intended for individuals under the age of 
                    18. We do not knowingly collect personal information from children. 
                    If you are a parent or guardian and believe that your child has provided
                    us with personal information, please contact us, and we will promptly 
                    delete the information.</p>

                    <p className="pt-5">Changes to this Privacy Policy</p>
                    <p className="pb-5 pl-5">8.1. We may update this Privacy Policy from time to time. Any changes 
                    will be posted on this page, and the revised policy will be effective 
                    immediately upon posting.</p>

                    <p className="pt-5">Contact Us</p>
                    <p className="pb-5 pl-5">9.1. If you have any questions or concerns about our Privacy Policy or
                    the handling of your personal information, please contact us using the
                    information provided on our Website.</p>

                </div>

            </div>
            
        </main>
		</>
	);



}



export default Privacy;