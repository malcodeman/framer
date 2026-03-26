import { createFileRoute } from "@tanstack/react-router";
import Toolbar from "../features/toolbar/components/Toolbar";
import Store from "../features/store/components/Store";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

export const Route = createFileRoute("/store")({
  component: function StoreRoute() {
    return (
      <div className="grid grid-rows-[40px_auto_40vh_auto] h-screen md:grid-rows-none md:grid-cols-[40px_1fr_2fr_222px]">
        <Toolbar />
        <Store />
        <Canvas />
        <Properties />
      </div>
    );
  },
});
