import type { ReactNode } from "react";
import ThemeToggle from "../../theme/components/theme-toggle";
import IconGrid from "./icon-grid";
import IconPreview from "./icon-preview";
import SvgCodePreview from "./svg-code-preview";

interface ColumnProps {
  children: ReactNode;
}

function Column({ children }: ColumnProps) {
  return (
    <section className="flex min-h-0 flex-col overflow-hidden border-t border-neutral-200 bg-neutral-50 dark:border-black dark:bg-neutral-900 md:border-t-0 md:border-l">
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </section>
  );
}

function IconBrowserLayout() {
  return (
    <div className="relative grid h-[100dvh] max-h-[100dvh] overflow-hidden grid-rows-[repeat(3,minmax(0,1fr))] md:grid-rows-none md:grid-cols-[minmax(240px,320px)_minmax(320px,1fr)_minmax(360px,1.1fr)]">
      <div className="absolute right-3 top-3 z-10">
        <ThemeToggle />
      </div>

      <Column>
        <IconGrid />
      </Column>

      <Column>
        <SvgCodePreview />
      </Column>

      <Column>
        <IconPreview className="h-full min-h-0" />
      </Column>
    </div>
  );
}

export default IconBrowserLayout;
