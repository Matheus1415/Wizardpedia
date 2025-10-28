import DefaultLayout from "@/layouts/DefaultLayout";
import { Home } from "@/pages/home";
import { Houses } from "@/pages/Houses";
import { StudentDetails } from "@/pages/StudentDetails";
import { Students } from "@/pages/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/students/:house?" element={<Students />} />
          <Route path="/student/:id" element={<StudentDetails />} />
          <Route path="/houses" element={<Houses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
