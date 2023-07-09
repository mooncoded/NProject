import styled, { keyframes } from "styled-components";
import stock from "../../assets/images/stock-man.jpg";

const move = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

export const Container = styled.div`
  max-width: 550px;
  max-height: 550px;
  width: 550px;
  height: 550px;
  transform: rotate(0deg);
  cursor: pointer;
  box-shadow: 0 20px 5px 5px rgba(0, 0, 0, 0.2);
  animation: ${move} 10s ease-in-out infinite;
  background-image: url(${stock});
  background-position: center;
  background-size: cover;

  transition: all .2s;

  @media (max-width: 700px) {
    max-width: 90%;
  }

  :hover {
    transform: scale(1.07);
  }
`;

export const Blob = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(17, 12, 46, 0.35) 0px 48px 100px 0px;
  transform: rotate(-9deg);
  transition: all 0.2s;
`;

export const GrowthCard = styled.div`
  position: absolute;
  top: 50%;
  width: 250px;
  height: auto;
  padding: 16px;
  background-color: #fff;
  left: -180px;
  border-radius: 20px;

  small {
    font-weight: 700;
  }
`;
