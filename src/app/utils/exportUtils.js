export const exportToCSV = (filteredData) => {
  const csvContent = "data:text/csv;charset=utf-8," +
    filteredData.map(user => Object.values(user).join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "users_data.csv");
  document.body.appendChild(link);
  link.click();
};