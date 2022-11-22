import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Home = () => {
    useEffect(() => {
        document.title = "JACS Home";
    }, [])

	return (
		<>
            <Navbar />
			<header>Header</header>
			<main>Main</main>
			<Footer />
		</>
	);
};

export default Home;
