import styles from "./Terms.module.scss";

const Terms = ({title}) => {
    document.title = title;

    return(
        <>
        <main className={styles.termMain}>

            <div className={styles.termDiv}>
               <p className={styles.termText}> Terms of Services</p>

               <div className={styles.termBody}>
              <p> These terms  of services apply to the purchase and sale of computer parts from our e-commerce website. By placing an order through our Website, you agree to be bound by these Terms.</p>

                    <p className="pt-5">Order Acceptance and Pricings</p>
                    <p className="pb-5 pl-5">1.1. All orders placed through our 
                    Website are subject to acceptance by us. We reserve the right to refuse or 
                    cancel any order for any reason at any time. If we cancel an order, we will 
                    notify you and provide a refund for any payment made.</p>

                    <p className="pb-5 pl-5">1.2. The prices listed on our Website 
                    are in the specified currency and are subject to change without notice. 
                    We strive to ensure accurate pricing, but errors may occur. In the event 
                    of a pricing error, we reserve the right to cancel your order or provide 
                    you with the option to pay the corrected price.</p>

                    <p className="pt-5">Payment Terms</p>
                    <p className="pb-5 pl-5">2.1. Payment for the Products is due at the 
                    time of placing the order. We accept payment through the available payment 
                    methods specified on our Website. You agree to provide accurate and complete
                    payment information.</p>

                    <p className="pb-5 pl-5">2.2. In the event of non-payment or payment failure,
                    we may cancel your order or delay shipment until payment is received.</p>

                    <p className="pt-5">Shipping and Delivery</p>
                    <p className="pb-5 pl-5">3.1. We will make reasonable efforts 
                    to ship the Products to you in a timely manner. However, we are not responsible
                    for any delays or damages during shipping that are beyond our control.</p>

                    <p className="pb-5 pl-5">3.2. Shipping costs and estimated 
                    delivery times will be provided during the checkout process. Additional 
                    fees, such as customs duties or taxes, may apply and are your responsibility.</p>

                    <p className="pt-5">Product Warranty</p>
                    <p className="pb-5 pl-5">4.1. We warrant that the Products will be 
                    free from defects in materials and workmanship for a period specified by 
                    the manufacturer, subject to their terms and conditions.</p>

                    <p className="pb-5 pl-5">4.2. If you believe a Product is defective,
                    please contact us within the warranty period for further instructions 
                    on returning or exchanging the Product.</p>

                    <p className="pt-5">Returns and Refunds</p>
                    <p className="pb-5 pl-5">5.1. We accept returns within a specified 
                    period, subject to our return policy outlined on our Website. You are 
                    responsible for the return shipping costs unless the return is due to our error.</p>

                    <p className="pb-5 pl-5">5.2. Refunds will be issued in the original 
                    form of payment and processed within a reasonable time after receiving the
                    returned Product.</p>

                    <p className="pt-5">Limitation of Liability</p>
                    <p className="pb-5 pl-5">6.1. To the extent permitted by law, we 
                    shall not be liable for any indirect, incidental, consequential, or 
                    punitive damages arising out of or related to the purchase or use of 
                    the Products.</p>




               </div>

            </div>

        </main>
        </>
    )
}

export default Terms;