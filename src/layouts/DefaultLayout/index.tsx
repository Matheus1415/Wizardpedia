import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function DefaultLayout() {
  return (
    <div className="default-layout">
      <Header/>
      <Outlet />
    </div>
  );
}
