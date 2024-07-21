import React, { useEffect, useState } from "react";
import DashboardPage from "./DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../redux/reducer/userSlice";
import { Spinner, Center, Text, useDisclosure } from "@chakra-ui/react";
import getRole from "../../utils/getRole";
import TableComponent from "../common/TableComponent";
import EmployeeDetails from "../employee/EmployeeDetails";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    onOpen();
  };

  const headers = ["No", "Name", "Email", user.level === 1 && "Role"].filter(
    Boolean
  );

  const data = employees.map((employee, index) => ({
    id: employee.id,
    no: index + 1,
    name: employee.name,
    email: employee.email,
    role: getRole(employee.level),
    level: employee.level,
    isVerified: employee.isVerified,
  }));

  return (
    <DashboardPage title="Employees">
      {loading ? (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="brand.primary500"
            color="brand.primary900"
            size={{ base: "md", md: "xl" }}
          />
        </Center>
      ) : employees.length === 0 ? (
        <Center>
          <Text fontSize={{ base: "sm", md: "lg" }} color="brand.primary600">
            No data found
          </Text>
        </Center>
      ) : (
        <TableComponent
          headers={headers}
          data={data}
          onRowClick={handleRowClick}
        />
      )}
      {selectedEmployee && (
        <EmployeeDetails
          isOpen={isOpen}
          onClose={onClose}
          employee={selectedEmployee}
          user={user}
        />
      )}
    </DashboardPage>
  );
};

export default EmployeeDashboard;
