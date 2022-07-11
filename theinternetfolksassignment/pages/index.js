import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navbar from "./Client/Navbar/Navbar";
import MyApp from "./_app";
import HeroPage from "./Client/HeroPage/HeroPage";
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <HeroPage />
      </ThemeProvider>
    </>
  );
}
