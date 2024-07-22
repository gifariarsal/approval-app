import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserPermissions,
  checkPermissionStatus,
} from "../../redux/reducer/permissionSlice";
import dateFormatter from "../../utils/dateFormatter";
import { Box, useDisclosure } from "@chakra-ui/react";
import LoadingSpinner from "../common/LoadingSpinner";
import NoDataFound from "../common/NoDataFound";
import TableComponent from "../common/TableComponent";
import UserPermissionDetails from "./UserPermissionDetails";

const UserPermission = ({ refresh }) => {
  const dispatch = useDispatch();
  const { permissions, loading } = useSelector((state) => state.permission);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(getUserPermissions());
  }, [dispatch, refresh]);

  const handlePermissionClick = async (row) => {
    const { id, date, subject, description } = row;
    await dispatch(checkPermissionStatus(id, setStatus));
    setSelectedPermission({
      id,
      date,
      status,
      subject,
      description,
    });
    onOpen();
  };

  const handleCloseModal = () => {
    setSelectedPermission(null);
    onClose();
  };

  const headers = ["No", "Date", "Subject", "Status"];
  const data = permissions.map((permission, index) => {
    let statusText;
    if (permission.isApplied === 0) {
      statusText = "Belum diizinkan";
    } else if (permission.isApplied === 1) {
      statusText = "Diizinkan";
    } else {
      statusText = "Status tidak diketahui";
    }

    return {
      id: permission.id,
      no: index + 1,
      date: dateFormatter(permission.created_at),
      subject: permission.subject,
      description: permission.description,
      status: statusText,
    };
  });

  return (
    <Box w="full" mt={8}>
      {loading ? (
        <LoadingSpinner />
      ) : permissions.length === 0 ? (
        <NoDataFound />
      ) : (
        <TableComponent
          headers={headers}
          data={data}
          onRowClick={handlePermissionClick}
        />
      )}
      {selectedPermission && (
        <UserPermissionDetails
          isOpen={isOpen}
          onClose={handleCloseModal}
          onSuccess={() => dispatch(getUserPermissions())}
          {...selectedPermission}
        />
      )}
    </Box>
  );
};

export default UserPermission;
