const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    age: 40,
    isActive: false,
  },
  {
    id: 5,
    name: 'William Brown',
    email: 'william.brown@gmail.com',
    age: 31,
    isActive: true,
  },
];

const usersWithEvenId = users.filter((user) => user.id % 2 === 0);

console.log(usersWithEvenId);
