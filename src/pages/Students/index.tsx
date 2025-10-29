import { useStudents } from "@/http/requests/Students/useStudent";
import { houseColors } from "@/styles/houseColors";
import backgroundStudent from "@/assets/image/background-student.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { CatalogPageLayout } from "@/layouts/components/CatalogPageLayout";

export function Students() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const house = params.get("house") ?? undefined;

  const { students, isLoading } = useStudents({ house });
  const navigate = useNavigate();

  return (
    <CatalogPageLayout
      title="Hogwarts Students"
      type="students"
      background={backgroundStudent}
      items={students}
      isLoading={isLoading}
      getColor={(s) => houseColors[s.house as keyof typeof houseColors] || houseColors.default}
      onCardClick={(s) => navigate(`/student/${s.id}`)}
    />
  );
}
