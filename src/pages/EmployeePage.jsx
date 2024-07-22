import React, { useState } from "react";
import { IoNewspaperOutline, IoPersonOutline } from "react-icons/io5";
import { DashboardLayout, UserAccountDashboard } from "../components/dashboard";
import UserPermissionDashboard from "../components/dashboard/UserPermissionDashboard";

const EmployeePage = () => {
  const [activePage, setActivePage] = useState("permission");

  const menuItems = [
    {
      name: "Permission",
      icon: IoNewspaperOutline,
      onClick: () => setActivePage("permission"),
    },
    {
      name: "Account",
      icon: IoPersonOutline,
      onClick: () => setActivePage("account"),
    },
  ];
  const renderEmployeePage = () => {
    switch (activePage) {
      case "permission":
        return <UserPermissionDashboard />;
      case "account":
        return <UserAccountDashboard />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout
      menuItems={menuItems}
      renderedPage={() => renderEmployeePage()}
    />
  );
};

export default EmployeePage;
