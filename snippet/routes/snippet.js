const express = require('express')
const {createSnippet,getSnippet} = require('../controller/snippet')
const router = express.Router();

router.route("/").post(createSnippet).get(getSnippet)

module.exports = router