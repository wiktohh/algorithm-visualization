import { toast } from "react-toastify";
import { isArraySorted } from "./helpers";

const bubbleSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  speedRef: React.MutableRefObject<number>
) => {
  const n = data.length;
  const updatedBars = [...data];

  if (isArraySorted(updatedBars)) {
    toast.info("Array is already sorted");
    return;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const speed = speedRef.current;
      await new Promise((resolve) => setTimeout(resolve, speed));
      if (updatedBars[j] > updatedBars[j + 1]) {
        setSortingIndex(j + 1);
        [updatedBars[j], updatedBars[j + 1]] = [
          updatedBars[j + 1],
          updatedBars[j],
        ];
        setData([...updatedBars]);
      }
    }
  }
  setSortingIndex(null);
  toast.success("Array has been sorted!");
};

export default bubbleSort;
