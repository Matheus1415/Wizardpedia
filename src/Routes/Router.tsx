import DefaultLayout from "@/layouts/DefaultLayout";
import { Home } from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
