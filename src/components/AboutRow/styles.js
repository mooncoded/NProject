import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 70px 0 0 0;
    gap: 60px;
    text-align: center;

    .left {
    margin-left: 10rem;
    align-self: flex-start;
  }
  
`;

export const CardsRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
`