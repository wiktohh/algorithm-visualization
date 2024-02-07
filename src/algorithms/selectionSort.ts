const selectionSort = async (
  data: number[],
  setData: (data: number[]) => void,
  setSortingIndex: (index: number | null) => void,
  speedRef: React.MutableRefObject<number>
) => {
  const n = data.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      const speed = speedRef.current;
      await new Promise((resolve) => setTimeout(resolve, speed));
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
      setSortingIndex(j);
    }

    [data[i], data[minIndex]] = [data[minIndex], data[i]];
    setSortingIndex(i);
    setData([...data]);
  }
};

export default selectionSort;
