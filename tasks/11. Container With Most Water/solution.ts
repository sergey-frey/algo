const findFirstAndLastValuableLines = (
	height: number[],
	currentWaterLevel: number,
	findFrom: number,
	findTo: number
) => {
	let firstValuableLineIndex = -1;
	let lastValuableLineIndex = -1;

	for (let i = findFrom; i <= findTo; ++i) {
		if (height[i] < currentWaterLevel) continue;

		firstValuableLineIndex = i;
		break;
	}

	for (let i = findTo; i >= findFrom; --i) {
		if (height[i] < currentWaterLevel) continue;

		lastValuableLineIndex = i;
		break;
	}

	return { firstValuableLineIndex, lastValuableLineIndex };
};

export function maxArea(height: number[]): number {
	let result = 0;
	let currentWaterLevel = 0;
	let firstValuableLineIndex = 0;
	let lastValuableLineIndex = height.length - 1;

	do {
		const indexes = findFirstAndLastValuableLines(
			height,
			currentWaterLevel,
			firstValuableLineIndex,
			lastValuableLineIndex
		);

		firstValuableLineIndex = indexes.firstValuableLineIndex;
		lastValuableLineIndex = indexes.lastValuableLineIndex;

		result = Math.max(
			result,
			currentWaterLevel * (lastValuableLineIndex - firstValuableLineIndex)
		);

		++currentWaterLevel;
	} while (firstValuableLineIndex !== -1 && lastValuableLineIndex !== -1);

	return result;
}
