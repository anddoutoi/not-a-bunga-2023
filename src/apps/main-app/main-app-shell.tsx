import {Fragment, type ReactNode} from "react";

export default MainAppShell;

/*
 * The purpose of this component is to provide your app with functionality.
 * Add providers for state and 3rd party dependencies to this component.
 *
 * TL;DR:
 * Do: Add provider components here
 * Do NOT: Add ui components here
 */

interface MainAppShellProps {
	children: ReactNode;
}

function MainAppShell(props: MainAppShellProps) {
	const {children} = props;

	return <Fragment>{children}</Fragment>;
}
