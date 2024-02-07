interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  onChange: (value: string) => void;
  defaultValue: string;
  selectedValue: string;
  options: Option[];
}

const Select = ({
  onChange,
  defaultValue,
  selectedValue,
  options,
}: SelectProps) => {
  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
      }}
      id="optionSelect"
      className="rounded-lg bg-blue-400 px-4 py-2 text-xl text-white font-bold hover:bg-blue-500 cursor-pointer"
    >
      <option value="" selected={selectedValue === ""}>
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option
          key={index}
          selected={selectedValue === option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
