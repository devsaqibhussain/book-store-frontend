import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Library App",
  description:
    "A MERN Stack Library app built by Dev Saqib to showcase his MERN stack abilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className=" container">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
