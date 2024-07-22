import React from "react";
import TextInput from "../inputs/TextInput";
import MainButton from "../buttons/MainButton";
import TextAreaInput from "../inputs/TextAreaInput";

const PermissionForm = ({
  buttonText,
  subject,
  setSubject,
  description,
  setDescription,
  onClick,
  loading,
  disabled,
}) => {
  return (
    <form style={{ marginBottom: "1rem" }}>
      <TextInput
        id="subject"
        name="Subject"
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={setSubject}
        isRequired
        spacing={{ mb: "4" }}
      />
      <TextAreaInput
        id="description"
        name="Description"
        type="description"
        placeholder="Enter your description"
        value={description}
        onChange={setDescription}
        isRequired
      />
      <MainButton
        content={buttonText}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
      />
    </form>
  );
};

export default PermissionForm;
