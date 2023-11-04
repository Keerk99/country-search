import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  font-size: 0.9rem;
  font-weight: 600;
  position: relative;
  @media screen and (max-width: 1023px) {
    width: 180px;
  }
  @media screen and (max-width: 639px) {
    width: 200px;
  }
  @media screen and (max-width: 423px) {
    font-size: 0.8rem;
  }
`;

export const Select = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const P = styled.p`
  margin: 0;
  padding: 1.1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border-radius: 0.4rem;
`;

export const ContainerOptions = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 0.3rem;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 1rem 0;
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.background};
`;

export const Li = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 0;
  padding: 0.3rem 1.5rem;
  color: ${({ theme }) => theme.text};
  &&:hover {
    background: #8585851c;
  }
`;
