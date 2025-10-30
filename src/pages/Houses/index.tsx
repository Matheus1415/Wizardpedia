// Houses.tsx
import { BackgroundImage } from "@mantine/core";
import backgroundHouses from "@/assets/image/background-houses.jpg";
import { useHouses } from "@/http/requests/houses/useHouses";
import classes from "./Houses.module.css";

import graffindor from "@/assets/image/houses/gryffindor.jpeg";
import hufflepuff from "@/assets/image/houses/hufflepuff.jpeg";
import ravenclaw from "@/assets/image/houses/ravenclaw.jpeg";
import slytherin from "@/assets/image/houses/slytherin.jpeg";
import { HousesList } from "./components/HousesList";
import { HousesNotFound } from "./components/HousesNotFound";
import { usePageTitle } from "@/hook/usePageTitle";

const houseImages: Record<string, string> = {
  Gryffindor: graffindor,
  Slytherin: slytherin,
  Hufflepuff: hufflepuff,
  Ravenclaw: ravenclaw,
};

export function Houses() {
  const { houses } = useHouses();
  usePageTitle('Houses - Wizardpedia')

  return (
    <BackgroundImage
      src={backgroundHouses}
      radius={0}
      style={{ minHeight: "95vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center p-4"
    >
      <div className="container">
        <h1 className={`${classes.title} mb-4`}>Hogwarts houses</h1>
        {!houses || houses.length === 0 ? (
          <HousesNotFound />
        ) : (
          <HousesList houses={houses} houseImages={houseImages} />
        )}
      </div>
    </BackgroundImage>
  );
}
