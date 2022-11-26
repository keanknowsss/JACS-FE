/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#121416",
				lightWhite: "#EFEFEF",
				primary: {
					default: "#1E2126",
					1: "#6B728E",
					2: "#50577A",
					3: "#474E68",
					4: "#404258",
					5: "#333840",
				},
				secondary: {
					default: "#F66B0E",
					light: "#F19B61",
				},
				accent: {
					1: "#112B3C",
					2: "#205375",
				}
			},
			fontFamily: {
				montserrat: ["Montserrat"],
				catamaran: ["Catamaran"],
				roboto: ["Roboto"]
			},
			spacing: {
				13: "3.25rem",
				15: "3.75rem",
				22: "5.5rem",
				23: "5.75rem",
			},
		},
	},
	plugins: [],
};
