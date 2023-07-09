import styled from "styled-components";

export const Div = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  .stacks {
    width: 120px;
    height: auto;
    margin-bottom: 0px;
  }

  .left {
    margin-left: 10rem;
    align-self: flex-start;
  }

  .divider {
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.03);
    margin: 20px 0;
  }

  .scroll-container {
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-top: 70px;
    overflow-x: auto;
    white-space: nowrap;
    max-width: 80%;
    cursor: pointer;
    gap: 80px;
    align-items: center;
  }
`;

export const ProductRow = styled.div`
  width: 99%;
  min-height: 450px;
  display: flex;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 26px;
  background-color: var(--accent-color);
  position: relative;
  -webkit-clip-path: inset(-100vw 0 0 -100vw);
  clip-path: inset(-100vw 0 0 -100vw);
  margin-bottom: 70px;

  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-side {
    position: relative;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    flex: 0 0 50%;
    max-width: 50%;
    margin-right: ${(props) => (props.left ? "100px" : "0px")};
  }

  .phone-holder {
    position: absolute;
    width: 200%;
    max-width: 200%;
    top: -10rem;
  }

  .laptop {
    transition: all 0.2s;
    width: 100%;
    max-width: 100%;
    transform: rotate(-2deg);
    cursor: pointer;

    :hover {
      transform: scale(1.07);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;

    .main-wrapper {
      flex-direction: column;
    }

    .right-side {
      max-width: 100%;
      margin-right: 0px;
      margin-bottom: 20px;
    }

    .phone-holder {
      position: relative;
      width: 100%;
      max-width: 100%;
      top: 0px;
      margin-top: 50px;

      img {
        position: relative;
        width: 100%;
      }
    }
  }
`;

export const ProductColumn = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;

  .app-title {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    min-width: 0% !important;

    .app-title {
      flex-direction: column;
    }
  }

  @media (max-width: 1100px) {
    width: 80%;
    text-align: center;
  }
`;

export const MobileApp = styled.div`
  width: 99%;
  min-height: 450px;
  display: flex;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 26px;
  background-color: #27272e;
  position: relative;
  -webkit-clip-path: inset(-100vw 0 0 -100vw);
  clip-path: inset(-100vw 0 0 -100vw);
  margin-bottom: 70px;

  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-side {
    position: relative;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    flex: 0 0 50%;
    max-width: 50%;
    margin-right: ${(props) => (props.left ? "100px" : "0px")};
  }

  .phone-holder {
    position: absolute;
    width: 130%;
    max-width: 130%;
    top: -16rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;

    .main-wrapper {
      flex-direction: column;
    }

    .right-side {
      max-width: 100%;
      margin-right: 0px;
      margin-bottom: 20px;
    }

    .phone-holder {
      position: relative;
      width: 100%;
      max-width: 100%;
      top: 0px;
      margin-top: 50px;

      img {
        position: relative;
        width: 100%;
      }
    }
  }
`;

export const Phone = styled.img`
  transition: all 0.2s;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  :hover {
    transform: scale(1.07);
  }
`;

export const BackgroundMobile = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: blue;
  height: 20%;
  clip-path: inset(-100vmax -100vmax 50%); /* cut the bottom */
`;

export const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 20px;

  width: 100%;
  min-width: 70%;

  .app-title {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    min-width: 0% !important;

    .app-title {
      flex-direction: column;
    }
  }

  @media (max-width: 900px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
`;

export const InBuildBtn = styled.div`
  padding: 12px 25px;
  background-color: #565663;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;
`;

export const StacksRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
