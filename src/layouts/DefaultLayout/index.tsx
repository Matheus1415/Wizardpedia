import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="default-layout">
      <h1>Ola mundo</h1>
      <Outlet />
    </div>
  );
}
