import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import GlobalStyles from "./styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./hooks/useCart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyles />
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
