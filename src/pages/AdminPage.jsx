import React, { useState } from "react";
import {
  IoPeopleOutline,
  IoNewspaperOutline,
  IoKeyOutline,
} from "react-icons/io5";
import {
  DashboardLayout,
  EmployeeDashboard,
  PermittionDashboard,
  VerifierDashboard,
} from "../components/dashboard";

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
        return <VerifierDashboard />;
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
