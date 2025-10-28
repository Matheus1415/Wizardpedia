import { SimpleGrid, BackgroundImage, ScrollArea } from "@mantine/core";
import classes from "./Staff.module.css";
import backgroundStaff from "@/assets/image/background-staff.jpg";

export function Staff() {
  return (
    <BackgroundImage
      src={backgroundStaff}
      radius={0}
      style={{ height: "95vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className={classes.StaffContainer}>
        <div className="container mt-4" style={{ flex: 1 }}>
          <h1 className={classes.title}>Hogwarts staff</h1>

          <ScrollArea style={{ height: "450px" }} type="auto" scrollbarSize={8}>
            <SimpleGrid
              cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing="xl"
              mt="lg"
            ></SimpleGrid>
          </ScrollArea>
        </div>
      </div>
    </BackgroundImage>
  );
}
