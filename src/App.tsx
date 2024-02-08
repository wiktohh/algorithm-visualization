import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Select from "./components/Select";
import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";
import quickSort from "./algorithms/quickSort";
import { options, SORT, algorithmInfo } from "./contants";
import mergeSort from "./algorithms/mergeSort";
import selectionSort from "./algorithms/selectionSort";
import InputRange from "./components/InputRange";
import { FaInfoCircle } from "react-icons/fa";
import AlgorithmInfo from "./components/AlgorithmInfo";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState<number[]>([]);
  const [sortingIndex, setSortingIndex] = useState<number | null>(null);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [algorithmInformation, setAlgorithmInformation] = useState(
    algorithmInfo[0]
  );
  const speedRef = useRef(50);
  const [barCount, setBarCount] = useState(90);
  const [showInfo, setShowInfo] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

  const runAlgorithm = async () => {
    setIsSorting(true);
    switch (algorithm) {
      case SORT.BUBBLE:
        await bubbleSort(data, setData, setSortingIndex, speedRef);
        break;
      case SORT.INSERTION:
        await insertionSort(data, setData, setSortingIndex, speedRef);
        break;
      case SORT.QUICK:
        await quickSort(data, setData, setSortingIndex, speedRef);
        break;
      case SORT.MERGE:
        await mergeSort(data, setData, setSortingIndex, speedRef);
        break;
      case SORT.SELECTION:
        await selectionSort(data, setData, setSortingIndex, speedRef);
        break;
      default:
        break;
    }
    setIsSorting(false);
  };

  const setAlgorithmInfo = (val: string) => {
    switch (val) {
      case SORT.BUBBLE:
        setAlgorithmInformation(algorithmInfo[0]);
        break;
      case SORT.INSERTION:
        setAlgorithmInformation(algorithmInfo[1]);
        break;
      case SORT.QUICK:
        setAlgorithmInformation(algorithmInfo[2]);
        break;
      case SORT.MERGE:
        setAlgorithmInformation(algorithmInfo[3]);
        break;
      case SORT.SELECTION:
        setAlgorithmInformation(algorithmInfo[4]);
        break;
    }
  };
  const generateData = () => {
    const newData = Array.from(
      { length: barCount },
      () => Math.floor(Math.random() * 90) + 10
    );
    setData(newData);
    setSortingIndex(null);
  };

  useEffect(() => {
    generateData();
  }, [barCount]);

  const maxItem = Math.max(...data);

  return (
    <div className="h-screen w-screen">
      <Header />
      <ToastContainer />
      <div className="flex flex-col space-y-4 w-3/4 mx-auto my-4 md:w-auto md:space-y-0 md:flex-row md:justify-center md:items-center md:space-x-4">
        <button
          className={`bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-white font-bold text-lg ${
            isSorting && "cursor-not-allowed"
          }`}
          onClick={generateData}
          disabled={isSorting}
        >
          Randomize Data
        </button>
        <button
          className={`bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-white font-bold text-lg ${
            isSorting && "cursor-not-allowed"
          }`}
          onClick={runAlgorithm}
          disabled={isSorting}
        >
          Run Algorithm
        </button>
        <Select
          label="Choose an algorithm"
          isSorting={isSorting}
          onChange={(val) => {
            setAlgorithm(val);
            setAlgorithmInfo(val);
          }}
          selectedValue=""
          options={options}
        />
        <div className="relative hidden md:block">
          <FaInfoCircle
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            className="text-4xl text-blue-400 hover:text-blue-500"
          />
          {showInfo && algorithmInfo && (
            <AlgorithmInfo
              title={algorithmInformation.name}
              description={algorithmInformation.description}
              stability={algorithmInformation.details.stability}
              inPlace={algorithmInformation.details.inPlace}
              bestCase={algorithmInformation.details.timeComplexity.bestCase}
              averageCase={
                algorithmInformation.details.timeComplexity.averageCase
              }
              worstCase={algorithmInformation.details.timeComplexity.worstCase}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center md:space-x-24 my-4">
        <InputRange
          label="Speed (ms)"
          onChange={(val) => (speedRef.current = val)}
          step={25}
          values={[0, 25, 50, 75, 100]}
          min={0}
          max={100}
          defaultValue={speedRef.current}
        />
        <InputRange
          label="Bar Count"
          onChange={(val) => setBarCount(val)}
          step={40}
          values={[10, 50, 90, 130, 170]}
          min={10}
          max={170}
          defaultValue={barCount}
          isSorting={isSorting}
        />
      </div>
      <div className="w-3/4 m-auto flex justify-center items-end h-1/2 space-x-[1px]">
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
