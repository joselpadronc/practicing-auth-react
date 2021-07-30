import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from 'providers/AuthProvider';

import { Router } from 'Routes/Router';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
