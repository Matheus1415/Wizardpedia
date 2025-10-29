import { Card, SimpleGrid, Box, Skeleton } from "@mantine/core";

export function SkeletonComponent() {
  const skeletons = Array.from({ length: 4 }); 
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl" mt="lg">
      {skeletons.map((_, index) => (
        <Card
          key={index}
          shadow="xl"
          radius="lg"
          h={400}
          withBorder={false}
          style={{ position: "relative" }}
        >
          <Skeleton height={300} width="100%" radius="lg" />
          <Box style={{ position: "absolute", bottom: 0, width: "100%", padding: 12 }}>
            <Skeleton height={24} width="70%" mb={6} />
            <Skeleton height={20} width="50%" />
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
}

