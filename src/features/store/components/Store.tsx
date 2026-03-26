import * as FeatherIcons from "react-feather";
import { useApp } from "../../../context/AppContext";

function Store() {
  const { setIconId } = useApp();

  return (
    <div className="overflow-y-auto bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <div
        className="grid gap-2.5 p-2.5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))" }}
      >
        {Object.values(FeatherIcons).map((Icon) => (
          <div
            key={Icon.displayName}
            onClick={() => setIconId(Icon.displayName ?? "")}
            className="flex flex-col items-center justify-center p-2.5 cursor-pointer text-neutral-700 dark:text-white rounded-sm bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-black"
          >
            <Icon />
            <span className="text-[0.8rem] mt-2.5 text-center [overflow-wrap:anywhere] text-neutral-700 dark:text-white">
              {Icon.displayName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
