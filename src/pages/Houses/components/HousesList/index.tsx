import { Card, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./HousesList.module.css";
import { houseColors } from "@/styles/houseColors";

interface HousesListProps {
  houses: string[];
  houseImages: Record<string, string>;
}

export function HousesList({ houses, houseImages }: HousesListProps) {
  return (
    <div className="row g-4 mt-4">
      {houses.map((house) => (
        <div key={house} className="col-6 col-md-3">
          <Link to={`/students?house=${house}`} className="text-decoration-none">
            <Card
              shadow="lg"
              radius="lg"
              className={`position-relative overflow-hidden text-white ${classes["house-card"]}`}
              style={{
                border: `3px solid ${houseColors[house.toLowerCase()]}`,
                height: 450,
              }}
            >
              <img
                src={houseImages[house]}
                alt={house}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  filter: "brightness(0.6)",
                }}
              />
              <div className={classes["house-badge"]}>
                <Text
                  weight={700}
                  size="xl"
                  style={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  {house}
                </Text>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
