import React, { useState } from "react";
import { IoNewspaperOutline, IoPeopleOutline } from "react-icons/io5";
import {
  DashboardLayout,
  EmployeeDashboard,
  PermissionDashboard,
} from "../components/dashboard";

const VerifierPage = () => {
  const [activePage, setActivePage] = useState("permission");

  const menuItems = [
    {
      name: "Permission",
      icon: IoNewspaperOutline,
      onClick: () => setActivePage("permission"),
    },
    {
      name: "Employee",
      icon: IoPeopleOutline,
      onClick: () => setActivePage("employee"),
    },
  ];
  const renderVerifierPage = () => {
    switch (activePage) {
      case "permission":
        return <PermissionDashboard />;
      case "employee":
        return <EmployeeDashboard />;
      default:
        return null;
    }
  };
  return (
    <DashboardLayout
      menuItems={menuItems}
      renderedPage={() => renderVerifierPage()}
    />
  );
};

export default VerifierPage;
