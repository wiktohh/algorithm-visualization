export function swap(array: number[], indexA: number, indexB: number) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
  return array;
}

export const isArraySorted = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};
