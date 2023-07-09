import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secundary-background);
  z-index: 0;

  .left {
    margin-left: 10rem;
    align-self: flex-start;
  }

  .triangle {
    position: relative;
    margin-top: 25px;
    margin-left: 25px;
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .triangle::before {
    display: block;
    content: "";
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 2px solid orange;
    border-radius: 10px; /* altere este valor para controlar a curvatura das pontas */
    -webkit-transform: rotate(45deg);
    -webkit-transition: border-color 0.3s;
  }
`;

export const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 0;
  gap: 70px;
  width: 90%;
  justify-content: center;
  z-index: 1;
  margin: 0 auto;

  @media (max-width: 1100px) {
    text-align: center;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    max-width: 600px;
    margin-bottom: 50px;
  }

  p {
    word-wrap: break-word;
    max-width: 600px;
    white-space: pre-wrap;
    word-break: break-word; /* Adicione esta linha */
    margin-bottom: 1rem;
  }
`;

export const SecundaryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SecundaryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-top: 15px;
  background-color: var(--main-background);
  max-width: 270px;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(17, 12, 46, 0.08) 0px 48px 100px 0px;
  transition: all 0.2s;
  margin-right: auto;

  .products {
    color: #4f48c6;
  }

  .pie {
    color: #17c672;
  }

  .performance {
    color: #cd3256;
  }

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const DivSecundaryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
`;


const move = keyframes`
  from {
    transform: translate(0px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(500px, 100px) rotate(-10deg);
    border-radius: 76% 76% 35% 65% / 27% 36% 64% 73%;
  }
`;
