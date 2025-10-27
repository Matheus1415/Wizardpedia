import {
  Card,
  Image,
  SimpleGrid,
  Box,
  BackgroundImage,
  ScrollArea,
} from "@mantine/core";
import classes from "./Students.module.css";
import { useStudents } from "@/http/requests/Students/useStudent";
import { houseColors } from "@/styles/houseColors";
import { StudentOverlay } from "./components/StudentOverlay";
import defaultImageStudants from "@/assets/image/default-card-students.jpg";
import backgroundStudent from "@/assets/image/background-student.jpg";
import { StudentsSkeleton } from "./components/StudentsSkeleton";
import { useNavigate } from "react-router-dom";

export function Students() {
  const { students, isLoading } = useStudents();
  const route = useNavigate();

  const getHouseColor = (house?: string) =>
    houseColors[house as keyof typeof houseColors] || houseColors.default;

  return (
    <BackgroundImage
      src={backgroundStudent}
      radius={0}
      style={{ height: "95vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div
        className={classes.StudentsContainer}
      >
        <div className="container mt-4" style={{ flex: 1 }}>
          <h1 className={classes.title}>Hogwarts Students</h1>

          <ScrollArea style={{ height: "450px" }} type="auto" scrollbarSize={8}>
            {isLoading ? (
              <StudentsSkeleton />
            ) : (
              <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="xl"
                mt="lg"
              >
                {students.map((student) => {
                  const houseColor = getHouseColor(student.house);

                  return (
                    <Card
                      key={student.id}
                      shadow="xl"
                      radius="lg"
                      h={400}
                      withBorder={false}
                      className={`${classes.card} cursor-pointer`}
                      onClick={() => route(`/students/${student.id}`)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = `0 10px 25px ${houseColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <Card.Section style={{ height: "100%" }}>
                        <Image
                          src={student.image || defaultImageStudants}
                          alt={student.name}
                          height="300px"
                          width="100%"
                          fit="cover"
                        />
                      </Card.Section>

                      <StudentOverlay
                        student={student}
                        houseColor={houseColor}
                      />

                      <Box
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: 8,
                          backgroundColor: houseColor,
                        }}
                      />
                    </Card>
                  );
                })}
              </SimpleGrid>
            )}
          </ScrollArea>
        </div>
      </div>
    </BackgroundImage>
  );
}
