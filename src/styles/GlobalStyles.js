import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body {
        background-color: #fff;
        font-family:  'Quicksand', sans-serif;
        color: #5B5C69;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    :root {
        --accent-color: #1E8A4D;
        --hover-accent-color: #1E8A4D;
        --main-background: #ffffff;
        --secundary-background: #F5F5F5;
    }
`;
