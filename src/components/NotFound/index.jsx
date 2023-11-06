import NotFoundImg from "../../assets/img/not-found.png";
import { ContainerNotFound, ImgNotFound, Span } from "./style";

export default function NotFound({ searchKey }) {
  return (
    <ContainerNotFound>
      <ImgNotFound src={NotFoundImg} alt="Country not found" />
      <Span>{searchKey} was not found</Span>
    </ContainerNotFound>
  );
}
