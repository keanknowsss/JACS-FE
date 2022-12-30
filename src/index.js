import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./routes";
import { store } from "./features/store";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Navigation />
			</Router>
		</Provider>
	</React.StrictMode>
);
