import { Link } from 'react-router-dom';

// Components Chakra
import {
  Box,
  Button,
  Container,
  Heading,
  Text
} from "@chakra-ui/react";

export function Home() {
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
        <Heading as="h1" size="lg" textAlign="center" >Practicando Proteccion de rutas y autenticacion en react</Heading>

        <Box display="flex" alignItems="center" justifyContent="center" marginTop="8" flexWrap="wrap" gridGap="10">
          <Box as="div" display="flex" alignItems="center" flexDirection="column">
            <Text fontWeight="semibold" marginBottom="4">
              Si tienes cuenta ya puedes ingresar
            </Text>
            <Link to="/login">
              <Button colorScheme="teal" size="md" >Login</Button>
            </Link>
          </Box>

          <Box as="div" display="flex" alignItems="center" flexDirection="column">
            <Text fontWeight="semibold" marginBottom="4">
              Crea una cuenta para poder ingresar
            </Text>
            <Link to="/register">
              <Button colorScheme="teal" size="md" variant="outline" >Register</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}