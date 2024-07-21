import React, { useState, useEffect } from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import LoadingSpinner from "../common/LoadingSpinner";
import NoDataFound from "../common/NoDataFound";
import dateFormatter from "../../utils/dateFormatter";
import PermittionDetails from "../permittion/PermittionDetails";

const PermittionDashboard = () => {
  const dispatch = useDispatch();
  const { permittions, loading } = useSelector((state) => state.permittion);
  const { user } = useSelector((state) => state.auth);
  const { employees } = useSelector((state) => state.user);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPermition, setSelectedPermition] = useState(null);

  useEffect(() => {
    dispatch(getPermittions());
  }, [dispatch]);

  const getUserName = (userId) => {
    const employee = employees.find((employee) => employee.id === userId);
    return employee ? employee.name : "Unknown User";
  };

  const handlePermittionClick = ({
    created_at,
    userId,
    subject,
    description,
  }) => {
    const userName = getUserName(userId);
    const date = dateFormatter(created_at);

    setSelectedPermition({
      date,
      userName,
      subject,
      description,
    });
    onOpen();
  };

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
              {permittions &&
                permittions.map(
                  ({ id, created_at, userId, subject, description }, index) => (
                    <Tr
                      key={id}
                      onClick={() =>
                        handlePermittionClick({
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
      {selectedPermition && (
        <PermittionDetails
          isOpen={isOpen}
          onClose={onClose}
          date={selectedPermition.date}
          userName={selectedPermition.userName}
          subject={selectedPermition.subject}
          description={selectedPermition.description}
        />
      )}
    </DashboardPage>
  );
};

export default PermittionDashboard;
