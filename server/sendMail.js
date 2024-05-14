const express = require('express');
const router = express.Router();

function sendMail(req, res) {
    res.send('Hello World!')
}

router.route("/").get(sendMail)

module.exports = router