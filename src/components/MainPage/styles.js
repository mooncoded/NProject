import styled from "styled-components";
import back from "../../assets/svg/back.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  .wave {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 999;
    right: 53px;
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const MiddleContainer = styled.div`
  width: 100%;
  padding: 60px 36px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  h1 {
    font-size: 3rem;
    color: #1c2045;
  }

  @media (max-width: 700px) {
    width: 90%;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  position: relative;
  top: 50%;
  width: fit-content;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10%;

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const Pin = styled.img`
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 250px;
  height: 250px;
  z-index: -1;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  transition: all 0.5s;
  background-image: linear-gradient(
    to right,
    rgba(30, 138, 77, 0.8) 40%,
    rgba(0, 0, 0, 0)
  );

  &.fadeIn {
    opacity: 1;
  }

  &.fadeOut {
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  .type-writter {
    margin-top: 15px;
  }

  .underline {
    position: relative;
    width: fit-content;
    margin-bottom: 10px;

    :before {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      height: 15px;
      width: 100%;
      background: rgba(30, 138, 77, 0.5);
      transition: all 0.4s ease;
      z-index: -1;
    }
  }
`;

export const MiddleButton = styled.div`
  width: fit-content;
  padding: 20px 75px;
  border-radius: 70px;
  margin-top: 40px;
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 16px;
  color: #fff;
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
    background-color: #18693b;
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
    background-color: #1e8a4d;
  }
`;
