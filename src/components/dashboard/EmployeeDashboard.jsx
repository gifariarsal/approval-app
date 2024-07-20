import React, { useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../redux/reducer/userSlice";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import getRole from "../../utils/getRole";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <DashboardPage title="Employees">
      <TableContainer>
        <Table variant="striped" size={{ base: "sm", md: "md" }}>
          <Thead>
            <Tr>
              <Th>
                <Text fontSize={{ base: "sm", md: "md" }}>No</Text>
              </Th>
              <Th>
                <Text fontSize={{ base: "sm", md: "md" }}>Nama</Text>
              </Th>
              <Th>
                <Text fontSize={{ base: "sm", md: "md" }}>Email</Text>
              </Th>
              {user.level === 1 && (
                <Th>
                  <Text fontSize={{ base: "sm", md: "md" }}>Role</Text>
                </Th>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((emp, index) => (
              <Tr key={emp.id}>
                <Td>
                  <Text fontSize={{ base: "sm", md: "md" }}>{index + 1}</Text>
                </Td>
                <Td>
                  <Text fontSize={{ base: "sm", md: "md" }}>{emp.name}</Text>
                </Td>
                <Td>
                  <Text fontSize={{ base: "sm", md: "md" }}>{emp.email}</Text>
                </Td>
                {user.level === 1 && (
                  <Td>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      {getRole(emp.level)}
                    </Text>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </DashboardPage>
  );
};

export default EmployeeDashboard;
