import { FiMinus as Minus, FiPlus as Plus } from "react-icons/fi";

interface PanelTitleProps {
  title: string;
  expanded?: boolean;
  setExpanded: (expanded: boolean) => void;
}

function PanelTitle({ title, expanded = false, setExpanded }: PanelTitleProps) {
  return (
    <div className="h-[26px] flex items-center justify-between px-2.5 bg-white dark:bg-neutral-700 text-neutral-700 dark:text-white transition-colors duration-200">
      <h2 className="text-xs font-normal">{title}</h2>
      {expanded ? (
        <Minus
          size={12}
          className="cursor-pointer"
          onClick={() => setExpanded(false)}
        />
      ) : (
        <Plus
          size={12}
          className="cursor-pointer"
          onClick={() => setExpanded(true)}
        />
      )}
    </div>
  );
}

export default PanelTitle;
