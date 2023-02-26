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

router.route('/:userId').put(updateThought);

router.route('/userId').delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions').delete(removeReaction);




module.exports = router