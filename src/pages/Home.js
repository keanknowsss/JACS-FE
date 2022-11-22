import { useEffect } from "react";

import { Footer } from "../components/Footer"

const Home = () => {
    useEffect(() => {
        document.title = "JACS Home";
    }, [])

	return (
		<>
			<header>Header</header>
			<main>Main</main>
			<Footer />
		</>
	);
};

export default Home;
