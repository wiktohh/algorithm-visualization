import { useEffect, useState } from "react";
import Header from "./components/Header";
import Select from "./components/Select";
import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";
import quickSort from "./algorithms/quickSort";
import { options, SORT } from "./contants";
import mergeSort from "./algorithms/mergeSort";

function App() {
  const [data, setData] = useState<number[]>([]);
  const [sortingIndex, setSortingIndex] = useState<number | null>(null);
  const [algorithm, setAlgorithm] = useState("");

  const runAlgorithm = async () => {
    switch (algorithm) {
      case SORT.BUBBLE:
        await bubbleSort(data, setData, setSortingIndex);
        break;
      case SORT.INSERTION:
        await insertionSort(data, setData, setSortingIndex);
        break;
      case SORT.QUICK:
        await quickSort(data, setData, setSortingIndex);
        break;
      case SORT.MERGE:
        await mergeSort(data, setData, setSortingIndex);
        break;
      default:
        break;
    }
  };

  const generateData = () => {
    const newData = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 90) + 10
    );
    setData(newData);
    setSortingIndex(null);
  };

  useEffect(() => {
    generateData();
  }, []);

  const maxItem = Math.max(...data);

  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="flex justify-center items-center space-x-4 my-4">
        <button
          className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-white font-bold text-lg"
          onClick={generateData}
        >
          Randomize Data
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-white font-bold text-lg"
          onClick={runAlgorithm}
        >
          Run Algorithm
        </button>
        <Select
          label="Choose an algorithm"
          onChange={(val) => {
            setAlgorithm(val);
          }}
          defaultValue="Choose an algorithm"
          selectedValue=""
          options={options}
        />
      </div>

      <div className="flex justify-center items-end h-1/2 space-x-[1px]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              sortingIndex === index ? "bg-red-500" : "bg-blue-500"
            } w-[10px]`}
            style={{ height: `${(item / maxItem) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
