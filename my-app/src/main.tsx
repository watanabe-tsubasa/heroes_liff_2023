import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";    
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById('root')!
const root = createRoot(container);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
