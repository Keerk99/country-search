import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  max-width: 1900px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 auto;
  padding-top: 2rem;
  @media screen and (max-width: 1279px) {
    gap: 3rem;
    padding-top: 0rem;
  }
`;

export const BtnBack = styled(Link)`
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 0.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 0.5rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 424px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 400px;
  @media screen and (max-width: 1279px) {
    max-height: 500px;
    align-items: center;
  }
  @media screen and (max-width: 639px) {
    flex-direction: column;
    max-height: 100%;
    gap: 2rem;
  }
`;

export const Img = styled.img`
  width: 40%;
  @media screen and (max-width: 639px) {
    width: 100%;
  }
`;
export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  justify-content: space-around;
  width: 42%;
  padding: 1rem 0;
  gap: 0.5rem;
  @media screen and (max-width: 1279px) {
    width: 50%;
  }
  @media screen and (max-width: 1023px) {
    width: 55%;
  }
  @media screen and (max-width: 639px) {
    width: 100%;
  }
  @media screen and (max-width: 424px) {
    padding: 0;
    gap: 1rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 900;
  @media screen and (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 424px) {
    font-size: 1.3rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (max-width: 639px) {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 50%;
  @media screen and (max-width: 639px) {
    max-width: fit-content;
  }
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  flex-wrap: wrap;
  gap: 0.4rem;
  @media screen and (max-width: 1279px) {
    gap: 0.2rem;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;

export const ContainerBorder = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2.5rem;
  @media screen and (max-width: 1279px) {
    margin-top: 1rem;
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 424px) {
    margin-top: 1rem;
  }
`;

export const P = styled.p`
  margin: 0;
  font-weight: 400;
`;

export const BtnContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media screen and (max-width: 423px) {
    justify-content: center;
  }
`;

export const BtnCountry = styled(Link)`
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 0.5rem 1.3rem;
  border-radius: 0.4rem;
  text-align: center;
  @media screen and (max-width: 1279px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  font-size: 1rem;
  margin-left: -0.6rem;

  @media screen and (max-width: 1279px) {
    font-size: 0.9rem;
    margin-left: -0.8rem;
  }
  @media screen and (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;
