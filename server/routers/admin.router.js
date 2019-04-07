const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/admin', (req, res) => {

}); // END GET Route

router.delete('/admin/delete/:id', (req, res) => {
   
}); // END PUT Route

module.exports = router;
