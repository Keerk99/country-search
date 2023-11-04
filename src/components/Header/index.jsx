import { useState } from "react";
import { HeaderContainer, Container, BtnHome, H1, BtnMode } from "./style";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

export default function Header({ theme, setTheme }) {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      changeMode();
    } else {
      setTheme("light");
      changeMode();
    }
  };

  const changeMode = () => {
    setMode(!mode);
  };

  const renderIcon =
    theme === "light" ? (
      <>
        <IoMoonOutline /> Dark Mode
      </>
    ) : (
      <>
        <CiLight /> Light Mode
      </>
    );

  return (
    <HeaderContainer>
      <Container>
        <BtnHome to={"/"}>
          <H1>Where in the world?</H1>
        </BtnHome>
        <BtnMode onClick={handleMode}>{renderIcon}</BtnMode>
      </Container>
    </HeaderContainer>
  );
}
