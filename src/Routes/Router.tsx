import DefaultLayout from "@/layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div>Home Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
