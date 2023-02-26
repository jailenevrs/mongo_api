const express = require('express')
const router = express.router
const {
    getThoughts,
    getsingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

} = require('../../controllers/thoughtcontroller')

router.route('/').get(getThoughts).post(createThought);

router.route('/:userId').get(getsingleThought);





module.exports = router