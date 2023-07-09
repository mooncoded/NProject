import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.isOpen ? "100%" : "90%")};
  padding: 10px 24px;
  background: ${(props) => (props.isOpen ? "transparent" : "#fff")};
  border-radius: 0.4rem;
  margin: ${(props) => (props.isOpen ? "0px auto" : "20px auto")};
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  color: #252525;
  z-index: 9999;
  transition: all 0.5s;
  box-shadow: ${(props) =>
    props.isOpen ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsRow = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 15px;
  gap: 40px;
  align-items: center;
`;

export const Option = styled.li`
  cursor: pointer;
  position: relative;
  transition: 0.2s;
  padding: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }

  svg {
    font-size: 20px;
  }

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2.5px;
    width: 0%;
    border-radius: 20px;
    background: var(--accent-color);
    transition: all 0.4s ease;
  }
  :hover:before {
    width: 100%;
  }

  :hover {
    color: var(--accent-color);
  }
`;

export const Logo = styled.img`
  width: 50px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover .logo-name {
    animation-play-state: running;
    opacity: 1;
    transform: translate(0px);
  }
`;

export const LogoName = styled.img`
  width: 140px;
  transition: 0.4s;
  opacity: 0;
  animation: popIn 1s paused;
  transform: translate(-10px);
  margin-bottom: 10px;
`;

export const MobileHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  opacity: 0;
  animation: fadeIn 0.5s;
  animation-play-state: running;
  animation-fill-mode: both;
  transition: all 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0px;
      transform: translateY(
        -100%
      ); /* Adicione esta linha para animar o translateY */
    }
    to {
      opacity: 1;
      height: 100vh;
      transform: translateY(
        0%
      ); /* Adicione esta linha para animar o translateY */
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      text-transform: uppercase;
      font-size: 16pt;
      font-weight: 500;
      cursor: pointer;
      padding: 5px 15px;
      color: #666;
      display: flex;
      align-items: center;
      gap: 8px;
      background-image: linear-gradient(
        var(--accent-color),
        var(--accent-color)
      );
      background-size: 0% 3px;
      background-repeat: no-repeat;
      transition: background-size 0.3s;
      margin: 5px 0;
      background-position: 50% calc(100% - 0px);
      :hover {
        background-size: 100% 3px;
      }
    }
    .contact {
      background-color: var(--accent-color);
      border-radius: 12px;
      padding: 10px;
      transition: 0.2s;
      background-image: none;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      font-size: 16pt;
      font-weight: 500;
    }
  }
  @media (min-width: 750px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;

  @media (max-width: 1100px) {
    display: flex;
  }
`;
