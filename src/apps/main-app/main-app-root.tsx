import {memo as memoizeComponent, useState} from "react";
import reactLogo from "../../assets/react.svg";
import "./main-app-root.css";

export default memoizeComponent(MainAppRoot);

/*
 * The purpose of this component is to render the frame and the initial routes of the app.
 *
 * TL;DR:
 * Do: Add ui components here
 * Do NOT: Add provider components here
 */

function MainAppRoot() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/apps/main-app/main-app-root.tsx</code> and save to test
					HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}
