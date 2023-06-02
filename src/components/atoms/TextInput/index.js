import InputBase from "@mui/material/InputBase";

const TextInput = ({ type, ...props }) => {
  // For password field do not change the type to search
  const fieldType = type === "password" ? "password" : "search";
  return (
    <InputBase inputProps={{ type: `${fieldType}` }} {...props}></InputBase>
  ); // additional prop for clear button
};

export default TextInput;
