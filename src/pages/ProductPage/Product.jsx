import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  useGetProductQuery,
  useGetProductSpecificationsQuery
} from "../../features/api/builders/productApi";
import { useGetReviewStatisticsQuery } from "../../features/api/builders/reviewApi";
import styles from "./Product.module.scss";
import MainDescription from "./subcomponents/MainDescription/MainDescription";
import Ratings from "./subcomponents/Ratings/Ratings";
import Reviews from "./subcomponents/Reviews/Reviews";

const Product = () => {
  const { productId } = useParams();

  // Get product by id
  const {
    data: product,
    error: productError,
    isLoading: isProductLoading,
  } = useGetProductQuery(productId);

  // Get product specification
  const {
    data: specifications,
    error: specificationError,
    isLoading: isSpecificationLoading,
  } = useGetProductSpecificationsQuery(productId);

  // Get product review statistics
  const {
    data: reviewStats,
    error: reviewStatsError,
    isLoading: isStatsLoading,
  } = useGetReviewStatisticsQuery(productId);

  if (isProductLoading || isSpecificationLoading || isStatsLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const productDetails = {
    details: { ...product["result"] },
    specifications: { ...specifications["result"] },
  };

  if (reviewStats) {
    productDetails.stats = { ...reviewStats["result"] };
  }

  document.title = `${productDetails.details.name} - JACS`;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.smallRatingCommentView}>
          {/* Average stars and total reviews */}
        </div>

        <MainDescription {...productDetails} />

        <div className={styles.subPart}>
          <div className={styles.description}>
            <h1 className={styles.headerDescription}>Description</h1>
            <div className={styles.descriptionText}>
              <p>{productDetails.details.description}</p>
            </div>
          </div>
          {/* <Specification {...productDetails} /> */}
          <Ratings {...productDetails.stats} />
        </div>

        <Reviews productId={productId} />
      </div>
    </div>
  );
};

export default Product;
