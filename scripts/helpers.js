import chalk from "chalk";

const SPACE = " ";
const bold = chalk.bold;
const errorText = chalk.red;
const infoText = chalk.blueBright;
const warnText = chalk.yellow;
const heading = chalk.bold.redBright;

export {
	log,
	bold,
	heading,
	errorBox,
	errorText,
	infoBox,
	infoText,
	warnBox,
	warnText,
};

function log(message) {
	// eslint-disable-next-line no-console
	console.log(message.trim() + "\n");
}

function errorBox(text) {
	const backgroundColor = "bgRed";
	const foregroundColor = "white";

	const icon = "[-]";
	const iconAndText = `${icon} ${text.trim()}`;

	return box({backgroundColor, foregroundColor, children: iconAndText});
}

function infoBox(text) {
	const backgroundColor = "bgBlue";
	const foregroundColor = "white";

	const icon = "(i)";
	const iconAndText = `${icon} ${text.trim()}`;

	return box({backgroundColor, foregroundColor, children: iconAndText});
}

function warnBox(text) {
	const backgroundColor = "bgYellowBright";
	const foregroundColor = "black";

	const icon = "[!]";
	const iconAndText = `${icon} ${text.trim()}`;

	return box({backgroundColor, foregroundColor, children: iconAndText});
}

function box(props) {
	const {
		backgroundColor = "bgRed",
		foregroundColor = "white",
		children,
	} = props;

	const lines = children.trim().split("\n");
	const width = lines.reduce((numberOfCharacters, currentLine) => {
		return currentLine.length > numberOfCharacters
			? currentLine.length
			: numberOfCharacters;
	}, 0);

	return `
${chalk[backgroundColor](`${SPACE}${SPACE.repeat(width)}${SPACE}`)}
${lines
	.map((line) =>
		chalk[backgroundColor][foregroundColor](
			`${SPACE}${line.padEnd(width, SPACE)}${SPACE}`,
		),
	)
	.join("\n")}
${chalk[backgroundColor](`${SPACE}${SPACE.repeat(width)}${SPACE}`)}
  `.trim();
}
