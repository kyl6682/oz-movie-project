import styled from "styled-components";

export const LightTheme = {
    background: "#ffffff",
    text: "#000000",
    shadow: "rgba(0, 0, 0, 0.2)",
  };
  
export const DarkTheme = {
    background: "#23232a",
    text: "#ffffff",
    toggleBack: "#3e3e44",
    shadow: "rgba(255, 255, 255, 0.2)",
  };

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: center;
  align-items: center;
`;

// Button
export const ButtonStyle = styled.button`
    background-color: #875dea;
    padding: 12px 24px;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #6f48cb;
    }
`
// Input Field
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #b5b4b4;
  border-radius: 7px;
  width: 100%;
  &::placeholder {
    color: #b5b4b4;
  }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;

`