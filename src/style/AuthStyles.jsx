import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: start;
  justify-content: center;
  button {
    width: 100%;
    margin: 20px 0;
  }
`;

export const SocialLogin = styled.button`
margin-top: 20px;
font-size: 1rem;
border-radius: 8px;
width: 200px;
height: 50px;
font-weight: 600;
cursor: pointer;
hover {
  opacity: 0.5;
}
`;