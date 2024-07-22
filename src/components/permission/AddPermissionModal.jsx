import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextInput from "../inputs/TextInput";
import TextAreInput from "../inputs/TextAreInput";
import MainButton from "../buttons/MainButton";
import { useDispatch } from "react-redux";
import { addPermission } from "../../redux/reducer/permissionSlice";
import ModalComponent from "../common/ModalComponent";

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
        <TextAreInput
          id="description"
          name="Description"
          type="description"
          placeholder="Enter your description"
          value={description}
          onChange={setDescription}
          isRequired
        />
        <MainButton
          content="Submit Permission"
          onClick={handleAddPermission}
          loading={loading}
          disabled={!isFormValid}
        />
      </form>
    </ModalComponent>
  );
};

export default AddPermissionModal;
