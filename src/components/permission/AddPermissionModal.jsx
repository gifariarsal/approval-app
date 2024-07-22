import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPermission } from "../../redux/reducer/permissionSlice";
import ModalComponent from "../common/ModalComponent";
import PermissionForm from "./PermissionForm";

const AddPermissionModal = ({ isOpen, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(subject.trim() !== "" && description.trim() !== "");
  }, [subject, description]);

  const handleAddPermission = async () => {
    await dispatch(addPermission(subject, description, setLoading, toast));
    setSubject("");
    setDescription("");
    onClose();
    if (onSuccess) onSuccess();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose} title="Add Permission">
      <PermissionForm
        buttonText="Add Permission"
        subject={subject}
        setSubject={setSubject}
        description={description}
        setDescription={setDescription}
        onClick={handleAddPermission}
        loading={loading}
        disabled={isFormValid}
      />
    </ModalComponent>
  );
};

export default AddPermissionModal;
