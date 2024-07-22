import React, { useState } from "react";
import {
  Divider,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import ModalDataComponent from "../common/ModalDataComponent";
import ModalComponent from "../common/ModalComponent";
import TextAreaInput from "../inputs/TextAreaInput";
import { useDispatch } from "react-redux";
import MainButton from "../buttons/MainButton";
import { approvePermission } from "../../redux/reducer/permissionSlice";

const PermissionDetails = ({
  isOpen,
  onClose,
  verifierId,
  level,
  userId,
  id,
  date,
  userName,
  subject,
  description,
  isApplied,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [comment, setComment] = useState("");
  const [approved, setApproved] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRadioChange = (value) => {
    setApproved(value === "true");
  };

  const handleSubmit = async () => {
    await dispatch(
      approvePermission(
        verifierId,
        userId,
        id,
        comment,
        approved,
        setLoading,
        toast
      )
    );
    setComment("");
    onClose();
  };
  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      title="Permission Details"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={6}>
        <ModalDataComponent label="Name" value={userName} />
        <ModalDataComponent label="Date" value={date} />
        <ModalDataComponent label="Subject" value={subject} />
        <ModalDataComponent
          label="Status"
          value={isApplied ? "Approved" : "Waiting for Approval"}
          color={isApplied ? "green.600" : "orange.500"}
        />
      </Grid>
      <ModalDataComponent
        label="Description"
        value={description}
        my={3}
        fontWeight="normal"
      />
      <Divider my={6} />
      {!isApplied && level === 2 && (
        <form style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <RadioGroup onChange={handleRadioChange} value={approved.toString()}>
            <Stack
              direction="row"
              gap={20}
              mb={4}
            >
              <Radio value="true" colorScheme="green">
                Approve
              </Radio>
              <Radio value="false" colorScheme="red">
                Reject
              </Radio>
            </Stack>
          </RadioGroup>
          <TextAreaInput
            id="comment"
            name="Comment"
            placeholder="Add comment"
            value={comment}
            onChange={setComment}
            isRequired
          />
          <MainButton
            content="Submit"
            onClick={handleSubmit}
            loading={loading}
            disabled={loading || comment === ""}
          />
        </form>
      )}
    </ModalComponent>
  );
};

export default PermissionDetails;
