import { Box, Divider, Grid, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ModalDataComponent from "../common/ModalDataComponent";
import ModalComponent from "../common/ModalComponent";
import ActionButton from "../buttons/ActionButton";
import { IoClose, IoPencilOutline, IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import PermissionForm from "./PermissionForm";
import {
  cancelPermission,
  deletePermission,
  updatePermission,
} from "../../redux/reducer/permissionSlice";

const UserPermissionDetails = ({
  isOpen,
  onClose,
  id,
  date,
  subject,
  status,
  description,
  onSuccess,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [subjectUpdate, setUpdateSubject] = useState(subject);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [loading, setLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      subjectUpdate.trim() !== "" && descriptionUpdate.trim() !== ""
    );
  }, [subjectUpdate, descriptionUpdate]);

  const handleUpdatePermission = async () => {
    await dispatch(
      updatePermission(id, subjectUpdate, descriptionUpdate, setLoading, toast)
    );
    setUpdateSubject("");
    setDescriptionUpdate("");
    setShowUpdateForm(false);
    onClose();
    onSuccess();
  };

  const handleCancelPermission = async (id) => {
    await dispatch(cancelPermission(id, setCancelLoading, toast));
    onClose();
  };

  const handleDeletelPermission = async (id) => {
    await dispatch(deletePermission(id, setDeleteLoading, toast));
    onClose();
    onSuccess();
  };

  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      title="Permission Details"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={6}>
        <ModalDataComponent label="Date" value={date} />
        <ModalDataComponent label="Status" value={status} />
      </Grid>
      <ModalDataComponent label="Subject" value={subject} mb={3} />
      <ModalDataComponent
        label="Description"
        value={description}
        fontWeight="normal"
      />
      <Divider mt={6} mb={4} />
      <Box
        w="full"
        display="flex"
        flexDir={{ base: "column", md: "row-reverse" }}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        mb={4}
      >
        <ActionButton
          onClick={() => setShowUpdateForm((prev) => !prev)}
          icon={<IoPencilOutline />}
          label="Update"
        />
        {!showUpdateForm && (
          <>
            <ActionButton
              isLoading={cancelLoading}
              isDisabled={cancelLoading}
              onClick={() => handleCancelPermission(id)}
              icon={<IoClose />}
              label="Cancel"
              variant="ghost"
            />
            <ActionButton
              isLoading={deleteLoading}
              isDisabled={deleteLoading}
              onClick={() => handleDeletelPermission(id)}
              icon={<IoTrashBinOutline />}
              label="Delete"
              variant="ghost"
              colorScheme="red"
            />
          </>
        )}
      </Box>

      {showUpdateForm && (
        <PermissionForm
          buttonText="Update Permission"
          subject={subjectUpdate}
          setSubject={setUpdateSubject}
          description={descriptionUpdate}
          setDescription={setDescriptionUpdate}
          onClick={handleUpdatePermission}
          loading={loading}
          disabled={!isFormValid}
        />
      )}
    </ModalComponent>
  );
};

export default UserPermissionDetails;
