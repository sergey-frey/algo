export function canJump(nums: number[]): boolean {
	const n = nums.length;
	const variantsArray = Array.from({ length: n }, () => 0);

	variantsArray[0] = 1;

	for (let i = 0; i < n; i++) {
		if (variantsArray[i] === 0) continue;

		const currentJumpLength = nums[i];

		for (let j = 1; j <= currentJumpLength; j++) {
			if (i + j >= n) break;

			variantsArray[i + j] = 1;
		}
	}

	return variantsArray[n - 1] === 1;
}
