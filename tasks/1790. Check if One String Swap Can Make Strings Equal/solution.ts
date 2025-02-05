export function areAlmostEqual(s1: string, s2: string): boolean {
	if (s1 === s2) return true;

	let swapMap = new Map<string, string>();
	let amountOfRequiredSwaps = 0;

	for (let i = 0; i < s1.length; i++) {
		if (s1[i] === s2[i]) continue;

		if (swapMap.has(s2[i]) && swapMap.get(s2[i]) === s1[i]) {
			swapMap.delete(s2[i]);
			++amountOfRequiredSwaps;
		} else {
			swapMap.set(s1[i], s2[i]);
		}
	}

	return swapMap.size === 0 && amountOfRequiredSwaps <= 1;
}
