const bubbleSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void
) => {
  const n = data.length;
  const updatedBars = [...data];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setSortingIndex(j);
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (updatedBars[j] > updatedBars[j + 1]) {
        [updatedBars[j], updatedBars[j + 1]] = [
          updatedBars[j + 1],
          updatedBars[j],
        ];
        setData([...updatedBars]);
      }
    }
  }
  setSortingIndex(null);
};

export default bubbleSort;
