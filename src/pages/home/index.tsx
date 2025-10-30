import { BackgroundImage, Button, Text, Title, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ArrowBigRight } from "lucide-react";
import classes from "./Home.module.css";
import backgroundHome from "@/assets/image/background-home.jpg";

export function Home() {
  
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <BackgroundImage
      src={backgroundHome}
      radius={0}
      style={{ height: "95vh", width: "100%" }}
      className="d-flex align-items-center"
    >
      <div className="container row g-6">
        <div className="col-12 col-md-8 p-3">
          <Title order={1} className={classes.homeTitle}>
            Hogwarts Catalog
          </Title>
          <Text className={classes.homeSubtitle}>
            Magic is closer than you think. Step through the gate and discover
            what Hogwarts has in store for you…
          </Text>
          <Button
            variant="outline"
            color="yellow"
            size={isMobile ? "icon" : "default"}
            className={`${classes.homeButton} mt-4`}
          >
            {isMobile ? (
              <ArrowBigRight/> 
            ) : 'Explore'}
          </Button>
        </div>
      </div>
    </BackgroundImage>
  );
}
