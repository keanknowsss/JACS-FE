import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "JACS Home";
    }, [])

	return (
		<>
			<header>Header</header>
			<main>Main</main>
			<footer>Footer</footer>
		</>
	);
};

export default Home;
