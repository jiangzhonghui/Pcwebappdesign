import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LauncherPage } from "./pages/LauncherPage";
import { AgentsPage } from "./pages/AgentsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LauncherPage },
      { path: "launcher", Component: LauncherPage },
      { path: "agents", Component: AgentsPage },
    ],
  },
]);
