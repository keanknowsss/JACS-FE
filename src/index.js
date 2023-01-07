import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./routes";
import { store, persistor } from "./features/store";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Navigation />
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
