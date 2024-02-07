const mergeSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  low: number = 0,
  high: number = data.length - 1
) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);

    await Promise.all([
      mergeSort(data, setData, setSortingIndex, low, mid),
      mergeSort(data, setData, setSortingIndex, mid + 1, high),
    ]);
    await merge(data, setData, setSortingIndex, low, mid, high);
  }
};

const merge = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  low: number,
  mid: number,
  high: number
) => {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  const leftArray = new Array(n1);
  const rightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = data[low + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = data[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = low;

  while (i < n1 && j < n2) {
    await new Promise((resolve) => setTimeout(resolve, 5));
    if (leftArray[i] <= rightArray[j]) {
      setSortingIndex(k);
      data[k] = leftArray[i];
      i++;
    } else {
      setSortingIndex(k);
      data[k] = rightArray[j];
      j++;
    }
    setData([...data]);
    k++;
  }

  while (i < n1) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    setSortingIndex(k);
    data[k] = leftArray[i];
    setData([...data]);
    i++;
    k++;
  }

  while (j < n2) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    setSortingIndex(k);
    data[k] = rightArray[j];
    setData([...data]);
    j++;
    k++;
  }
};

export default mergeSort;
