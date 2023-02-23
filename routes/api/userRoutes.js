const router = require("express").Router()

const {
    getUsers,
    createUser
} = require("../../controllers/usercontroller")



router.route("/").get(getUsers).post(createUser)