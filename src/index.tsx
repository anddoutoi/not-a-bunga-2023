import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./apps/main-app.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MainApp />
	</React.StrictMode>,
);
