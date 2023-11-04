import styled from "styled-components";

export const FooterContainer = styled.footer`
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.background};
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 1023px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 639px) {
    font-size: 0.6rem;
  }
`;

export const P = styled.p`
  text-align: center;
  margin: 0;
`;
