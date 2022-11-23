import { useEffect } from "react";

import { Footer } from "../components/Footer"

const Home = () => {
    useEffect(() => {
        document.title = "JACS Home";
    }, [])

	return (
		<>
			<div className="flex flex-col h-screen bg-background">
				<main className="flex flex-row justify-between items-center w-full h-full p-3">

					<div className="bg-gray-800 w-full h-full ">
						Carousel
					</div>

					<div className="flex flex-col bg-gray-800 w-full h-full ">
						<div className="">
							Title
						</div>
						<div className="">
							Most Bought Items
						</div>
						<div className="">
							Trending Builds
						</div>
					</div>

				</main>
				<Footer />
			</div>			
		</>
	);
};

export default Home;
