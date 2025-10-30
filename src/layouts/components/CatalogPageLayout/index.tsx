import {
  SimpleGrid,
  BackgroundImage,
  ScrollArea,
  Box,
  Card,
  Image,
} from "@mantine/core";
import { SkeletonComponent } from "@/components/SkeletonComponent";
import { CardOverlay } from "@/components/CardOverlay";
import defaultImage from "@/assets/image/default-card-students.jpg";
import classes from "./CatalogPageLayout.module.css";
import type { Character } from "@/types/Character";
import { generalColors } from "@/styles/colors/colors";

interface CatalogPageLayoutProps {
  title: string;
  background: string;
  items: Character[];
  isLoading: boolean;
  type: "staff" | "students";
  getColor?: (item: Character) => string;
  onCardClick?: (item: Character) => void;
}

export function CatalogPageLayout({
  title,
  background,
  items,
  type,
  isLoading,
  getColor = () => generalColors.primary,
  onCardClick,
}: CatalogPageLayoutProps) {
  return (
    <BackgroundImage
      src={background}
      radius={0}
      style={{ height: "95vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className={classes.container}>
        <div className="container mt-4" style={{ flex: 1 }}>
          <h1 className={classes.title}>{title}</h1>

          <ScrollArea style={{ height: "450px" }} type="auto" scrollbarSize={8}>
            {isLoading ? (
              <SkeletonComponent />
            ) : (
              <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="xl"
                mt="lg"
              >
                {items.map((item) => {
                  const color = getColor(item);

                  return (
                    <Card
                      key={item.id}
                      shadow="xl"
                      radius="lg"
                      h={400}
                      withBorder={false}
                      className={`${classes.card} cursor-pointer position-relative overflow-hidden`}
                      onClick={() => onCardClick?.(item)}
                    >
                      <Card.Section style={{ height: "100%" }}>
                        <Image
                          src={item.image || defaultImage}
                          alt={item.name}
                          height="100%"
                          width="100%"
                          fit="cover"
                        />
                      </Card.Section>

                      <CardOverlay character={item} houseColor={color} />

                      <Box
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: 8,
                          backgroundColor: type == "staff" ? generalColors.primary : color,
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
