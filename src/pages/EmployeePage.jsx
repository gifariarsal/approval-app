import React, { useState } from "react";
import { IoNewspaperOutline, IoPersonOutline } from "react-icons/io5";
import DashboardLayout from "../components/dashboard/DashboardLayout";

const EmployeePage = () => {
  const [activePage, setActivePage] = useState("permittion");

  const menuItems = [
    {
      name: "Permittion",
      icon: IoNewspaperOutline,
      onClick: () => setActivePage("permittion"),
    },
    {
      name: "Account",
      icon: IoPersonOutline,
      onClick: () => setActivePage("account"),
    },
  ];
  const renderEmployeePage = () => {
    switch (activePage) {
      case "permittion":
        return <p>permittion</p>;
      case "account":
        return <p>Account</p>;
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
