const getRole = (level) => {
  switch (level) {
    case 2:
      return "Verifier";
    case 3:
      return "Employee";
    default:
      return "Unknown";
  }
};

export default getRole;
