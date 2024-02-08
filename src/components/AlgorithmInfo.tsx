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
      <div className="flex justify-between">
        <p>Stability: {props.stability}</p>
        <p>In place: {props.inPlace}</p>
      </div>

      <div className="flex justify-between">
        <div>
          Best case <p>{props.bestCase}</p>
        </div>
        <div>
          Average case <p>{props.averageCase}</p>
        </div>
        <div>
          Worst case <p>{props.worstCase}</p>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmInfo;