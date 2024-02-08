interface AlgorithmInfoProps {
  title: string;
  description: string;
  stability: string;
  inPlace: string;
  bestCase: string;
  averageCase: string;
  worstCase: string;
}

const AlgorithmInfo = (props: AlgorithmInfoProps) => {
  return (
    <div className="absolute border md:right-full md:rounded-tr-none border-gray-300 rounded-3xl lg:rounded-tl-none lg:rounded-tr-3xl flex flex-col justify-between space-y-4 lg:left-full bg-gray-200 p-4 w-max max-w-96">
      <h3 className="text-xl text-center font-bold ">{props.title}</h3>
      <p>{props.description}</p>
      <div className="flex justify-around">
        <div>
          Stability<p className="text-center">{props.stability}</p>
        </div>
        <div>
          In place<p className="text-center">{props.inPlace}</p>
        </div>
      </div>
      <p className="font-bold text-lg text-center">Time Complexity (O)</p>
      <div className="flex justify-between">
        <div>
          Best case <p className="text-center">{props.bestCase}</p>
        </div>
        <div>
          Average case <p className="text-center">{props.averageCase}</p>
        </div>
        <div>
          Worst case <p className="text-center">{props.worstCase}</p>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmInfo;
