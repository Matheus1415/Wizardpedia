import { HouseNamePT } from "@/data/langs/HouseNamePT";
import { Box, Text, Group, Badge } from "@mantine/core";
import { Star, Book, Zap, User, Heart, Skull } from "lucide-react";

interface StudentOverlayProps {
  student: {
    name: string;
    house?: string;
    species?: string;
    wizard: boolean;
    alive: boolean;
  };
  houseColor: string;
}

export function StudentOverlay({ student, houseColor }: StudentOverlayProps) {
  const housePT =
    student.house !== ""
      ? HouseNamePT[student.house as keyof typeof HouseNamePT] ||
        HouseNamePT.Default
      : HouseNamePT.Default;

  return (
    <Box
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "rgba(0, 0, 0, 0.711)",
        color: "#fff",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <Text fw={700} size="lg" align="center">
        {student.name}
      </Text>

      <Group position="center" className="d-flex justify-content-between " spacing="xs">
        <Badge
          color={houseColor}
          variant="filled"
          size="sm"
          leftSection={<Star size={12} />}
        >
          {housePT}
        </Badge>

        {student.species && (
          <Badge
            color="blue"
            variant="light"
            size="sm"
            leftSection={<Book size={12} />}
          >
            {student.species}
          </Badge>
        )}
      </Group>

      <div className="d-flex justify-content-between gap-3">
        <div className="d-flex align-items-center gap-1">
          {student.wizard ? (
            <Zap size={16} color="#29F598" />
          ) : (
            <User size={16} color="#CBCBCB" />
          )}
          <Text size="sm" c="white" className="mb-0">
            {student.wizard ? "Bruxo" : "Muggle"}
          </Text>
        </div>

        <div className="d-flex align-items-center gap-1">
          {student.alive ? (
            <Heart size={16} color="#E6B83C" />
          ) : (
            <Skull size={16} color="#CD5656" />
          )}
          <Text size="sm" c="white" className="mb-0">
            {student.alive ? "Vivo" : "Falecido"}
          </Text>
        </div>
      </div>
    </Box>
  );
}
