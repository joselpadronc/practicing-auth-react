import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Providers
import { AuthContext } from 'providers/AuthProvider';

// Icons
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

export function Login() {
  const [showPassowrd, setShowPassword] = useState(false);
  const {activateAuth} = useContext(AuthContext);
  const history = useHistory();

  const handleShowPassword = () => showPassowrd ? setShowPassword(false) : setShowPassword(true);

  const handleLogin = (event) => {
    event.preventDefault()
    activateAuth('hola')
    history.push('/')
  }

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
        <Heading as="h1" size="lg" textAlign="center" >Login</Heading>

        <Stack spacing={4} marginTop="8">
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
          <Button type="submit" colorScheme="blue" onClick={handleLogin}>Ingresar</Button>
        </Stack>
      </Box>
      <Link to="/register">
        <Button
          colorScheme="blue"
          variant="ghost"
          size="sm"
          marginTop="10"
        >
          Register
        </Button>
      </Link>
    </Container>
  );
}