import Router from "./shared/Router";
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";


const queryClient = new QueryClient();

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
