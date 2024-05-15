import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//------------User CRUD----------------
//create
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

//update
interface UpdateParams {
  firstName: string;
  lastName: string;
}
async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

//read
async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  console.log(user);
}

//insertUser("admin1", "123456", "hrishi", "patil");
//updateUser("admin1", { firstName: "hrishikesh", lastName: "patil" });
//getUser("admin1");

//--------------TODO CRUD-----------------

//Create Todo
async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(todo);
}

//Get todo an User
async function getTodosAndUserDetails(userId: number) {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
  console.log(todos);
}

//createTodo(1, "go to gym", "go to gym and do 10 pushups");
getTodosAndUserDetails(1);
