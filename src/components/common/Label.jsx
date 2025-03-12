const Label = ({ text, htmlFor }) => {
    return (
      <label
        style={{fontSize: "0.9rem", fontWeight:"500", marginBottom:"5px"}}
        htmlFor={htmlFor}
      >
        {text}
      </label>
    );
  };
  
  export default Label;