import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {
    useGetProductQuery,
    useGetProductSpecificationsQuery
} from "../../features/api/builders/productApi";
import styles from "./Product.module.scss";
import MainDescription from "./subcomponents/MainDescription/MainDescription";
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

  if (isProductLoading || isSpecificationLoading) {
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
        </div>
      </div>
    </div>
  );
};

export default Product;
