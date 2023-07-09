import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  background-color: var(--secundary-background);
  width: 100%;
  padding: 80px 40px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .vertical-divider {
    height: 80%;
    align-self: flex-start;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .horizontal-divider {
    height: 2px;
    width: 80%;
    margin: 30px 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 750px) {
    .main-row {
      flex-direction: column;
      margin: 40px 0;
      text-align: center;
      align-items: center;
    }

    .vertical-divider {
      display: none;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  padding: 0px 0px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Map = styled(MapContainer)`
  width: 50%;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 100px;
`;

export const InputData = styled.div`
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;

  .underline:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(
      to right,
      var(-accent-color),
      rgba(255, 255, 255, 0.15)
    );
    transition: all 0.4s ease;
  }

  input:focus ~ .underline:before {
    width: 100%;
    background-color: var(--accent-color);
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #252525;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.4rem;
`;

export const TextArea = styled.textarea`
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #252525;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  height: 200px;
  max-height: 400px;
  font-size: 12px;
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.4rem;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  position: relative;
  padding: 10px 35px;
  border: 2px solid;
  border-radius: 20px;
  font-weight: 700;
  border-image: linear-gradient(
      45deg,
      var(-accent-color),
      rgba(255, 255, 255, 0.15)
    )
    1;
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  background-color: var(--accent-color);
  transition: all 0.2s ease;
  gap: 5px;

  :hover {
    transform: scale(1.05);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  min-height: 400px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 350px;
  margin-top: 50px;

  @media (max-width: 500px) {
    height: fit-content;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;

  ul {
    list-style: none;

    li {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      max-width: 350px;
    }
  }

  @media (max-width: 750px) {
    align-items: center !important;
    text-align: center;

    ul {
      margin-bottom: 30px;
    }
  }

  strong {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #252525;
    font-weight: 900 !important;
  }

  h1 {
    color: #252525;
  }

  h3 {
    max-width: 400px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }

  svg {
    color: #d9d9d9;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
      color: #252525;
      transform: scale(1.05);
    }
  }
`;

export const MessageBtn = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const MessageInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
