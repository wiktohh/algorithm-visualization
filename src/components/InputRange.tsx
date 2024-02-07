import React, { useState } from "react";

interface InputRangeProps {
  label: string;
  onChange: (value: number) => void;
  step: number;
  values: number[];
  min: number;
  max: number
}

const InputRange = ({ label, onChange, step, values, min, max }: InputRangeProps) => {
  const [value, setValue] = useState(50); // Dodaliśmy stan do przechowywania aktualnej wartości

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label htmlFor="range">{label}</label>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value} // Ustawienie wartości z nowego stanu
          className="slider"
          id="range"
          onChange={handleRangeChange}
        />
        <div className="flex justify-between text-center text-xs">
          {values?.map((val, index) => (
            <span key={index} className="w-1/5">
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputRange;
