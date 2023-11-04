import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkCard = styled(Link)`
  text-decoration: none;
`;

export const Li = styled.li`
  list-style: none;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.cardBackground};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0 2rem 0;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow};
  @media screen and (max-width: 1023px) {
    padding: 0 0 1rem 0;
  }
  @media screen and (max-width: 639px) {
    padding: 0 0 0.5rem 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 170px;
  @media screen and (max-width: 1535px) {
    height: 160px;
  }
  @media screen and (max-width: 1023px) {
    height: 150px;
  }
  @media screen and (max-width: 1023px) {
    height: 130px;
  }
  @media screen and (max-width: 423px) {
    height: 120px;
  }
`;

export const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: ${({ theme }) => theme.text};
`;

export const H2 = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  @media screen and (max-width: 1023px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 639px) {
    font-size: 0.8rem;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 700;
  @media screen and (max-width: 1023px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 639px) {
    font-size: 0.7rem;
  }
`;

export const P = styled.p`
  display: inline;
  font-weight: 400;
`;
