/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { IconSelectionProvider } from "../features/icon-browser/context/icon-selection-context";
import appCss from "../index.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  component: function Root() {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <IconSelectionProvider>
          <Outlet />
        </IconSelectionProvider>
      </ThemeProvider>
    );
  },
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
