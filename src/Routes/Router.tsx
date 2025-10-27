import DefaultLayout from "@/layouts/DefaultLayout";
import { Home } from "@/pages/home";
import { StudentDetails } from "@/pages/StudentDetails";
import { Students } from "@/pages/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
