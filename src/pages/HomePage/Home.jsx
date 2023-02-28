import { ProductCard } from "../../components/Card";
import { HomeCarousel } from "../../components/Carousel";
import Loading from "../../components/Loading";

import { JACSLogo } from "../../assets/images";
import styles from "./Home.module.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Toast from "../../components/Toast";
import { selectCurrentUserIsVerified } from "../../features/slice/userAccessSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const Home = ({ title }) => {
  document.title = title;

  const isVerified = useSelector(selectCurrentUserIsVerified);

  const [isVerifiedToast, showVerifiedToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const resendVerification = () => {
    console.log("reverify");
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (location?.state?.fromForm) {
      !isVerified && showVerifiedToast(true);
    }
  }, [location, isVerified]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toast
            showToast={isVerifiedToast}
            setShowToast={showVerifiedToast}
            symbol="warning"
            type="linkCallback"
            title="Account is not Verified"
            callback={resendVerification}
            linkText="Send email verification"
          />
          <main className={styles.homeContainer}>
            <div className={styles.homeDiv}>
              {/* <div> */}
              <section
                aria-label="home carousel"
                className={styles.carouselSection}
              >
                <div className={styles.carouselDiv}>
                  <HomeCarousel />
                </div>
              </section>

              <div className={styles.logoSection}>
                <JACSLogo />
              </div>

              <div className={styles.itemsSection}>
                <p className={styles.itemHeading}>Most Bought items</p>
                <div className={styles.cardContainer}>
                  <ProductCard modifierClass={styles.productMod} />
                  <ProductCard modifierClass={styles.productMod} />
                  <ProductCard modifierClass={styles.productMod} />
                </div>
              </div>

              <div className={styles.itemsSection}>
                <p className={styles.itemHeading}>Trending items</p>
                <div className={styles.cardContainer}>
                  <ProductCard modifierClass={styles.productMod} />
                  <ProductCard modifierClass={styles.productMod} />
                  <ProductCard modifierClass={styles.productMod} />
                </div>
              </div>
              {/* </div> */}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Home;
