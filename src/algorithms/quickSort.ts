import { toast } from "react-toastify";
import { isArraySorted } from "./helpers";

export const runQuickSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  speedRef: React.MutableRefObject<number>
) => {
  if (isArraySorted(data)) {
    toast.info("Array is already sorted");
    return;
  }
  await quickSort(data, setData, setSortingIndex, speedRef);
  toast.success("Array has been sorted!");
  setSortingIndex(null);
};

const quickSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  speedRef: React.MutableRefObject<number>,
  low: number = 0,
  high: number = data.length - 1
) => {
  if (low < high) {
    const pi = await partition(
      data,
      setData,
      setSortingIndex,
      low,
      high,
      speedRef
    );
    await Promise.all([
      quickSort(data, setData, setSortingIndex, speedRef, low, pi - 1),
      quickSort(data, setData, setSortingIndex, speedRef, pi + 1, high),
    ]);
  }
};

const partition = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  low: number,
  high: number,
  speedRef: React.MutableRefObject<number>
) => {
  const pivot = data[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    const speed = speedRef.current;
    await new Promise((resolve) => setTimeout(resolve, speed));
    if (data[j] < pivot) {
      i++;
      [data[i], data[j]] = [data[j], data[i]];
      setSortingIndex(j);
      setData([...data]);
    }
  }

  [data[i + 1], data[high]] = [data[high], data[i + 1]];
  setSortingIndex(i + 1);
  setData([...data]);

  return i + 1;
};

export default runQuickSort;
