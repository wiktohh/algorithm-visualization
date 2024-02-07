const insertionSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  speedRef: React.MutableRefObject<number>
) => {
  const updatedBars = [...data];
  for (let i = 1; i < updatedBars.length; i++) {
    const key = updatedBars[i];
    let j = i - 1;
    while (j >= 0 && updatedBars[j] > key) {
      setSortingIndex(j);
      updatedBars[j + 1] = updatedBars[j];
      setData([...updatedBars]);
      const speed = speedRef.current;
      await new Promise((resolve) => setTimeout(resolve, speed));
      j = j - 1;
    }
    updatedBars[j + 1] = key;
    setData([...updatedBars]);
    const speed = speedRef.current;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

export default insertionSort;
