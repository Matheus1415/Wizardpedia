import { useParams } from "react-router-dom";
import classes from "./StudentDetails.module.css";
import { BackgroundImage } from "@mantine/core";
import backgroundStudentDetails from "@/assets/image/backgroud-student-details.jpg";
import { useStudentDetails } from "@/http/requests/Students/useStudentDetails";

export function StudentDetails() {

  const { id } = useParams<{ id: string }>();
  const { student, isLoading } = useStudentDetails(id!);

  return (
    <BackgroundImage
      src={backgroundStudentDetails}
      radius={0}
      style={{ height: "95vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className={classes.StudentsContainer}></div>
    </BackgroundImage>
  );
}
