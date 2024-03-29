import React from "react";

interface InputRangeProps {
  label: string;
  onChange: (value: number) => void;
  step: number;
  values: number[];
  min: number;
  max: number;
  defaultValue: number;
  isSorting?: boolean;
}

const InputRange = ({
  label,
  onChange,
  step,
  values,
  min,
  max,
  defaultValue,
  isSorting,
}: InputRangeProps) => {
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    onChange(newValue);
  };

  return (
    <div className="w-3/4 md:w-1/6">
      <label htmlFor="range">{label}</label>
      <div>
        <input
          disabled={isSorting}
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          className={`w-full ${
            isSorting ? "cursor-not-allowed" : "cursor-grab"
          }`}
          id="range"
          onChange={handleRangeChange}
        />
        <div className="flex justify-between text-center text-xs">
          {values?.map((val, index) => (
            <span key={index} className="w-1/8">
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputRange;
