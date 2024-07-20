import React, { useState } from "react";
import {
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import DashboardLayout from "../components/dashboard/DashboardLayout";

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
      icon: IoShieldCheckmarkOutline,
      onClick: () => setActivePage("verifier"),
    },
    {
      name: "Permission",
      icon: IoNewspaperOutline,
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
