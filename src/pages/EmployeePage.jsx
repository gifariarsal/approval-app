import React, { useState } from 'react'
import { IoNewspaperOutline, IoPersonOutline } from "react-icons/io5";
import DashboardLayout from '../components/common/DashboardLayout';

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
        return <p>Permission</p>;
      case "account":
        return <p>Account</p>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout menuItems={menuItems} renderedPage={() => renderEmployeePage()} />
  )
}

export default EmployeePage