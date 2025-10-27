import { Center, Text, Box } from "@mantine/core";
import { InfoIcon } from "lucide-react";

interface NoDataProps {
  message?: string;
}

export function StudentNotFound({ message }: NoDataProps) {
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
          Ops! Estudante não encontrado
        </Text>
        <Text size="md" c="white" mb="1rem">
          O personagem que você está procurando não pôde ser localizado no nosso sistema.
          Pode ser que o estudante ainda não tenha sido registrado, ou os dados estejam indisponíveis no momento.
        </Text>
      </Box>
    </Center>
  );
}
