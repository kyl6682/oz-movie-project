import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Pretendard', sans-serif;
    }
    body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
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
    input {
        &:focus {
            outline-style: none;
        }
    }
`;
