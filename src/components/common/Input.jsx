import { forwardRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #b5b4b4;
  border-radius: 7px;
  width: 100%;
  &::placeholder {
    color: #b5b4b4;
  }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;

`

const InputField = forwardRef(({ id, type = "text", placeholder, name, err }, ref) => {
    return (
      <div style={{ width: "100%", marginBottom: "20px"}}>
        <Input id={id} type={type} placeholder={placeholder} name={name} ref={ref} />
        {err && <ErrorMessage>{err}</ErrorMessage>}
      </div>
    );
  });

export default InputField;
