const insertionSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void
) => {
  const updatedBars = [...data];
  for (let i = 1; i < updatedBars.length; i++) {
    const key = updatedBars[i];
    let j = i - 1;
    while (j >= 0 && updatedBars[j] > key) {
      setSortingIndex(j);
      updatedBars[j + 1] = updatedBars[j];
      setData([...updatedBars]);
      await new Promise((resolve) => setTimeout(resolve, 5));
      j = j - 1;
    }
    updatedBars[j + 1] = key;
    setData([...updatedBars]);
    await new Promise((resolve) => setTimeout(resolve, 5));
  }
};

export default insertionSort;
