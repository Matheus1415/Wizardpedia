import {
  BackgroundImage,
  ScrollArea,
  SimpleGrid,
  Card,
  Text,
  Group,
} from "@mantine/core";
import { useSpells } from "@/http/requests/spells/useSpells";
import classes from "./Spells.module.css";
import backgroundSpells from "@/assets/image/background-spells.jpg";
import { SkeletonComponent } from "@/components/SkeletonComponent";
import { Sparkles } from "lucide-react";
import { usePageTitle } from "@/hook/usePageTitle";

export function Spells() {
  const { spells, isLoading } = useSpells();
  usePageTitle('Spells - Wizardpedia')

  return (
    <BackgroundImage
      src={backgroundSpells}
      radius={0}
      style={{ height: "95vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className={classes.container}>
        <div className="container mt-4" style={{ flex: 1 }}>
          <h1 className={classes.title}>Hogwarts Spells</h1>

          <ScrollArea style={{ height: "450px" }} type="auto" scrollbarSize={8}>
            {isLoading ? (
              <SkeletonComponent />
            ) : (
              <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="xl"
                mt="lg"
              >
                {spells.map((spell) => (
                  <Card
                    key={spell.id}
                    shadow="sm"
                    radius="md"
                    withBorder
                    className={classes.spellCard}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 6,
                        background:
                          "linear-gradient(90deg, #ffeb3b, #55357E, #e6b83c)",
                        boxShadow: "0 0 10px #55357E, 0 0 20px #e6b83c",
                      }}
                    />

                    <Group position="apart" style={{ marginBottom: 8 }}>
                      <Sparkles size={20} color="#e6b83c" />
                    </Group>

                    <Text weight={700} size="lg" mb="sm">
                      {spell.name}
                    </Text>

                    <Text size="sm" color="dimmed">
                      {spell.description || "-"}
                    </Text>
                  </Card>
                ))}
              </SimpleGrid>
            )}
          </ScrollArea>
        </div>
      </div>
    </BackgroundImage>
  );
}
