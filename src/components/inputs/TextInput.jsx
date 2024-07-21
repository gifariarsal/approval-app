import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const TextInput = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  isRequired = false,
  spacing = {},
}) => {
  return (
    <FormControl isRequired={isRequired} {...spacing}>
      <FormLabel htmlFor={id}>{name}</FormLabel>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        rounded="lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};

export default TextInput;
