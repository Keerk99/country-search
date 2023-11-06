import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.background};
  z-index: 10;
  padding: 1.5rem 5rem;
  @media screen and (max-width: 1023px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (max-width: 639px) {
    padding: 1.5rem 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const BtnHome = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  @media screen and (max-width: 639px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 424px) {
    font-size: 0.9rem;
  }
`;

export const BtnMode = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  gap: 0.5rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  transition: color ease 0.5s;
  &&:hover {
    color: ${({ theme }) => theme.hover};
  }
  @media screen and (max-width: 639px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 424px) {
    font-size: 0.6rem;
    gap: 0.3rem;
  }
`;
