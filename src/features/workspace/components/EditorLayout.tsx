import Canvas from "../../canvas/components/Canvas";
import Store from "../../store/components/Store";
import Code from "../../properties/components/Code";
import Properties from "../../properties/components/Properties";

interface WorkspaceColumnProps {
  children: React.ReactNode;
}

function WorkspaceColumn({ children }: WorkspaceColumnProps) {
  return (
    <section className="flex min-h-0 overflow-hidden border-t border-neutral-200 bg-neutral-50 dark:border-black dark:bg-neutral-900 md:border-t-0 md:border-l">
      <div className="min-h-0 flex-1">{children}</div>
    </section>
  );
}

function EditorLayout() {
  return (
    <div className="grid h-[100dvh] max-h-[100dvh] overflow-hidden grid-rows-[repeat(3,minmax(0,1fr))] md:grid-rows-none md:grid-cols-[minmax(240px,320px)_minmax(320px,1fr)_minmax(360px,1.1fr)]">
      <WorkspaceColumn>
        <Store />
      </WorkspaceColumn>

      <WorkspaceColumn>
        <div className="h-full overflow-y-auto bg-white dark:bg-neutral-950">
          <Code />
        </div>
      </WorkspaceColumn>

      <WorkspaceColumn>
        <div className="flex h-full min-h-0 flex-col">
          <Canvas className="min-h-0 flex-1" />
          <Properties
            showModes={false}
            borderClassName="border-t border-neutral-200 dark:border-black"
          />
        </div>
      </WorkspaceColumn>
    </div>
  );
}

export default EditorLayout;
