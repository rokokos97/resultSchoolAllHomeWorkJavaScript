const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
let onlineUsers = [];
users.forEach((item) => {
  if (item.status === "online") {
    onlineUsers.push(item);
  }
});
let userOnlineName = onlineUsers.map((item) => item.username).join(", ");
alert(`Сейчас в онлайн следующие пользователи: ${userOnlineName}`);
