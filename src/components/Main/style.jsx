import styled from "styled-components";

export const MainContainer = styled.main`
  flex-grow: 1;
  background: ${({ theme }) => theme.body};
  padding: 3rem 5rem;
  @media screen and (max-width: 1023px) {
    padding: 3rem 2rem;
  }
  @media screen and (max-width: 639px) {
    padding: 2rem 1rem;
  }
`;

export const Section = styled.section`
  max-width: 1900px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
`;

export const ContainerSearchFilter = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 639px) {
    flex-direction: column;
    justify-content: baseline;
    gap: 3rem;
  }
`;

export const Search = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 0.4rem;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 440px;
  gap: 1rem;
  color: ${({ theme }) => theme.search};
  font-size: 1.5rem;
  @media screen and (max-width: 1279px) {
    width: 380px;
  }
  @media screen and (max-width: 1023px) {
    width: 280px;
  }
  @media screen and (max-width: 639px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.85rem;
  font-family: "Nunito Sans", sans-serif;
  &&::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  @media screen and (max-width: 423px) {
    font-size: 0.8rem;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 1535px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
  @media screen and (max-width: 1439px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  @media screen and (max-width: 1023px) {
    gap: 2rem;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  @media screen and (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 639px) {
    gap: 1rem;
  }
  @media screen and (max-width: 423px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 3.5rem;
    gap: 2rem;
  }
  @media screen and (max-width: 319px) {
    padding: 0 2.5rem;
  }
`;
