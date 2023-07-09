import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ButtonBudget = styled.div`
  height: 200px;
  width: 100%;
  background-color: #1e8a4d;

  .main-budget {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }

  .main-budget h1 {
    color: #fff;
  }

  .button-manegement {
    display: flex;
    align-items: center;
  }

  .button-manegement svg {
    margin-right: 8px;
  }
`;

export const Button = styled.div`
  width: fit-content;
  padding: 20px 75px;
  border-radius: 70px;
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
  color: #27272e;
  cursor: pointer;
  box-shadow: 0 20px 84px -15px var(--accent-color);
  -webkit-box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.37);
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease-out 0.2s;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #27272e;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease-out 0s;
    z-index: -1;
  }

  &:hover:before {
    width: 500px;
    height: 500px;
  }

  &:hover {
    color: #fff;
  }
`;