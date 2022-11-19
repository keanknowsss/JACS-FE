import "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className="bg-background flex flex-row items-center justify-between text-lightWhite font-body font-medium">
			<div>
				<img src="/assets/images/logo-small.png" width={160} alt="JACS Logo" />
			</div>
			<div className="basis-3/5">
				<ul className="flex justify-between">
					<li className="home">
						<a href="#">Home</a>
					</li>
					<li className="shop">
						<a href="#">Shop</a>
					</li>
					<li className="build-your-pc">
						<a href="#">Build your PC</a>
					</li>
					<li className="forum">
						<a href="#">Forum</a>
					</li>
					<li className="tech-101">
						<a href="#">Tech 101</a>
					</li>
					<li className="repair">
						<a href="#">Repair</a>
					</li>
					<li className="about-us">
						<a href="#">About Us</a>
					</li>
				</ul>
			</div>
			<div className="basis-1/5">
				<div className="float-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 inline-block mx-8"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 inline-block"
          >
            <path d="m20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655-.285 2h-3.562v-2zm-4.847 0v2h-3v-2zm0 3v2h-3v-2zm-4-3v2h-3l-.148.03-.338-2.03zm-2.986 3h2.986v2h-2.653zm7.986 2v-2h3.418l-.285 2z" />
            <circle cx="8.5" cy="19.5" r="1.5" />
            <circle cx="17.5" cy="19.5" r="1.5" />
          </svg>
        </div>
			</div>
		</nav>
	);
};

export default Navbar;
