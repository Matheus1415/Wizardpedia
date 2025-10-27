import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function DefaultLayout() {
  return (
    <main className="default-layout bg-dark p-4">
      <Header/>
      <Outlet />
    </main>
  );
}
