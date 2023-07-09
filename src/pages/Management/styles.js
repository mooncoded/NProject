import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .scroll-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-top: 70px;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
    gap: 80px;
    justify-content: center;
  }

  .stacks {
    width: 120px;
    height: auto;
    margin-bottom: 0px;
  }
`;

export const Spacing = styled.div`
  margin-top: 150px;
`;
