import { MainContainer } from "../components/Main/style";
import {
  Container,
  Container404,
  P,
  Image404,
  ContainerSpan,
  Span,
  ButtonHome,
} from "../components/Error404/style";
import Img404 from "../assets/img/404.png";
import { IoEarthSharp } from "react-icons/io5";

export default function Page404() {
  return (
    <MainContainer>
      <Container>
        <Container404>
          <P>4</P>
          <Image404 src={Img404} alt="Error 404" />
          <P>4</P>
        </Container404>
        <ContainerSpan>
          <Span>{`Page not found :(`}</Span>
          <Span>The page you are looking for doesn't exist</Span>
        </ContainerSpan>
        <ButtonHome to={"/"}>
          Go to homepage <IoEarthSharp />
        </ButtonHome>
      </Container>
    </MainContainer>
  );
}
