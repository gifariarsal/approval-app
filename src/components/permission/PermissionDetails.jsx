import React from "react";
import ModalDataComponent from "../common/ModalDataComponent";
import ModalComponent from "../common/ModalComponent";

const PermissionDetails = ({
  isOpen,
  onClose,
  date,
  userName,
  subject,
  description,
}) => {
  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      title="Permission Details"
    >
      <ModalDataComponent label="Date" value={date} />
      <ModalDataComponent label="Name" value={userName} my={2} />
      <ModalDataComponent label="Subject" value={subject} />
      <ModalDataComponent
        label="Description"
        value={description}
        my={6}
        fontWeight="normal"
      />
    </ModalComponent>
  );
};

export default PermissionDetails;
