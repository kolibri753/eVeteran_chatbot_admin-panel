"use client"

import React, { useState } from "react";
import FilterDropdown from "../filterDropdown/filterDropdown";
import Table from "../table/table";
import { exportToCSV } from "../../utils/exportUtils";
import styles from "./usersDashboard.module.css";
import data from "../../data/mockData.json";

const UsersDashboard = () => {
  const [category, setCategory] = useState("all");

  const columns = [
    { key: "id", label: "ID" },
    { key: "status", label: "Status" },
    { key: "age", label: "Age" },
    { key: "location", label: "Location" },
  ];

  const options = [
    { value: "all", label: "All" },
    { value: "veteran", label: "Veterans" },
    { value: "family", label: "Families" },
  ];

  const filteredData = data.users.filter((user) => {
    if (category === "all") {
      return true;
    }
    return user.status === category;
  });

  const handleExportToCSV = () => {
    exportToCSV(filteredData);
  };

  return (
    <div>
      <FilterDropdown value={category} onChange={setCategory} options={options} />
      <Table columns={columns} data={filteredData} />
      <button onClick={handleExportToCSV}>Export to CSV</button>
    </div>
  );
};

export default UsersDashboard;
