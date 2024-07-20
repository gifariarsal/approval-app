const getRole = (level) => {
  switch (level) {
    case 2:
      return "Verifikator";
    case 3:
      return "Employee";
    default:
      return "Unknown";
  }
};

export default getRole;
