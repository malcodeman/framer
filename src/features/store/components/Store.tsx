import { icons } from "../../../core/icons";
import { useApp } from "../../../context/AppContext";

function Store() {
  const { iconId, setIconId } = useApp();

  return (
    <div className="h-full min-h-0 overflow-y-auto bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <div
        className="grid gap-2.5 p-2.5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))" }}
      >
        {icons.map(({ name, Component }) => (
          <button
            type="button"
            key={name}
            onClick={() => setIconId(name)}
            className={`flex flex-col items-center justify-center rounded-sm border p-2.5 text-neutral-700 transition-colors duration-200 dark:text-white ${
              iconId === name
                ? "border-blue-600 bg-blue-50 dark:bg-neutral-800"
                : "border-neutral-200 bg-white dark:border-black dark:bg-neutral-950"
            }`}
          >
            <Component />
            <span className="text-[0.8rem] mt-2.5 text-center [overflow-wrap:anywhere] text-neutral-700 dark:text-white">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Store;
