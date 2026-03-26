import { createFileRoute } from "@tanstack/react-router";
import Toolbar from "../features/toolbar/components/Toolbar";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

export const Route = createFileRoute("/")({
  component: function IndexRoute() {
    return (
      <div className="grid grid-rows-[40px_40vh_auto] h-screen md:grid-rows-none md:grid-cols-[40px_1fr_222px]">
        <Toolbar />
        <Canvas />
        <Properties />
      </div>
    );
  },
});
