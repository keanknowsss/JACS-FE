import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    useEffect(() => {
        document.title = "JACS Home";
    }, [])

	return (
		<>
            <Navbar />
			<header>Header</header>
			<main>Main</main>
			<footer>Footer</footer>
		</>
	);
};

export default Home;
