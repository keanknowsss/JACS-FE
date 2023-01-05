import { HomeCarousel } from "../components/Carousel";
import { HomeCarouselData } from "../utils";
import { ProductCard } from "../components/Card";

import { JACSLogo } from "../assets/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectHasData } from "../features/slice/userAccessSlice";

const Home = ({ title }) => {
	document.title = title;

	const hasData = useSelector(selectHasData);

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location?.state?.fromLogin && !hasData) {
			navigate("/user/information", {
				state: { fromLogin: location.state.fromLogin },
			});
		}
	});

	return (
		<main className="px-5 py-3 grid grid-cols-1 lg:grid-cols-4 grid-rows-3 gap-3 w-full h-full justify-center items-center bg-primary-default box-border">
			<section
				aria-label="home carousel"
				className="col-span-1 lg:col-span-2 row-span-3 w-full h-full rounded-t-md lg:rounded-l-md lg:rounded-tr-none"
			>
				<div className="bg-background w-full h-screen lg:h-full shadow-md rounded-md">
					<HomeCarousel categories={HomeCarouselData} />
				</div>
			</section>

			<div className="col-span-1 lg:col-span-2 row-span-1 p-3 lg:p-0 bg-background w-full h-full flex justify-center items-center rounded-md">
				<JACSLogo />
			</div>

			<div className="col-span-1 lg:col-span-2 row-span-1 bg-background w-full h-full rounded-md">
				<p className="text-white text-2xl font-serif font-bold py-3 pl-3">
					Most Bought items
				</p>
				<div className="rounded-md flex flex-row justify-center items-center">
					<div>
						<ProductCard />
					</div>
					<div>
						<ProductCard />
					</div>
					<div>
						<ProductCard />
					</div>
				</div>
			</div>

			<div className="col-span-1 lg:col-span-2 row-span-1 bg-background w-full h-full rounded-md">
				<p className="text-white text-3xl font-serif font-bold py-3 pl-3">
					Trending items
				</p>
				<div className="rounded-md flex flex-row justify-center items-center">
					<div>
						<ProductCard />
					</div>
					<div>
						<ProductCard />
					</div>
					<div>
						<ProductCard />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
