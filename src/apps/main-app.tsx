import MainAppRoot from "./main-app/main-app-root.js";
import MainAppShell from "./main-app/main-app-shell.js";

export default MainApp;

/*
 * All apps, including the main app, should have a:
 * - shell for functionality
 * - root for UI
 */

function MainApp() {
	return (
		<MainAppShell>
			<MainAppRoot />
		</MainAppShell>
	);
}
