import {v4 as uuidv4} from 'uuid';

let users = [];

// via url link we only perform get request, that is why we need third party servisec like postman api to  test our api
// add user
export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, id:userId};
    users.push(userWithId);
    res.send(`user with the username ${user.firstName} added to the database`);
}


// all routes are starting from /users
// get all users
export const getUsers = (req, res) => {
    res.send(users);
}


// to get the details of a particular user
export const getOneUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

// delete user
export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} deleted from the database`);
}

// update user
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName){
        user.firstName = firstName;
    }

    if (lastName){
        user.lastName = lastName;
    }

    if (age){
        user.age = age;
    }

    res.send(`user with the id : ${id} has been updated`);

}