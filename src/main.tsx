import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { Provider } from "react-redux";
import store from "./core/state/store";
import { createRouter } from "./router";

const router = createRouter();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
