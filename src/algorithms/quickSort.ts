const quickSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  low: number = 0,
  high: number = data.length - 1
) => {
  if (low < high) {
    const pi = await partition(data, setData, setSortingIndex, low, high);

    await Promise.all([
      quickSort(data, setData, setSortingIndex, low, pi - 1),
      quickSort(data, setData, setSortingIndex, pi + 1, high),
    ]);
  }
};

const partition = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  low: number,
  high: number
) => {
  const pivot = data[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    await new Promise((resolve) => setTimeout(resolve, 5));
    if (data[j] < pivot) {
      i++;
      setSortingIndex(j);
      [data[i], data[j]] = [data[j], data[i]];
      setData([...data]);
    }
  }

  [data[i + 1], data[high]] = [data[high], data[i + 1]];
  setData([...data]);

  return i + 1;
};

export default quickSort;
