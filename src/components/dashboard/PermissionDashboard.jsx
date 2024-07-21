import React, { useState, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { getPermissions } from "../../redux/reducer/permissionSlice";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import LoadingSpinner from "../common/LoadingSpinner";
import NoDataFound from "../common/NoDataFound";
import dateFormatter from "../../utils/dateFormatter";
import PermissionDetails from "../permission/PermissionDetails";

const PermissionDashboard = () => {
  const dispatch = useDispatch();
  const { permissions, loading } = useSelector((state) => state.permission);
  const { user } = useSelector((state) => state.auth);
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

  const handlePermissionClick = ({
    created_at,
    userId,
    subject,
    description,
  }) => {
    const userName = getUserName(userId);
    const date = dateFormatter(created_at);

    setSelectedPermission({
      date,
      userName,
      subject,
      description,
    });
    onOpen();
  };

  return (
    <DashboardPage title="Permission">
      {loading ? (
        <LoadingSpinner />
      ) : permissions.length === 0 ? (
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
                  <Text fontSize={{ base: "sm", md: "md" }}>Date</Text>
                </Th>
                <Th>
                  <Text fontSize={{ base: "sm", md: "md" }}>Name</Text>
                </Th>
                <Th>
                  <Text fontSize={{ base: "sm", md: "md" }}>Subject</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {permissions &&
                permissions.map(
                  ({ id, created_at, userId, subject, description }, index) => (
                    <Tr
                      key={id}
                      onClick={() =>
                        handlePermissionClick({
                          created_at,
                          userId,
                          subject,
                          description,
                        })
                      }
                      cursor="pointer"
                      _hover={{
                        borderLeft: "4px solid",
                        borderColor: "brand.primary500",
                      }}
                    >
                      <Td>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {index + 1}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {dateFormatter(created_at)}
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
