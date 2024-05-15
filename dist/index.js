"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//------------User CRUD----------------
//create
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstName,
                lastName,
            },
        });
        console.log(res);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName,
            },
        });
        console.log(res);
    });
}
//read
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                email: username,
            },
        });
        console.log(user);
    });
}
//insertUser("admin1", "123456", "hrishi", "patil");
//updateUser("admin1", { firstName: "hrishikesh", lastName: "patil" });
//getUser("admin1");
//--------------TODO CRUD-----------------
//Create Todo
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title,
                description,
                userId,
            },
        });
        console.log(todo);
    });
}
//Get todo an User
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
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
    });
}
//createTodo(1, "go to gym", "go to gym and do 10 pushups");
getTodosAndUserDetails(1);
