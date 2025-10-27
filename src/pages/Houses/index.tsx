import {
  BackgroundImage,
} from "@mantine/core";
import classes from "./Houses.module.css";
import backgroundStudent from "@/assets/image/background-student.jpg";

export function Houses() {

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
          <h1 className={classes.title}>Hogwarts houses</h1>

        </div>
      </div>
    </BackgroundImage>
  );
}
