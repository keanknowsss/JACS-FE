import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  useGetProductQuery,
  useGetProductSpecificationsQuery
} from "../../features/api/builders/productApi";
import { useGetAllReviewsOfRefQuery, useGetReviewStatisticsQuery } from "../../features/api/builders/reviewApi";
import styles from "./Product.module.scss";
import MainDescription from "./subcomponents/MainDescription/MainDescription";
import Ratings from "./subcomponents/Ratings/Ratings";
import Reviews from "./subcomponents/Reviews/Reviews";
import Specification from "./subcomponents/Specification/Specification";

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

  // Get product reviews
  const {
    data: reviews,
    error: reviewError,
    isLoading: isReviewLoading,
  } = useGetAllReviewsOfRefQuery(productId);

  // Get product review statistics
  const {
    data: reviewStats,
    error: reviewStatsError,
    isLoading: isStatsLoading,
  } = useGetReviewStatisticsQuery(productId);

  if (isProductLoading || isSpecificationLoading || isReviewLoading || isStatsLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const productDetails = {
    details: { ...product["result"] },
    specifications: { ...specifications["result"] },
    reviews: {...reviews["result"]},
  };

  if (reviewStats) {
    productDetails.stats = {...reviewStats["result"]}
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
            <Specification {...productDetails}/>
            <Ratings {...productDetails.stats}/>           
        </div>
        
        <Reviews {...productDetails.reviews} />
      </div>
    </div>
  );
};

export default Product;
