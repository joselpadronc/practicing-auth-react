import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ViewIcon,
  ViewOffIcon
} from '@chakra-ui/icons';

// Components Chakra
import {
  Box,
  Stack,
  Container,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";

export function Register() {
  const [ showPassowrd, setShowPassword ] = useState(false);

  const handleShowPassword = () => showPassowrd ? setShowPassword(false) : setShowPassword(true);

  return (
    <Container paddingTop="28" marginBottom="50" display="flex" flexDirection="column" alignItems="center">
      <Box
        as="article"
        padding="4"
        borderRadius="md"
        border="4px"
        borderColor="green.100"
        backgroundColor="green.50"
        shadow="lg"
        width="380px"
        marginX="auto"
      >
        <Heading as="h1" size="lg" textAlign="center" >Register</Heading>

        <Stack spacing={4} marginTop="8">
          <Input placeholder="Ingresa usuario" type="text" size="md" />
          <Input placeholder="Ingresa Email" type="email" size="md" />
          <InputGroup>
            <Input placeholder="Ingresa Password" type={showPassowrd ? "text" : "password"} size="md" />
            <InputRightElement>
              <IconButton
                icon={showPassowrd ? <ViewOffIcon /> : <ViewIcon />}
                size="sm"
                onClick={handleShowPassword}
              />
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="blue">Registrarme</Button>
        </Stack>
      </Box>
      <Link to="/login">
        <Button colorScheme="blue" variant="ghost" size="sm" marginTop="10" >Login</Button>
      </Link>
    </Container>
  );
}