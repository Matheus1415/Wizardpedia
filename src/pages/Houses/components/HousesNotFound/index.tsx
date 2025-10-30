import { Box, Center, Text } from "@mantine/core";
import { InfoIcon } from "lucide-react";

export function HousesNotFound() {
  return (
   <Center style={{ minHeight: "300px", width: "100%" }}>
      <Box
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.618)",
          padding: "2rem",
          borderRadius: "12px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <InfoIcon size={40} color="#FFD700" style={{ marginBottom: "1rem" }} />
        <Text size="xl" fw={700} c="white" mb="sm">
          Ops! Casa não encontrada
        </Text>

      </Box>
    </Center>
  );
}
