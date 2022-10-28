import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="bg-[url('assets/bg.jpg')] min-h-screen flex justify-center items-center">
      <Outlet />
    </main>
  );
}
