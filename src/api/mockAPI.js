export const getUsers = async () => {
    return Promise.resolve([
      { id: 1, name: "Alice", role: "Admin", status: "Active" },
      { id: 2, name: "Bob", role: "Editor", status: "Inactive" },
    ]);
  };
  
  export const getRoles = async () => {
    return Promise.resolve([
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    ]);
  };
  