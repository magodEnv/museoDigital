import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

//const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Museo Digital",
  description: "Pagina prototipo museo austral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
