import styled from "styled-components";

export const Container = styled.div`
  .cursor {
    background-color: transparent;
    border: 2px solid #252525;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    pointer-events: none;
    text-align: center;
    @media (max-width: 750px) {
      display: none;
    }
  }
`;