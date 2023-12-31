import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 33px;
  left: 0;
  min-width: 250px;
  width: 300px;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  transform: translateX(20px);
  box-shadow: 0 13px 48px 0 rgba(0, 0, 0, 0.15);
  background-color: var(--main-background);
  color: #252525;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &.show {
    opacity: 1;
    visibility: visible;
    left: 0;
    transform: translateX(0);
  }
`;

export const ItemLi = styled.li`
  opacity: 0;
  transform: translateX(35%);
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;

  &.animate-in {
    animation-name: slide-in;
    opacity: 1;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(35%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
`;
