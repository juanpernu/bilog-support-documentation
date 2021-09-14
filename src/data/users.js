const Users = [
  {
    user: "test",
    pass: "test",
    name: "Test",
    enabled: true,
    permits: ["support"],
  },
  {
    user: "test2",
    pass: "test2",
    name: "Test",
    enabled: true,
    permits: ["support", "learning"],
  },
  {
    user: "admin",
    pass: "admin",
    name: "Admin",
    enabled: true,
    permits: ["support", "learning", "development"],
  },
  {
    user: "juapernu",
    pass: "test",
    name: "Juan Manuel",
    enabled: true,
    permits: ["support", "learning", "development"],
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
