import styled from "styled-components"

const Input = styled.input`
    padding : 10px;
    border: 1px solid #b5b4b4;
    border-radius: 7px;
    &::placeholder {
        color: #b5b4b4;
    }
`

const InputField = ({id, type, placeholder, value, onChange, name}) => {
    return (
        <Input 
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    )
}

export default InputField