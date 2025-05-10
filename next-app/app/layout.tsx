'use client'
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({

  palette: {
    mode: 'dark',
  }
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body >{children}</body>
      </html>
    </ThemeProvider>
  );
}
