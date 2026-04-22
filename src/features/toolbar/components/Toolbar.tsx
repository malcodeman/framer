import { Link } from "@tanstack/react-router";
import { FiPlus as Plus, FiShoppingBag as ShoppingBag } from "react-icons/fi";
import Theme from "./Theme";

function Toolbar() {
  return (
    <div className="flex justify-center items-center overflow-y-auto p-2.5 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-black transition-colors duration-200 md:flex-col md:justify-start md:border-b-0 md:border-r">
      <Link
        to="/"
        activeProps={{ className: "!text-blue-600" }}
        activeOptions={{ exact: true }}
        className="flex mr-6 text-neutral-700 dark:text-white md:mr-0 md:mb-6"
      >
        <Plus size={16} />
      </Link>
      <Link
        to="/store"
        activeProps={{ className: "!text-blue-600" }}
        className="flex mr-6 text-neutral-700 dark:text-white md:mr-0 md:mb-6"
      >
        <ShoppingBag size={16} />
      </Link>
      <Theme />
    </div>
  );
}

export default Toolbar;
