import React from "react";
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

const TableComponent = ({ headers, data, onRowClick }) => {
  return (
    <TableContainer>
      <Table variant="striped" size={{ base: "sm", md: "md" }}>
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>
                <Text fontSize={{ base: "sm", md: "md" }}>{header}</Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr
              key={row.id}
              onClick={() => onRowClick(row)}
              cursor="pointer"
              _hover={{
                borderLeft: "4px solid",
                borderColor: "brand.primary500",
              }}
            >
              {headers.map((header, cellIndex) => (
                <Td key={cellIndex}>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {row[header.toLowerCase()]}
                  </Text>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
