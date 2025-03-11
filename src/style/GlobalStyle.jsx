import { createGlobalStyle } from "styled-components";
import './fonts.css'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Pretendard', sans-serif;
    }
    a {
        text-decoration: none;
        color: black;
    }
    li {
        list-style: none;
    }
    button {
        border: none;
    }
`;
