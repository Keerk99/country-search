import styled from "styled-components";

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  gap: 3rem;
  @media screen and (max-width: 639px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 424px) {
    font-size: 0.9rem;
    gap: 2rem;
  }
  @media screen and (max-width: 319px) {
    gap: 1rem;
  }
`;

export const ImgNotFound = styled.img`
  max-width: 500px;
  @media screen and (max-width: 639px) {
    max-width: 350px;
  }
  @media screen and (max-width: 424px) {
    max-width: 280px;
  }
  @media screen and (max-width: 319px) {
    max-width: 240px;
  }
`;

export const Span = styled.span`
  text-align: center;
`;
