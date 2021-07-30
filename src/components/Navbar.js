import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';


// Providers
import { AuthContext } from 'providers/AuthProvider';

// Icons
import {
  ChevronDownIcon
} from '@chakra-ui/icons';

// Components Chakra
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export function Navbar() {
  const { isAuth, removeAuth } = useContext(AuthContext);
  let history = useHistory();

  const handleLogout = () => {
    removeAuth();
    history.push('/');
  }

  return (
    <Box padding="4" bg="gray.100" as="header" shadow="md" position="fixed" width="100%" >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" >
          <Link to="/">
            <Heading as="h1" size="lg" isTruncated>
              Practicing Auth React
            </Heading>
          </Link>

          <Flex>
            {
              !isAuth
                ?<Link to="/login">
                  <Button colorScheme="teal" size="sm">
                    Login
                  </Button>
                </Link>

                :<Menu>
                  <MenuButton as={Button} colorScheme="teal" size="sm" rightIcon={<ChevronDownIcon />}>
                    username
                  </MenuButton>
                  <MenuList>
                      <Link to="/profile">
                        <MenuItem>
                          Mi Perfil
                        </MenuItem>
                      </Link>
                    <MenuItem color="red.400" onClick={handleLogout}>
                      Cerrar sesion
                    </MenuItem>
                  </MenuList>
                </Menu>
            }
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}