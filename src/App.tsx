import { useEffect, useState } from "react";
import Header from "./components/Header";
import Select from "./components/Select";
import bubbleSort from "./algorithms/bubbleSort";
import { options } from "./contants";

function App() {
  const [data, setData] = useState<number[]>([]);
  const [sortingIndex, setSortingIndex] = useState<number | null>(null);
  const [algorithm, setAlgorithm] = useState("");

  const generateData = () => {
    const newData = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 90) + 10
    );
    setData(newData);
  };

  useEffect(() => {
    generateData();
  }, []);

  const maxItem = Math.max(...data);

  const bubbleSortHandler = async () => {
    await bubbleSort(data, setData, setSortingIndex);
  };

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
          onClick={bubbleSortHandler}
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

      <div className="flex justify-center items-end h-1/2 space-x-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              sortingIndex === index ? "bg-red-500" : "bg-blue-500"
            } w-12`}
            style={{ height: `${(item / maxItem) * 100}%` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
