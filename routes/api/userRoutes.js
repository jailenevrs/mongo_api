const router = require("express").Router()

const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
} = require("../../controllers/usercontroller")



router.route("/").get(getUsers).post(createUser)

router.route("/:userId").get(getSingleUser)
router.route("/:userId").put(updateUser)

router.route("/:userId").delete(deleteUser)