"use client";
import "../src/app/globals.css";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "../lib/ThemeContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <body>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </body>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <html lang="en" className={theme}>
      {children}
    </html>
  );
};
