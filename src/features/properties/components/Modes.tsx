interface ModesProps {
  showCode: boolean;
  setShowCode: (value: boolean) => void;
}

function Modes({ showCode, setShowCode }: ModesProps) {
  const base =
    "text-xs px-2.5 leading-10 cursor-default hover:text-neutral-700 dark:hover:text-white";
  const active = "text-neutral-700 dark:text-white";
  const inactive = "text-neutral-500";

  return (
    <header className="flex items-center border-b border-neutral-200 dark:border-black">
      <span
        className={`${base} ${!showCode ? active : inactive}`}
        onClick={() => setShowCode(false)}
      >
        Design
      </span>
      <span
        className={`${base} ${showCode ? active : inactive}`}
        onClick={() => setShowCode(true)}
      >
        Code
      </span>
    </header>
  );
}

export default Modes;
