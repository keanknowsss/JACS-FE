import React from "react";
import { useGetUserDetailQuery } from "../../../features/api/builders/userApi";
import styles from "./ReviewCard.module.scss";

import { HeartIcon, ProfileIcon } from "../../../assets/icons";
import { CircleLoading } from "../../../assets/images";
import StarRating from "../../StarRating/StarRating";

const ReviewCard = (props) => {
  const { _userId, updatedAt, description, stars, likes } = props;

  const {
    data: user,
    error: userError,
    isLoading: isUserLoading,
  } = useGetUserDetailQuery(_userId);

  if (isUserLoading) {
    return (
      <div className={styles.loading}>
        <img src={CircleLoading} className={styles.loadingGif} />
      </div>
    );
  }

  const { firstName, lastName, img } = user["result"];
  const date = new Date(updatedAt);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {img ? (
          <img src={img} className={styles.profileImg}></img>
        ) : (
          <ProfileIcon className={styles.profileImg} />
        )}
        <div className={styles.nameDate}>
          <p className={styles.name}>
            {firstName} {lastName}
          </p>
          <p className={styles.date}>{date.toUTCString()}</p>
        </div>
        <div className={styles.stars}>
          <span>
            <StarRating rating={stars} modify={false} />
          </span>
        </div>
      </div>

      <span className={styles.divider}></span>

      <p className={styles.description}>{description.trim()}</p>

      <button className={styles.btn}>
        <HeartIcon className={styles.heart} /> {likes}
      </button>
    </div>
  );
};

export default ReviewCard;
