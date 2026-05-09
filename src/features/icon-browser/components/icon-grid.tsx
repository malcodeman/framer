import { useIconSelection } from "../context/icon-selection-context";
import { iconRegistry } from "../lib/icons";

function IconGrid() {
  const { selectedIconName, setSelectedIconName } = useIconSelection();

  return (
    <div className="h-full min-h-0 overflow-y-auto bg-neutral-50 transition-colors duration-200 dark:bg-neutral-900">
      <div
        className="grid gap-2.5 p-2.5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))" }}
      >
        {iconRegistry.map(({ name, component: Icon }) => (
          <button
            type="button"
            key={name}
            onClick={() => setSelectedIconName(name)}
            className={`flex flex-col items-center justify-center rounded-sm border p-2.5 text-neutral-700 transition-colors duration-200 dark:text-white ${
              selectedIconName === name
                ? "border-blue-600 bg-blue-50 dark:bg-neutral-800"
                : "border-neutral-200 bg-white dark:border-black dark:bg-neutral-950"
            }`}
          >
            <Icon />
            <span className="mt-2.5 text-center text-[0.8rem] text-neutral-700 [overflow-wrap:anywhere] dark:text-white">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default IconGrid;
