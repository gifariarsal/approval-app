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
  Spinner,
  Center,
} from "@chakra-ui/react";
import getRole from "../../utils/getRole";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

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
              {employees &&
                employees.map(({ id, name, email, level }, index) => (
                  <Tr key={id}>
                    <Td>
                      <Text fontSize={{ base: "sm", md: "md" }}>
                        {index + 1}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize={{ base: "sm", md: "md" }}>{name}</Text>
                    </Td>
                    <Td>
                      <Text fontSize={{ base: "sm", md: "md" }}>{email}</Text>
                    </Td>
                    {user.level === 1 && (
                      <Td>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {getRole(level)}
                        </Text>
                      </Td>
                    )}
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </DashboardPage>
  );
};

export default EmployeeDashboard;
