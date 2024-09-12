import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import router from "./router.tsx";
import { theme } from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import { LayoutProvider } from "./contexts/layout/LayoutProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LayoutProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </LayoutProvider>
    </ThemeProvider>
  </StrictMode>
);
