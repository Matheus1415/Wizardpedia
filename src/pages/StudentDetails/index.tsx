import { useParams, Link } from "react-router-dom";
import {
  BackgroundImage,
  Button,
  Card,
  Skeleton,
  Container,
  Stack,
} from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { useStudentDetails } from "@/http/requests/Students/useStudentDetails";
import backgroundStudentDetails from "@/assets/image/background-student-details.jpg";
import { StudentCard } from "./components/StudentCard";
import { StudentNotFound } from "./components/StudentNotFound";

export function StudentDetails() {
  const { id } = useParams<{ id: string }>();
  const { student, isLoading } = useStudentDetails(id!);

  return (
    <BackgroundImage
      src={backgroundStudentDetails}
      radius={0}
      style={{ minHeight: "95vh", width: "100%", overflowY: "auto" }}
      className="d-flex align-items-center justify-content-center p-4"
    >
      <Container size="lg" className="text-center">
        <div className="text-start mb-4">
          <Button
            component={Link}
            to="/students"
            leftSection={<ArrowLeft size={18} />}
            className="p-2 text-white"
          >
            Voltar
          </Button>
        </div>

        {isLoading ? (
          <Card
            shadow="xl"
            radius="lg"
            p="lg"
            className="mx-auto"
            style={{
              width: "100%",
              maxWidth: 900,
              backgroundColor: "#1a1a1a90",
            }}
          >
            <Stack spacing="md">
              <Skeleton height={300} radius="lg" />
              <Skeleton height={28} width="60%" radius="sm" />
              <Skeleton height={22} width="80%" radius="sm" />
              <Skeleton height={22} width="50%" radius="sm" />
              <Skeleton height={22} width="70%" radius="sm" />
            </Stack>
          </Card>
        ) : student ? (
          <StudentCard student={student} />
        ) : (
          <StudentNotFound message="Estudante não encontrado ou dados indisponíveis." />
        )}
      </Container>
    </BackgroundImage>
  );
}
