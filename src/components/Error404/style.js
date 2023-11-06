import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;
  @media screen and (max-width: 424px) {
    gap: 2rem;
    padding: 2rem 0;
  }
`;

export const Container404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const P = styled.p`
  font-size: 15rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
  @media screen and (max-width: 1279px) {
    font-size: 12rem;
  }
  @media screen and (max-width: 639px) {
    font-size: 8rem;
  }
  @media screen and (max-width: 424px) {
    font-size: 5rem;
  }
`;

export const Image404 = styled.img`
  max-width: 300px;
  @media screen and (max-width: 1279px) {
    max-width: 250px;
  }
  @media screen and (max-width: 639px) {
    max-width: 170px;
  }
  @media screen and (max-width: 424px) {
    max-width: 120px;
  }
`;

export const ContainerSpan = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  @media screen and (max-width: 1279px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 639px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 424px) {
    font-size: 0.9rem;
  }
`;

export const ButtonHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 0.4rem;
  border: none;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
  transition: color ease .5s;
  &&:hover {
    color: ${({ theme }) => theme.hover};
  }
  @media screen and (max-width: 424px) {
    font-size: 0.8rem;
    gap: 0.2rem;
  }
`;
