const Users = [
  {
    user: "test",
    pass: "test",
    name: "Test",
    enabled: true,
    permits: ["support"],
  },
  {
    user: "juapernu",
    pass: "test",
    name: "Juan Manuel",
    enabled: true,
    permits: ["support", "learning"],
  },
  {
    user: "notenabled",
    pass: "test",
    name: "Juan Manuel",
    enabled: false,
    permits: ["support", "learning"],
  },
];

export default Users;
