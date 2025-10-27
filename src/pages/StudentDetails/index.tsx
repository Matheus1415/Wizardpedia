import { useParams, Link } from "react-router-dom";
import { BackgroundImage, Card, Skeleton } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { useStudentDetails } from "@/http/requests/Students/useStudentDetails";
import backgroundStudentDetails from "@/assets/image/backgroud-student-details.jpg";
import { StudentCard } from "./components/StudentCard";

export function StudentDetails() {
  const { id } = useParams<{ id: string }>();
  const { student, isLoading } = useStudentDetails(id!);

  return (
    <BackgroundImage
      src={backgroundStudentDetails}
      radius={0}
      style={{ height: "95vh", width: "100%", overflowY: "auto" }}
      className="d-flex align-items-center justify-content-center p-4"
    >
      <div className="container text-center mt-4">
        <Link
          to="/students"
          className="text-decoration-none text-white d-flex align-items-center gap-2 mb-3"
        >
          <ArrowLeft size={18} />
          <span>Voltar</span>
        </Link>

        {isLoading ? (
          <Card
            shadow="xl"
            radius="lg"
            p="lg"
            className="mx-auto"
            style={{
              width: "80%",
              maxWidth: 900,
              backgroundColor: "#1a1a1a90",
            }}
          >
            <Skeleton height={300} mb="md" />
            <Skeleton height={20} width="60%" mb="sm" />
            <Skeleton height={20} width="80%" mb="sm" />
            <Skeleton height={20} width="50%" />
          </Card>
        ) : (
          student && <StudentCard student={student} />
        )}
      </div>
    </BackgroundImage>
  );
}
