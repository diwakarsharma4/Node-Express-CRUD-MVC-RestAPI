import express from "express";
import {createUser, getUsers, getOneUser, deleteUser, updateUser} from '../controller/controller.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;