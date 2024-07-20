import React, { useState } from "react";
import {
  IoPeopleOutline,
  IoKeyOutline,
  IoListCircleOutline,
} from "react-icons/io5";
import DashboardLayout from "../components/common/DashboardLayout";

const AdminPage = () => {
  const [activePage, setActivePage] = useState("employee");

  const menuItems = [
    {
      name: "Employee",
      icon: IoPeopleOutline,
      onClick: () => setActivePage("employee"),
    },
    {
      name: "Verifier",
      icon: IoKeyOutline,
      onClick: () => setActivePage("verifier"),
    },
    {
      name: "Permission",
      icon: IoListCircleOutline,
      onClick: () => setActivePage("permission"),
    },
  ];
  const renderAdminPage = () => {
    switch (activePage) {
      case "employee":
        return <p>Employee</p>;
      case "verifier":
        return <p>History</p>;
      case "permission":
        return <p>Payroll</p>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout
      menuItems={menuItems}
      renderedPage={() => renderAdminPage()}
    />
  );
};

export default AdminPage;
