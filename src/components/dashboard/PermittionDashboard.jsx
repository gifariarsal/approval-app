import React, { useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { getPermittions } from "../../redux/reducer/permittionSlice";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import LoadingSpinner from "../common/LoadingSpinner";
import NoDataFound from "../common/NoDataFound";

const PermittionDashboard = () => {
  const dispatch = useDispatch();
  const { permittions, loading } = useSelector((state) => state.permittion);
  const { user } = useSelector((state) => state.auth);
  const { employees } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getPermittions());
  }, [dispatch]);

  const getUserName = (userId) => {
    const employee = employees.find((employee) => employee.id === userId);
    return employee ? employee.name : "Unknown User";
  };

  console.log(permittions);

  return (
    <DashboardPage title="Permittion">
      {loading ? (
        <LoadingSpinner />
      ) : permittions.length === 0 ? (
        <NoDataFound />
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
                  <Text fontSize={{ base: "sm", md: "md" }}>Subject</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {permittions &&
                permittions.map(
                  ({ id, userId, subject, description }, index) => (
                    <Tr key={id}>
                      <Td>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {index + 1}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {getUserName(userId)}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {subject}
                        </Text>
                      </Td>
                    </Tr>
                  )
                )}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </DashboardPage>
  );
};

export default PermittionDashboard;
