const fact = (n: number) => {
  let result = 1;
  
  if (n === 0) return result;
  
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

export function tupleSameProduct(nums: number[]): number {
    const multiplyMap = new Map<number, number>();
    let amountOfEqualities = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        multiplyMap.set(nums[i] * nums[j], (multiplyMap.get(nums[i] * nums[j]) ?? 0) + 1);
      }      
    }

    for (const value of multiplyMap.values()) {
      if (value < 2) continue;

      amountOfEqualities += fact(value) / fact(value - 2) / 2;
    }

    return amountOfEqualities * 8;
};