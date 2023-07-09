import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .scroll-container {
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
    }
`;

export const Spacing = styled.div`
  margin-top: 150px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #F5F5F5;
  padding: 80px 40px;

  .horizontal-divider {
    height: 2px;
    width: 80%;
    margin: 50px 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
