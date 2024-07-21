import React, { useState, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { getPermissions } from "../../redux/reducer/permissionSlice";
import { useDisclosure } from "@chakra-ui/react";
import LoadingSpinner from "../common/LoadingSpinner";
import NoDataFound from "../common/NoDataFound";
import dateFormatter from "../../utils/dateFormatter";
import PermissionDetails from "../permission/PermissionDetails";
import TableComponent from "../common/TableComponent";

const PermissionDashboard = () => {
  const dispatch = useDispatch();
  const { permissions, loading } = useSelector((state) => state.permission);
  const { employees } = useSelector((state) => state.user);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPermission, setSelectedPermission] = useState(null);

  useEffect(() => {
    dispatch(getPermissions());
  }, [dispatch]);

  const getUserName = (userId) => {
    const employee = employees.find((employee) => employee.id === userId);
    return employee ? employee.name : "Unknown User";
  };

  const handlePermissionClick = (row) => {
    const { date, name: userName, subject, description } = row;
    setSelectedPermission({
      date,
      userName,
      subject,
      description,
    });
    onOpen();
  };

  const headers = ["No", "Date", "Name", "Subject"];
  const data = permissions.map((permission, index) => ({
    id: permission.id,
    no: index + 1,
    date: dateFormatter(permission.created_at),
    name: getUserName(permission.userId),
    subject: permission.subject,
    description: permission.description,
  }));

  return (
    <DashboardPage title="Permission">
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
        <PermissionDetails
          isOpen={isOpen}
          onClose={onClose}
          date={selectedPermission.date}
          userName={selectedPermission.userName}
          subject={selectedPermission.subject}
          description={selectedPermission.description}
        />
      )}
    </DashboardPage>
  );
};

export default PermissionDashboard;
