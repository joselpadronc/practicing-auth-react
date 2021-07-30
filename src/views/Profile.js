// Components Chakra
import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";

export function Profile() {
  return (
    <Container paddingTop="28" maxW="container.xl" marginBottom="50">
      <Box
        as="article"
        padding="4"
        borderRadius="md"
        border="4px"
        borderColor="green.400"
        backgroundColor="green.50"
        shadow="lg"
      >
        <Heading as="h1" size="lg" textAlign="center" >Mi Perfil</Heading>
      </Box>
    </Container>
  );
}