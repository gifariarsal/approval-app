import React, { useState } from "react";
import { IoNewspaperOutline, IoPeopleOutline } from "react-icons/io5";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import EmployeeDashboard from "../components/dashboard/EmployeeDashboard";

const VerifierPage = () => {
  const [activePage, setActivePage] = useState("employee");

  const menuItems = [
    {
      name: "Employee",
      icon: IoPeopleOutline,
      onClick: () => setActivePage("employee"),
    },
    {
      name: "Permission",
      icon: IoNewspaperOutline,
      onClick: () => setActivePage("permission"),
    },
  ];
  const renderVerifierPage = () => {
    switch (activePage) {
      case "employee":
        return <EmployeeDashboard />;
      case "permission":
        return <p>Permission</p>;
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
