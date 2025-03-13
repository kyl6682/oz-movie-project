import { forwardRef } from "react";
import { ErrorMessage, Input } from "../../style/CommonStyles";

const InputField = forwardRef(({ id, type = "text", placeholder, name, err }, ref) => {
    return (
      <div style={{ width: "100%", marginBottom: "20px"}}>
        <Input id={id} type={type} placeholder={placeholder} name={name} ref={ref} />
        {err && <ErrorMessage>{err}</ErrorMessage>}
      </div>
    );
  });

export default InputField;
