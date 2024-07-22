import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react'

const TextAreInput = ({ id, name, type, placeholder, value, onChange, isRequired = false, spacing = {} }) => {
  return (
    <FormControl isRequired={isRequired} {...spacing}>
      <FormLabel htmlFor={id}>{name}</FormLabel>
      <Textarea
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
}

export default TextAreInput