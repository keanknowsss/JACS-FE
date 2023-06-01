import React, { useLayoutEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { AddIcon } from "../../../../../assets/icons";
import StarRating from "../../../../../components/StarRating/StarRating";
import styles from "./AddReviewModal.module.scss";

import { getUserDetail } from "../../../../../features/api/builders/userApi";
import {
	selectCurrentToken,
	selectCurrentUserId,
} from "../../../../../features/slice/userAccessSlice";

const AddForm = React.memo(
	({ rating, setRating, description, setDescription, handleSubmit }) => {
		const handleDescription = (e) => {
			setDescription(e.target.value);
		};

		return (
			<>
				<div className={styles.rating}>
					<span>Rating: </span>
					<StarRating
						modify={true}
						onRating={(rate) => setRating(rate)}
						rating={rating}
					/>
				</div>

				<form
					className={styles.addForm}
					onSubmit={handleSubmit}
				>
					<label>
						<span className={styles.labelDes}>Description:</span>
						<textarea
							className={styles.description}
							placeholder="Write a description..."
							value={description}
							onChange={handleDescription}
						></textarea>
					</label>
					<button className={styles.addReviewBtn}>Add review</button>
				</form>
			</>
		);
	}
);

const NotLoggedIn = () => {
	return <p>Please log in first.</p>;
};

const AddReviewModal = ({ referenceID }) => {
	const [modal, setModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [queryData] = getUserDetail.useLazyQuery();

	const [description, setDescription] = useState("");
	const [userID, setUserID] = useState(null);
	const [rating, setRating] = useState(0);

	const token = useSelector(selectCurrentToken);
	const id = useSelector(selectCurrentUserId);

	useLayoutEffect(() => {
		const getData = async () => {
			if (token && id) {
				const { data, error } = await queryData(id);
				if (!error) {
					setIsLoggedIn(true);
					setUserID(data?.result?.id);
				} else {
					console.log("error in profile name", error?.result);
				}
			}
		};
		getData();
	}, [token, id]);

	const toggleModal = () => {
		setModal(!modal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    toggleModal();
		console.log({
			userID,
			referenceID,
			rating,
			description,
		});
	};

	return (
		<>
			<button
				className={styles.addBtn}
				onClick={toggleModal}
			>
				<AddIcon className={styles.addIcon} />
				Add a Review
			</button>

			{modal && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<h2>Add a Review</h2>
						<span className={styles.divider}></span>

						{isLoggedIn ? (
							<AddForm
								rating={rating}
								setRating={setRating}
								description={description}
								setDescription={setDescription}
								handleSubmit={handleSubmit}
							/>
						) : (
							<NotLoggedIn />
						)}
						<button
							className={styles.closeBtn}
							onClick={toggleModal}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default AddReviewModal;
