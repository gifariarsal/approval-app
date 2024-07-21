import React, { useState } from "react";
import {
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import EmployeeDashboard from "../components/dashboard/EmployeeDashboard";
import PermittionDashboard from "../components/dashboard/PermittionDashboard";

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
      name: "Permittion",
      icon: IoNewspaperOutline,
      onClick: () => setActivePage("permittion"),
    },
  ];
  const renderAdminPage = () => {
    switch (activePage) {
      case "employee":
        return <EmployeeDashboard />;
      case "verifier":
        return <p>History</p>;
      case "permittion":
        return <PermittionDashboard />;
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
