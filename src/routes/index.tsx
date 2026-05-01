import { createFileRoute } from "@tanstack/react-router";
import EditorLayout from "../features/workspace/components/EditorLayout";

export const Route = createFileRoute("/")({
  component: function IndexRoute() {
    return <EditorLayout />;
  },
});
