import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 450px;
  max-height: 450px;
  max-width: 350px;
  min-width: 350px;
  margin: 25px;
  position: relative;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: 25px;
  padding: 80px 20px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-image: linear-gradient(
    to bottom,
    #12864d,
    #3a984d,
    #5aaa4c,
    #7bbb4a,
    #9dcc47
  );
  color: #fff;

  h2 {
    text-transform: uppercase;
    font-size: 28px;
  }

  h3 {
    font-size: 26px;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${(props) =>
      (props.imageType == "email" && "70%") ||
      (props.imageType == "devices" && "90%") ||
      (props.imageType == "responsive" && "80%") ||
      (props.imageType == "coin" && "65%")};
    transition: all 0.3s;
  }

  h2 {
    transition: all 0.2s;
    color: var(--accent-color);
  }

  :hover {
    img {
      transform: translate(-10px, -70px) rotate(-15deg) scale(1.3);
    }

    h2 {
      transform: translateY(-40px);
    }

    p {
      transform: translateY(-30px);
    }
  }

  p {
    text-align: center;
    margin-top: 30px;
    width: 90%;
    transition: all 0.3s;
  }
`;

export const Pin = styled.img`
  position: absolute;
  top: -100px;
  right: -100px;
  z-index: -1;

  @media (max-width: 750px) {
    right: 0;
  }
`;
