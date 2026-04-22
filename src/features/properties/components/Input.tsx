import {
  FiChevronDown as ChevronDown,
  FiChevronUp as ChevronUp,
} from "react-icons/fi";

interface InputProps {
  value: string | number;
  handleSetValue: (value: string | number) => void;
  operators?: boolean;
}

function Input({ value, handleSetValue, operators = false }: InputProps) {
  return (
    <div className="group grid grid-cols-[1fr_auto] items-center h-6 rounded-sm bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-black focus-within:border-blue-600 transition-colors duration-200">
      <input
        type="text"
        value={value}
        className="text-xs w-full h-full cursor-default border-0 px-1 bg-transparent text-neutral-700 dark:text-white outline-none"
        onFocus={(e) => e.target.select()}
        onChange={(e) => handleSetValue(e.currentTarget.value)}
      />
      {operators && (
        <div className="flex flex-col px-1 h-full invisible group-hover:visible justify-between text-neutral-700 dark:text-white bg-white dark:bg-neutral-700 border-l border-neutral-200 dark:border-black">
          <ChevronUp
            size={10}
            className="cursor-pointer"
            onClick={() => handleSetValue(Number(value) + 1)}
          />
          <ChevronDown
            size={10}
            className="cursor-pointer"
            onClick={() => handleSetValue(Number(value) - 1)}
          />
        </div>
      )}
    </div>
  );
}

export default Input;
