const express = require("express");
const authMiddleware = require("../middleware/authMiddelWare");
const {getUser, updateUser , deleteUser, logoutUser , getUsers , adminDeleteUser , getSingleUser} = require("../controller/user.controller");

const router = express.Router();

router.get('/' , authMiddleware , getUser);
router.put('/update' , authMiddleware , updateUser);
router.delete('/admin-delete-user/:userIdToDelete' , authMiddleware , adminDeleteUser);
router.delete('/delete' , authMiddleware , deleteUser);
router.get('/logout' , authMiddleware , logoutUser);
router.get('/getUsers' , authMiddleware , getUsers);
router.get('/getSingleUser/:id' , authMiddleware , getSingleUser);

module.exports = router