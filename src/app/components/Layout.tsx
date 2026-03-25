import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="size-full flex bg-[#1e1e1e] text-white overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}
